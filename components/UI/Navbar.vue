<template>
  <nav class="flex items-center justify-center p-4">
    <ul
      class="relative flex items-center gap-x-10 rounded-full bg-white/80 px-6 py-4 font-bold text-gray-400 dark:bg-black/30 dark:text-white"
    >
      <NuxtLink
        :active-class="'underline underline-offset-2'"
        to="/"
        class="group relative cursor-pointer content-center"
      >
        <span class="relative z-10 group-hover:text-white">Home</span>
        <div
          class="absolute -inset-x-3 -inset-y-2 z-0 rounded-full bg-slate-800/30 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-slate-800/80"
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
      <ClientOnly>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="h-8 w-8" />
        </template>
      </ClientOnly>
    </ul>
  </nav>
</template>

<script setup>
const m = "/mystery";
const active = true;
const path = useRoute().path;

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
