<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
    <!-- Main Content -->
    <div class="space-y-6">
      <!-- Stat Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Price" :value="`$${overview?.price}`" bgClass="bg-blue-100">
          <template #icon>🎮</template>
        </StatCard>
        <StatCard title="Downloads" :value="downloadsFormatted" bgClass="bg-pink-100">
          <template #icon>🐷</template>
        </StatCard>
        <StatCard title="Revenue" :value="revenueFormatted" bgClass="bg-red-100">
          <template #icon>💰</template>
        </StatCard>
      </div>

      <!-- Performance -->
      <div class="bg-white rounded-xl shadow p-4">
        <div class="font-semibold text-sm text-gray-700 mb-2">Performance</div>
        <PerformanceChart :chartData="performanceChartData" />
      </div>

      <!-- Description -->
      <DescriptionBlock :description="overview?.description" />
    </div>

    <!-- Right Sidebar -->
    <div class="space-y-4">
      <!-- Short Description -->
      <div class="bg-white rounded-xl shadow p-4">
        <div class="font-semibold text-sm text-gray-700 mb-2">Short Description</div>
        <p class="text-xs text-gray-500 leading-relaxed">{{ overview?.description }}</p>
      </div>

      <!-- Stream Performance -->
      <StreamPerformance
        :streamCounts="stream?.dailyStreamCounts"
        :stats="stream"
      />
    </div>
  </div>
</template>

<script setup>
import StatCard from '~/components/StatCard.vue'
import PerformanceChart from '~/components/PerformanceChart.vue'
import DescriptionBlock from '~/components/DescriptionBlock.vue'
import StreamPerformance from '~/components/StreamPerformance.vue'

const { data: overview } = await useFetch('https://dhcase-mockapi.vercel.app/api/game/578080/overview')
const { data: performance } = await useFetch('https://dhcase-mockapi.vercel.app/api/game/578080/performance')
const { data: stream } = await useFetch('https://dhcase-mockapi.vercel.app/api/game/578080/stream')

const performanceChartData = computed(() => {
  if (!performance.value) return { labels: [], datasets: [] }
  return {
    labels: performance.value.dates,
    datasets: [
      {
        label: 'Watch Time',
        data: performance.value.watchTime,
        fill: true,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4
      },
      {
        label: 'Engagement',
        data: performance.value.engagement,
        fill: true,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4
      }
    ]
  }
})

const downloadsFormatted = computed(() =>
  overview.value ? overview.value.downloads.toLocaleString('en-US') : ''
)

const revenueFormatted = computed(() =>
  overview.value ? `$${overview.value.revenue.toLocaleString('en-US')}` : ''
)
</script>
