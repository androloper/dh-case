<template>
  <div class="bg-white rounded-xl shadow p-4">
    <div class="font-semibold text-sm text-gray-700 mb-2">Stream Performance</div>
    <div class="grid grid-cols-5 text-center text-xs text-gray-500 mb-4">
      <div v-for="(count, day) in streamCounts" :key="day">
        <div class="font-semibold text-gray-700">{{ day.slice(0, 2) }}</div>
        <div>{{ count }}</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <div class="text-gray-500 text-xs">Hours Watched</div>
        <div class="font-bold text-lg">{{ stats.hoursWatched.value.toLocaleString() }}</div>
        <div :class="stats.hoursWatched.delta >= 0 ? 'text-green-500' : 'text-red-500'">
          {{ stats.hoursWatched.delta >= 0 ? '+' : '' }}{{ stats.hoursWatched.delta.toLocaleString() }} ({{ stats.hoursWatched.deltaPercentage }}%)
        </div>
      </div>
      <div>
        <div class="text-gray-500 text-xs">Average Viewers</div>
        <div class="font-bold text-lg">{{ stats.averageViewers.value.toLocaleString() }}</div>
        <div :class="stats.averageViewers.delta >= 0 ? 'text-green-500' : 'text-red-500'">
          {{ stats.averageViewers.delta >= 0 ? '+' : '' }}{{ stats.averageViewers.delta.toLocaleString() }} ({{ stats.averageViewers.deltaPercentage }}%)
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  streamCounts: Object,
  stats: Object
})
</script>
