<template>
  <div class="rounded-xl">
        <h2 class="text-base font-semibold pb-2">Stream Performance</h2>
    <div class="h-44 bg-gray-100 rounded-xl p-2">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
    <h2 class="text-base font-semibold pt-2">Stream Stats</h2>
    <div class="mt-2 grid grid-cols-2 gap-2">
      <!-- Hours Watched -->
      <div class="bg-gray-100 rounded-xl p-3 h-44 text-start">
        <h2 class="text-base font-semibold pb-6">Hours Watched</h2>
        <div class="text-4xl font-bold pb-8">{{ formatNumber(stats.hoursWatched.value) }}</div>
        <div class="flex items-center space-x-1 text-md">
          <div :class="stats.hoursWatched.delta >= 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'" class="rounded-full w-6 h-8 flex items-center justify-center text-lg">
            <span v-if="stats.hoursWatched.delta >= 0">↑</span>
            <span v-else>↓</span>
          </div>
          <span :class="stats.hoursWatched.delta >= 0 ? 'text-lg text-green-500' : 'text-lg text-red-500'">
            {{ formatDelta(stats.hoursWatched.delta) }}
          </span>
          <h2 class="text-lg font-semibold"> ({{ stats.hoursWatched.deltaPercentage }}%)</h2>
        </div>
      </div>
      <!-- Average Viewers -->
      <div class="bg-gray-100 rounded-xl p-3 h-44 text-start">
        <h2 class="text-base font-semibold pb-6">Average Viewers</h2>
        <div class="text-4xl font-bold pb-8">{{ formatNumber(stats.averageViewers.value) }}</div>
        <div class="flex items-center space-x-1 text-md mt-1">
          <div :class="stats.averageViewers.delta >= 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'" class="rounded-full w-6 h-8 flex items-center justify-center text-lg">
            <span v-if="stats.averageViewers.delta >= 0">↑</span>
            <span v-else>↓</span>
          </div>
          <span :class="stats.averageViewers.delta >= 0 ? 'text-lg text-green-500' : 'text-lg text-red-500'">
            {{ formatDelta(stats.averageViewers.delta) }}
          </span>
          <h2 class="text-lg font-semibold"> ({{ stats.averageViewers.deltaPercentage }}%) </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const props = defineProps({
  streamCounts: Object,
  stats: Object
})

// Format helpers
const formatNumber = (val) => {
  if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M`
  if (val >= 1_000) return `${(val / 1_000).toFixed(1)}K`
  return val
}

const formatDelta = (val) => {
  const absVal = Math.abs(val)
  if (absVal >= 1_000_000) return `${(absVal / 1_000_000).toFixed(1)}M`
  if (absVal >= 1_000) return `${(absVal / 1_000).toFixed(1)}K`
  return absVal
}

// Prepare chart data
const dayShorts = Object.keys(props.streamCounts).map(day => day.slice(0, 3))

const chartData = {
  labels: dayShorts,
  datasets: [
    {
      data: Object.values(props.streamCounts),
      backgroundColor: '#3B82F6',
      borderRadius: 12,
      barThickness: 40
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 2,
        color: '#9CA3AF', // light gray
        font: { size: 10 }
      },
      grid: { color: '#F3F4F6' }
    },
    x: {
      grid: { display: false },
      ticks: {
        color: '#6B7280',
        font: { size: 10 }
      }
    }
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  }
}
</script>
