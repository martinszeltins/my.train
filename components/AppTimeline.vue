<template>
    <div class="relative w-full h-[6px] bg-primary rounded-full">
        <div
            v-for="(time, index) in timeSpan"
            :key="index"
            class="absolute bottom-[-7px] size-[20px] rounded-full bg-primary"
            :style="{ left: `calc(${time * 100}% - 5px)` }">
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        times: Date[]
    }>()

    const normalizedTimes = computed(() =>  {
        return props.times.map(time => new Date(time).getTime())
    })

    const timeSpan = computed(() => {
        const times = normalizedTimes.value
        const minTime = Math.min(...times)
        const maxTime = Math.max(...times)

        return times.map(time => {
            return (time - minTime) / (maxTime - minTime)
        })
    })
</script>
