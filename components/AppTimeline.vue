<template>
    <div class="relative w-full h-[6px] rounded-full" :key="timeTicks">
        <!-- Timeline (past & future) -->
        <div class="absolute h-[6px] bg-primary rounded-full" :style="{ width: currentTimeProportion + '%' }"></div>
        <div class="absolute h-[6px] bg-gray-200 rounded-full" :style="{ left: currentTimeProportion + '%', right: 0 }"></div>

        <!-- Train Icon -->
        <div 
            class="absolute" 
            :style="{ left: getTrainPosition(currentTimeProportion), bottom: '24px' }">

            <NuxtImg src="/train.png" class="w-[120px]" />
        </div>

        <!-- Timeline Points -->
        <div
            v-for="(item, index) in timelineItems"
            :key="index"
            class="absolute bottom-[-7px] size-[20px] rounded-full bg-primary flex flex-col items-center"
            :style="{ left: `calc(${item.proportion * 100}% - 10px)` }">

            <div class="bg-gray-700 text-gray-200 text-xs rounded py-1 px-2 mb-2 relative top-6 text-nowrap text-center">
                {{ item.title }}

                <br>

                <span class="lowercase">
                    {{ getTimeShortFormat(item.time) }}
                </span>
            </div>

            <div class="size-[20px] rounded-full bg-primary"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        times: { time: string, title: string }[]
    }>()

    const timeTicks = ref(0)
    const currentTimeProportion = ref(0)

    const timelineItems = computed(() => {
        const times = props.times.map(item => ({
            ...item,
            time: new Date(item.time).getTime()
        }))

        const minTime = Math.min(...times.map(item => item.time))
        const maxTime = Math.max(...times.map(item => item.time))

        return times.map(item => ({
            ...item,
            proportion: (item.time - minTime) / (maxTime - minTime)
        }))
    })

    const getTimeShortFormat = (time: number) => {
        const date = new Date(time)

        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }

    const getTrainPosition = (currentTimeProportion: number): string => {
        if (currentTimeProportion <= 7.2) {
            return '-15px'
        }

        if (currentTimeProportion >= 100) {
            return 'calc(100% - 120px)'
        }

        return `calc(${currentTimeProportion}% - 122px)`
    }

    const updateCurrentTimeProportion = () => {
        const now = new Date().getTime()
        const times = props.times.map(item => new Date(item.time).getTime())
        const minTime = Math.min(...times)
        const maxTime = Math.max(...times)

        currentTimeProportion.value = ((now - minTime) / (maxTime - minTime)) * 100
        currentTimeProportion.value = Math.min(Math.max(currentTimeProportion.value, 0), 100)

        timeTicks.value++
    }

    let intervalId: NodeJS.Timeout

    onMounted(() => {
        updateCurrentTimeProportion()

        intervalId = setInterval(updateCurrentTimeProportion, 1000)
    })

    onUnmounted(() => clearInterval(intervalId))
</script>
