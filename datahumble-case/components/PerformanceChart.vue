<template>
  <div class="relative bg-white p-4 rounded-xl">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-base font-semibold">Performance</h2>
      <select
        v-model="selectedDate"
        class="text-sm border rounded px-2 py-1 focus:outline-none text-center"
      >
        <option value="all">{{ dateRangeLabel }}</option>
        <option
          v-for="date in performance?.dates"
          :key="date"
          :value="date"
        >
          {{ formatOptionDate(date) }}
        </option>
      </select>
    </div>
    <div class="h-64">
      <Line v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)

const selectedDate = ref('all')
const performance = ref(null)

onMounted(async () => {
  const res = await fetch('https://dhcase-mockapi.vercel.app/api/game/578080/performance')
  performance.value = await res.json()
})

const dateRangeLabel = computed(() => {
  if (!performance.value) return 'Loading...'
  const firstDate = performance.value.dates[0]
  const lastDate = performance.value.dates[performance.value.dates.length - 1]
  return `${formatOptionDate(firstDate)} - ${formatOptionDate(lastDate)}`
})

function formatOptionDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
}

function formatFullDate(date) {
  const d = new Date(date)
  const day = d.getDate().toString().padStart(2, '0')
  const month = d.toLocaleString('en-GB', { month: 'short' })
  const year = d.getFullYear().toString().slice(-2)
  return `${day} ${month} ${year}'`
}

const chartData = computed(() => {
  if (!performance.value) return null

  if (selectedDate.value === 'all') {
    return {
      labels: performance.value.dates.map(date => formatFullDate(date)),
      datasets: [
        {
          label: 'Watch Time',
          data: performance.value.watchTime,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 2,  // küçük tickler toplu görünüm
          borderWidth: 1.5
        },
        {
          label: 'Engagement',
          data: performance.value.engagement,
          borderColor: '#F97316',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 2,
          borderWidth: 1.5
        }
      ]
    }
  } else {
    const index = performance.value.dates.indexOf(selectedDate.value)
    return {
      labels: ['', formatFullDate(selectedDate.value), ''],  // ortalamak için
      datasets: [
        {
          label: 'Watch Time',
          data: [null, performance.value.watchTime[index], null],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,  // daha büyük nokta tek gün görünümünde
          borderWidth: 2
        },
        {
          label: 'Engagement',
          data: [null, performance.value.engagement[index], null],
          borderColor: '#F97316',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          borderWidth: 2
        }
      ]
    }
  }
})

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: ([ctx]) => {
          const label = ctx.label || ''
          return label  // zaten formatFullDate olarak geliyor
        },
        label: (ctx) => {
          const datasetLabel = ctx.dataset.label
          const val = ctx.parsed.y
          return `${datasetLabel}: ${val}h`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#9CA3AF',
      },
      grid: { display: false }
    },
    y: {
      min: 0,
      max: 12,
      ticks: {
        stepSize: 2,
        callback: v => `${v}h`,
        color: '#9CA3AF'
      },
      grid: { color: '#F3F4F6' }
    }
  },
  elements: { line: { tension: 0.4 } }
}))
</script>
