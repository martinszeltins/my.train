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
        new Date('2023-01-01 00:00:00'),
        new Date('2023-01-01 01:00:00'),
        new Date('2023-01-01 5:00:00'),
    ])
</script>
