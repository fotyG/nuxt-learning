<template>
  <div class="container bg-red-500">
    <div class="relative">
      <!-- Trigger button -->
      <button class="text-white focus:outline-none" @click="toggleDropdown(33)">
        Click me
      </button>

      <!-- Dropdown content -->
      <div
        class="absolute mt-2 w-48 origin-top-left rounded bg-white shadow-lg transition duration-200"
        :class="isOpen ? 'opacity-1 scale-1' : 'scale-0 opacity-0'"
      >
        <!-- Dropdown items -->
        <div
          class="bg-slate-200 py-2 dark:bg-slate-600"
          @click="closeDropdown()"
        >
          <!-- Your dropdown items here -->
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Item 1</a
          >
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Item 2</a
          >
          <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Item 3</a
          >
        </div>
      </div>
    </div>
    <div>I am the following div</div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const toggleDropdown = (num) => {
  isOpen.value = !isOpen.value;
  console.log(num);
};

const closeDropdown = () => {
  isOpen.value = false;
};
</script>
