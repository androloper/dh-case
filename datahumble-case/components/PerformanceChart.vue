<template>
  <div class="h-64">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)

const props = defineProps({ chartData: Object })

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: { color: '#374151', font: { size: 12 } }
    }
  },
  scales: {
    y: { grid: { color: '#E5E7EB' }, ticks: { color: '#9CA3AF' } },
    x: { grid: { color: '#E5E7EB' }, ticks: { color: '#9CA3AF' } }
  },
  elements: { line: { tension: 0.4 } }
}
</script>
