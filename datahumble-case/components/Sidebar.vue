<template>
  <aside class="w-[240px] bg-white border-r border-neutral-200 flex flex-col h-full justify-between rounded-xl p-4">
    <!-- Logo -->
    <div class="flex items-center justify-center h-16">
      <span class="text-lg font-extrabold text-blue-500 tracking-tight">Dash</span>
    </div>

    <!-- Navigation -->
    <div>
      <div class="px-4 uppercase text-[10px] font-semibold tracking-widest text-gray-400 mb-2">Overview</div>
      <ul class="space-y-1">
        <!-- Active Dashboard -->
        <li>
          <a
            href="#"
            class="flex items-center rounded-tr-full rounded-br-full bg-neutral-100 text-blue-500 text-xs font-semibold px-4 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Dashboard
          </a>
        </li>

        <!-- Inbox -->
        <li>
          <a
            href="#"
            class="flex items-center rounded-tr-full rounded-br-full hover:bg-neutral-100 text-gray-500 text-xs font-semibold px-4 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h18M3 16h18" />
            </svg>
            Inbox
          </a>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <div>
      <div class="px-4 uppercase text-[10px] font-semibold tracking-widest text-gray-400 mb-2 mt-4">Settings</div>
      <ul class="space-y-1 pb-4">
        <!-- Settings -->
        <li>
          <a
            href="#"
            class="flex items-center rounded-tr-full rounded-br-full hover:bg-neutral-100 text-gray-500 text-xs font-semibold px-4 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
            </svg>
            Settings
          </a>
        </li>
        <!-- Logout -->
        <li>
          <a
            href="#"
            class="flex items-center rounded-tr-full rounded-br-full hover:bg-neutral-100 text-red-500 text-xs font-semibold px-4 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
            </svg>
            Logout
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
