<template>
    <div class="h-screen flex-col bg-primary flex justify-center items-center text-gray-100 relative overflow-hidden font-reem">
        <BlobBackground />

        <!-- Title -->
        <div class="text-[40px] bg-white text-primary leading-[25px] px-5 pt-3 pb-4 -skew-x-12 relative -top-20 rounded-sm">
            my.train
        </div>

        <div class="w-10/12 relative z-10">
            <div class="flex gap-2 items-center pl-3 mb-4 text-sm text-gray-400">
                <div @click="selectedTimes = allTimes[0]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    J
                </div>

                <div @click="selectedTimes = allTimes[1]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    R
                </div>

                <div @click="selectedTimes = allTimes[2]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    J
                </div>

                <div @click="selectedTimes = allTimes[3]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    R
                </div>

                <div @click="selectedTimes = allTimes[4]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    R
                </div>

                <div @click="selectedTimes = allTimes[5]" class="bg-secondary/20 px-4 py-[2px] rounded-md hover:bg-secondary/30 transition cursor-default hover:active:bg-secondary/20">
                    R
                </div>
            </div>

            <!-- Train Timeline -->
            <div class="rounded-lg px-14 py-28 bg-secondary text-primary -skew-x-6">
                <AppTimeline
                    v-if="times?.length"
                    :times="times"
                />
            </div>
        </div>

        <!-- Current Stop -->
        <div class="text-white text-[50px] mt-10 whitespace-pre">
            {{ currentStops }}
        </div>

        <!-- How many minutes left before arrival (x min) -->
        <div class="text-white text-[40px] mt-2">
            {{ minutesBeforeArrival }} min
        </div>
    </div>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: 'my.train',
        description: 'Train Schedule',
        ogTitle: 'my.train',
        ogDescription: 'Train Schedule',
        ogImage: 'https://train.martinsz.lv/og-image.jpg',
    })

    const now = useNow()

    const allTimes = [
        [
            { time: '07:46:00', title: 'Jelgava' },
            { time: '07:51:00', title: 'Cukurfabrika' },
            { time: '07:55:00', title: 'Ozolnieki' },
            { time: '07:58:00', title: 'Cena' },
            { time: '08:02:00', title: 'Dalbe' },
            { time: '08:09:00', title: 'Olaine' },
            { time: '08:12:00', title: 'Jaunolaine' },
            { time: '08:16:00', title: 'Baloži' },
            { time: '08:20:00', title: 'Tīraine' },
            { time: '08:24:00', title: 'BA Turība' },
            { time: '08:25:00', title: 'Atgāzene' },
            { time: '08:29:00', title: 'Torņakalns' },
            { time: '08:33:00', title: 'Rīga' },
        ],

        [
            { time: '16:44:00', title: 'Rīga' },
            { time: '16:49:00', title: 'Torņakalns' },
            { time: '16:52:00', title: 'Atgāzene' },
            { time: '16:53:00', title: 'BA Turība' },
            { time: '16:56:00', title: 'Tīraine' },
            { time: '17:00:00', title: 'Baloži' },
            { time: '17:04:00', title: 'Jaunolaine' },
            { time: '17:08:00', title: 'Olaine' },
            { time: '17:14:00', title: 'Dalbe' },
            { time: '17:18:00', title: 'Cena' },
            { time: '17:21:00', title: 'Ozolnieki' },
            { time: '17:25:00', title: 'Cukurfabrika' },
            { time: '17:29:00', title: 'Jelgava' },
        ],

        [
            { time: '09:46:00', title: 'Jelgava' },
            { time: '09:51:00', title: 'Cukurfabrika' },
            { time: '09:55:00', title: 'Ozolnieki' },
            { time: '09:58:00', title: 'Cena' },
            { time: '10:02:00', title: 'Dalbe' },
            { time: '10:09:00', title: 'Olaine' },
            { time: '10:12:00', title: 'Jaunolaine' },
            { time: '10:16:00', title: 'Baloži' },
            { time: '10:20:00', title: 'Tīraine' },
            { time: '10:24:00', title: 'BA Turība' },
            { time: '10:25:00', title: 'Atgāzene' },
            { time: '10:29:00', title: 'Torņakalns' },
            { time: '10:33:00', title: 'Rīga' },
        ],

        [
            { time: '14:04:00', title: 'Rīga' },
            { time: '14:24:00', title: 'Olaine' },
            { time: '14:42:00', title: 'Jelgava' },
        ],

        [
            { time: '14:44:00', title: 'Rīga' },
            { time: '14:49:00', title: 'Torņakalns' },
            { time: '14:52:00', title: 'Atgāzene' },
            { time: '14:53:00', title: 'BA Turība' },
            { time: '14:56:00', title: 'Tīraine' },
            { time: '15:00:00', title: 'Baloži' },
            { time: '15:04:00', title: 'Jaunolaine' },
            { time: '15:08:00', title: 'Olaine' },
            { time: '15:14:00', title: 'Dalbe' },
            { time: '15:18:00', title: 'Cena' },
            { time: '15:21:00', title: 'Ozolnieki' },
            { time: '15:25:00', title: 'Cukurfabrika' },
            { time: '15:29:00', title: 'Jelgava' },
        ],

        [
            { time: '15:44:00', title: 'Rīga' },
            { time: '15:49:00', title: 'Torņakalns' },
            { time: '15:52:00', title: 'Atgāzene' },
            { time: '15:53:00', title: 'BA Turība' },
            { time: '15:56:00', title: 'Tīraine' },
            { time: '16:00:00', title: 'Baloži' },
            { time: '16:04:00', title: 'Jaunolaine' },
            { time: '16:09:00', title: 'Olaine' },
            { time: '16:15:00', title: 'Dalbe' },
            { time: '16:19:00', title: 'Cena' },
            { time: '16:22:00', title: 'Ozolnieki' },
            { time: '16:26:00', title: 'Cukurfabrika' },
            { time: '16:30:00', title: 'Jelgava' },
        ],
    ]

    const selectedTimes = ref(allTimes[0])

    const nowDateFormatted = computed(() => {
        return now.value.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    })

    const times = computed(() => {
        return selectedTimes.value.map(time => {
            const today = new Date()
            const [hours, minutes, seconds] = time.time.split(':')
            today.setHours(Number(hours))
            today.setMinutes(Number(minutes))
            today.setSeconds(Number(seconds))

            return {
                ...time,
                time: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${hours}:${minutes}:${seconds}`
            }
        })
    })

    const currentStops = computed(() => {
        const currentStopIndex = times.value.findIndex(time => new Date(time.time).getTime() > now.value.getTime())

        if (currentStopIndex === -1) {
            return times.value[times.value.length - 1].title
        }

        if (currentStopIndex === 0) {
            return times.value[0].title
        }

        const previousStop = times.value[currentStopIndex - 1]
        const currentStop = times.value[currentStopIndex]

        if (new Date(previousStop.time).getTime() === now.value.getTime()) {
            return previousStop.title
        }

        if (new Date(currentStop.time).getTime() === now.value.getTime()) {
            return currentStop.title
        }

        return `${previousStop.title}    -->    ${currentStop.title}`
    })

    const minutesBeforeArrival = computed<number>(() => {
        // return minutes before arrival. We know the current time. And we know the last stop time (times.value[times.value.length - 1].time)

        const lastStopTime = new Date(times.value[times.value.length - 1].time)
        const minutes = Math.floor((lastStopTime.getTime() - now.value.getTime()) / 60000)

        return minutes
    })
</script>
