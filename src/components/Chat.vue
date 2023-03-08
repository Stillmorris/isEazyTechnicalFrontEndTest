<script setup>
import Attachment from "@/components/Attachment.vue";
import Comment from "@/components/Comment.vue";
import { useCommentsStore } from "@/stores/comments";
const comments = useCommentsStore();
</script>

<template>
  <div class="Modal w-full max-w-5xl bg-white rounded-md overflow-hidden">
    <div
      class="Modal-head relative border-solid border-0 border-b-2 border-b-slate-600"
    >
      <span class="block text-xl font-bold p-4 flex-grow text-center"
        >Comentarios</span
      >
      <button class="absolute right-2 top-4 border-0 bg-transparent text-main">
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0C8CFA"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          />
        </svg>
      </button>
    </div>
    <div id="Chat" class="Modal-body overflow-auto max-h-[64vh] p-4 border-solid border-0 border-b-2 border-b-slate-200">
      <template v-for="(item, index) in comments.items" :key="index">
        <Attachment v-if="item.type === 'attachment'" :data="item.data"
        />
        <Comment v-if="item.type === 'comment'" :data="item.data"/>
      </template>
    </div>
    <div class="Modal-footer p-6 flex justify-between items-center">
      <input
        class="flex-grow bg-white rounded-3xl border-solid border-slate-200 leading-8 px-4 text-sm text-slate-500 outline-none focus:shadow-lg shadow-main"
        type="text"
        name="inputMessage"
        id="inputMessage"
        autofocus
        :value="comments.currentMessage"
        v-on:keyup="event => comments.keyup(event)"
      />
      <button 
        class="border-0 bg-transparent text-black"
        v-on:click="() => comments.add()"
      >
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="send"
          class="icon glyph rounded-full bg-main p-2 hover:cursor-pointer"
        >
          <path
            d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z"
            style="fill: white"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
