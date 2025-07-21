<template>
  <div class="flex h-screen bg-gray-100 p-6">
    <Sidebar />
    <div class="flex flex-col flex-1 ps-6">
      <Navbar />
      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
</script>
