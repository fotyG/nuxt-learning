<template>
  <div class="container mx-auto flex-1">
    <h1 class="text-center text-xl font-bold text-white">Hello</h1>
    <UAccordion
      variant="solid"
      color="violet"
      class="mt-10"
      multiple
      :items="items"
    >
      <template #item="{ item }">
        <p class="text-center italic text-gray-900 dark:text-white">
          {{ item.description }}
        </p>
      </template>
      <template #getting-started>
        <div class="text-center text-gray-900 dark:text-white">
          <Logo class="mx-auto h-8 w-auto" />
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Fully styled and customizable components for Nuxt.
          </p>
        </div>
      </template>
      <template #installation="{ description }">
        <div class="mb-4 flex flex-col items-center justify-center gap-1">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Installation
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Install <code>@nuxt/ui</code> dependency to your project:
          </p>
          <p>chel: {{ description }}</p>
        </div>
        <div class="flex flex-col items-center">
          <code>$ npm install @nuxt/ui</code>
          <code>$ yarn add @nuxt/ui</code>
          <code>$ pnpm add @nuxt/ui</code>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<script setup>
const items = [
  {
    label: "Razruls",
    icon: "i-heroicons-information-circle",
    color: "white",
    defaultOpen: true,
    slot: "item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    color: "primary",
    slot: "getting-started",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    defaultOpen: true,
    slot: "installation",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    defaultOpen: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>
