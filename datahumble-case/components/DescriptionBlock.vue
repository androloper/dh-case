<template>
  <div>
    <h2 class="text-base font-semibold pb-2">Description</h2>
    <div class="bg-gray-100 p-6 rounded-xl">
    <p class="text-xs text-gray-500 leading-relaxed">{{ description }} {{ description }} {{ description }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({ description: String })
</script>
