<template>
  <div class="container mx-auto text-center text-white">
    <div class="flex justify-center gap-x-2">
      <button @click="refresh" class="w-1/6 rounded-md bg-indigo-800/80 p-2">
        Refresh
      </button>
      <button @click="cut" class="w-1/6 rounded-md bg-indigo-800/80 p-2">
        5
      </button>
    </div>
    <div v-if="pending">...Loading</div>
    <div v-else-if="error">Something went wrong.. Please try again!</div>
    <div v-else class="mt-5 flex flex-wrap items-center justify-center gap-y-2">
      <div class="max-w-md px-2" v-for="post in posts" :key="post.id">
        <h3 class="line-clamp-1 font-bold">
          {{ post.title }}
        </h3>
        <p class="text-justify text-sm">
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = ref([]);
// const isLoading = ref(false);

const {
  // data: posts,
  data,
  pending,
  error,
  refresh,
} = await useFetch(() => "https://jsonplaceholder.typicode.com/posts");

watchEffect(() => {
  if (data.value) {
    posts.value = data.value;
    // isLoading.value = false;
  }
  // if (pending.value) {
  //   isLoading.value = pending.value;
  // }
});

const cut = () => {
  posts.value = posts.value.slice(0, 5);
};

// const fresh = async () => {
//   const { data } = await useFetch(
//     () => "https://jsonplaceholder.typicode.com/posts",
//   );

//   posts.value = data.value;
//   refresh();
// };

// isLoading.value = pending.value;
</script>
