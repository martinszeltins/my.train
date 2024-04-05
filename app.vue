<template>
    <div class="h-screen flex-col bg-primary flex justify-center items-center text-gray-100 relative overflow-hidden font-reem">
        <BlobBackground />

        <div class="text-[40px] bg-white text-primary leading-[25px] px-5 pt-3 pb-4 -skew-x-12 relative -top-20 rounded-sm">
            my.train
        </div>

        <div class="w-10/12 relative z-10">
            <!-- Main Card -->
            <div class="rounded-lg px-14 py-28 bg-secondary text-primary -skew-x-6">
                <AppTimeline
                    :times="times"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
</script>
