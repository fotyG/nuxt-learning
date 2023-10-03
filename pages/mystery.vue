<template>
  <div class="container mx-auto flex flex-col items-center">
    <h5 class="text-xl font-semibold text-slate-800">
      Click emojis to remove them.
    </h5>
    <div>
      <ul v-auto-animate class="flex gap-x-5">
        <li
          class="cursor-pointer text-[4rem]"
          v-for="item in items"
          :key="item"
          @click="removeItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="box-content">
      <button
        class="mt-[2px] box-border rounded-xl border-b-4 border-b-sky-800 bg-sky-500 px-4 py-2 font-semibold text-white ring-2 ring-sky-800 transition-all ease-out hover:shadow-lg hover:shadow-indigo-900 active:mt-[4px] active:translate-y-1 active:border-b-2"
        @click="items = ['😏', '😐', '😑', '😒', '😕']"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script setup>
const items = ref(["😏", "😐", "😑", "😒", "😕"]);
function removeItem(toRemove) {
  items.value = items.value.filter((item) => item !== toRemove);
}
</script>
