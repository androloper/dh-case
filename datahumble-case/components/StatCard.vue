<template>
  <div class="flex items-center rounded-3xl p-6 bg-white">
    <div class="w-36 h-36 flex items-center justify-center rounded-2xl shadow mr-4" :style="`background: ${bgClass}`">
      <slot name="icon" />
    </div>
    <div class="flex flex-col space-y-16">
      <div class="text-3xl font-medium">{{ formatted }}</div>
      <div class="text-sm">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatValue } from '~/utils/formatValue.js'
const props = defineProps({
  title: String,
  value: [String, Number],
  bgClass: String
})
const formatted = computed(() => formatValue(props.value))
</script>
