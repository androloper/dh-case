<template>
  <div :class="`rounded-xl p-4 flex items-center space-x-4 ${bgClass}`">
    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow">
      <slot name="icon" />
    </div>
    <div>
      <div class="text-xs text-gray-500 font-medium">{{ title }}</div>
      <div class="text-xl font-bold">{{ value }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  bgClass: String
})
</script>
