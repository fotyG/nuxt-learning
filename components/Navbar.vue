<template>
  <nav class="flex items-center justify-center p-4">
    <ul
      class="relative flex gap-x-10 rounded-full bg-black/30 px-6 py-4 font-bold text-white"
    >
      <NuxtLink to="/home" class="group relative cursor-pointer">
        <span class="relative z-10">Home</span>
        <div
          class="absolute -inset-x-3 -inset-y-2 z-0 rounded-full bg-slate-800/80 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </NuxtLink>
      <NuxtLink to="/about" class="group relative cursor-pointer">
        <span class="relative z-10">About</span>
        <div
          class="absolute -inset-x-3 -inset-y-2 z-0 rounded-full bg-slate-800/80 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </NuxtLink>
      <NuxtLink
        :to="active ? m : 'babmoozled'"
        class="group relative cursor-pointer"
      >
        <span class="relative z-10">Mystery</span>
        <div
          class="absolute -inset-x-3 -inset-y-2 z-0 rounded-full bg-slate-800/80 opacity-0 transition-opacity group-hover:opacity-100"
        />
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
const m = "/mystery";
const active = true;
</script>
<style lang="scss" scoped></style>
