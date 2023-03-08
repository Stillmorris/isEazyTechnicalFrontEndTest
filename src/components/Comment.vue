<script setup>
const props = defineProps({
  data: Object,
});
const { isHost, message, date } = props.data;
</script>
<template>
  <div class="p-3 flex justify-end items-center gap-2" v-if="isHost">
    <div class="max-w-[80%] flex items-center">
      <div class="bg-main rounded-md p-4">
        <p class="text-blue-100 mt-0 mb-1 leading-5 font-semibold">
          {{ message }}
        </p>
        <span class="text-blue-100 text-xs font-semibold">{{ date }}</span>
      </div>
      <div
        class="border-solid border-[.6em] border-main border-t-transparent border-r-transparent border-b-transparent"
      ></div>
    </div>
    <img
      class="block rounded-full"
      width="40"
      height="40"
      src="https://randomuser.me/api/portraits/women/54.jpg"
      alt="Profile picture"
    />
  </div>
  <div class="p-3 flex justify-start items-center gap-2" v-else>
    <img
      class="block rounded-full"
      width="40"
      height="40"
      src="https://randomuser.me/api/portraits/men/9.jpg"
      alt="Profile picture"
    />
    <div class="max-w-[80%] flex items-center">
      <div
        class="border-solid border-[.6em] border-slate-50 border-t-transparent border-l-transparent border-b-transparent"
      ></div>
      <div class="bg-slate-50 rounded-md p-4">
        <p class="mt-0 mb-1 leading-5 font-semibold">
          {{ message }}
        </p>
        <span class="text-xs font-semibold">{{ date }}</span>
      </div>
    </div>
  </div>
</template>
