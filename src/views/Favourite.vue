<template>
    <div class="h-fit relative top-16  max-w-screen-lg mx-auto ">
        <h1 class="text-4xl text-slate-200 font-bold absolute right-3 opacity-50">Favourite</h1>
        <div class="cont relative grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
          <template v-if="datas.length">
          <template v-for="data in datas" :key="data.id">
            <div class="image duration-200 ease-in">
                <a href="#">
                    <img class="w-full h-80 object-cover object-center relative bg-eps lazy" :src="data.image" alt="">
                    <div class="absolute text-slate-100 text-lg z-20 bottom-3 font-semibold txt-shadow flex justify-center">
                        <h1 class="text-center">{{ data.title }}</h1>
                    </div>
                </a>
            </div> 
         </template>
         </template>
         <div v-else>Tidak ada apapun disini</div>
        </div>
    </div>

</template>
<script setup>
import { onMounted, watchEffect } from '@vue/runtime-core';
import {ref} from 'vue'
import { postStore }  from "../stores/counter"
  const storeCounter = postStore();
  const datas = ref([])
  onMounted(() => {
    storeCounter.genres()
  })
  watchEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"))
    datas.value = data
     
  })

</script>
