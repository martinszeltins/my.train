<template>
    <div class="h-screen flex-col bg-primary flex justify-center items-center text-gray-100 relative overflow-hidden font-reem">
        <BlobBackground />

        <!-- Title -->
        <div class="text-[40px] bg-white text-primary leading-[25px] px-5 pt-3 pb-4 -skew-x-12 relative -top-20 rounded-sm">
            my.train
        </div>

        <div class="w-10/12 relative z-10">
            <!-- Train Timeline -->
            <div class="rounded-lg px-14 py-28 bg-secondary text-primary -skew-x-6">
                <AppTimeline
                    :times="times"
                />
            </div>
        </div>

        <!-- Current Stop -->
        <div class="text-white text-[50px] mt-10 whitespace-pre">
            {{ currentStops }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const now = useNow()

    const times = ref([
        { time: '2024-04-05 07:46:00', title: 'Jelgava' },
        { time: '2024-04-05 07:51:00', title: 'Cukurfabrika' },
        { time: '2024-04-05 07:55:00', title: 'Ozolnieki' },
        { time: '2024-04-05 07:58:00', title: 'Cena' },
        { time: '2024-04-05 08:02:00', title: 'Dalbe' },
        { time: '2024-04-05 08:09:00', title: 'Olaine' },
        { time: '2024-04-05 08:12:00', title: 'Jaunolaine' },
        { time: '2024-04-05 08:16:00', title: 'Baloži' },
        { time: '2024-04-05 08:20:00', title: 'Tīraine' },
        { time: '2024-04-05 08:24:00', title: 'BA Turība' },
        { time: '2024-04-05 08:25:00', title: 'Atgāzene' },
        { time: '2024-04-05 08:29:00', title: 'Torņakalns' },
        { time: '2024-04-05 08:33:00', title: 'Rīga' },
    ])

    // Loop over all times and change the date to always be today. e.g. if time is 2024-04-05 07:46:00 but today is 2024-04-10 then it should change it to 2024-04-10 07:46:00
    times.value = times.value.map(time => {
        const today = new Date()
        const [hours, minutes, seconds] = time.time.split(' ')[1].split(':')
        today.setHours(Number(hours))
        today.setMinutes(Number(minutes))
        today.setSeconds(Number(seconds))

        return {
            ...time,
            time: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${hours}:${minutes}:${seconds}`
        }
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
</script>
