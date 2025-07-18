<template>
  <header class="h-16 bg-transparent flex items-center justify-between">
    <input
      type="text"
      placeholder="Search..."
      class="w-1/2 rounded-full border border-neutral-300 px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div class="flex items-center space-x-4">
      <button class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405M19 13v-3a4 4 0 00-4-4H9m6 4v4m0 4H9" />
        </svg>
      </button>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Russell" class="w-8 h-8 rounded-full object-cover" />
    </div>
  </header>
</template>
