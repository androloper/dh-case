<template>
  <div class="bg-white rounded-xl shadow p-4">
    <div class="font-semibold text-sm text-gray-700 mb-2">Description</div>
    <p class="text-xs text-gray-500 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({ description: String })
</script>
