<template>
  <div
    class="flex min-h-screen flex-col justify-between bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-500/50"
  >
    <UINavbar />
    <slot />
    <UIFooter />
  </div>
</template>

<script setup></script>
