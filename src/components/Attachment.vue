<script setup>
  const props = defineProps({
    data: Object,
  })
  const { version, fileName, fileSize, docType, date } = props.data
</script>
<template>
  <div
    class="User-attachment p-4 mb-2 flex justify-between items-center border-solid border-0 border-b-2 border-slate-200"
  >
    <div>
      <span class="block font-bold text-sm uppercase">Versión {{ version }}</span>
      <span class="block font-bold text-main"
        >Título del archivo a subir {{ fileName }}</span
      >
      <span class="block text-slate-600 text-md font-semibold"
        >{{ docType }} ({{ fileSize }}) {{ date }}</span
      >
    </div>
    <div class="icon">
      <svg
        fill="#0C8CFA"
        width="38px"
        height="38px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M960 73c221.816 0 408.847 143.661 478.08 342.212 10.052-.678 19.99-3.388 30.155-3.388 249.149 0 451.765 202.616 451.765 451.764s-202.616 451.765-451.765 451.765h-451.764v315.445l185.9-186.014 79.963 79.849L960 1846.967l-322.334-322.334 79.962-79.85 185.901 186.015v-315.445H395.294C177.318 1315.353 0 1138.035 0 920.059c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.224 2.71 61.553 5.986C482.597 274.487 697.073 73 960 73Zm56.47 847.059H903.53v282.353h112.94V920.059Z"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
