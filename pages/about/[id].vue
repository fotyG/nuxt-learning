<template>
  <div class="container mx-auto text-white">
    <div class="flex flex-col items-center justify-center gap-2">
      <button @click="notify" class="btn btn-outline">Press me pljiz</button>
      <div class="dropdown">
        <label tabindex="0" class="btn m-1">Click</label>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- <div v-if="toaster" class="toast">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
// let toaster = ref(false);
// let toastId = null;
// const toastUp = () => {
//   toaster.value = true;
// };

// watchEffect(() => {
//   if (toaster.value) {
//     clearTimeout(toastId);
//     toastId = setTimeout(() => {
//       toaster.value = false;
//     }, 3000);
//   }
// });
const notify = () => {
  toast.warning("success");
};
</script>

<style lang="scss" scoped></style>
