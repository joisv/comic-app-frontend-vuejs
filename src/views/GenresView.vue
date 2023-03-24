<template>
  <div class="flex relative top-12 gap-3 overflow-x-scroll ease-in duration-200 h-20 items-center justify-center">
    <template v-for="genre in genres" :key="genre.id">
    <button class="a h-14" :id="genre.slug" @click="genresSeries(genre.slug)">
          <div class="h-14 py-1 px-4 flex items-center rounded-sm relative bg-slate-800">
            <h1 class="text-lg font-semibold text-slate-200 genre-list">{{ genre.name}}</h1>
            <div class="absolute px-1 top-0 left-0">
              <p class="text-lg text-slate-400 opacity-50 font-bold">{{ genre.series_count }}</p>
            </div>
          </div>
        </button>
    </template>
  </div>

 <div class="h-fit relative top-10 max-w-screen-lg mx-auto">
      <template v-if="genre.length">
    <h1 class="text-4xl text-slate-200 font-bold absolute right-3 opacity-70">Genres</h1>
    <div class="cont absolute grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
        <template v-for="item in genre" :key="item.genre">
          <div class="image duration-200 ease-in">
            <a href="#">
                <img class="w-full h-80 object-cover object-center relative bg-eps" src="image/Sample.jpg" alt="">
                <div class="absolute text-slate-100 text-lg bottom-3 font-semibold txt-shadow flex justify-center">
                    <h1 class="text-center">{{ item.title }}</h1>
                </div>
            </a>
          </div>
        </template>
    </div>
      </template>
      <div v-else class="relative w-full">
        <div class="text-slate-200 w-1/2 bg-primary p-2 text-xl font-medium absolute right-0 top-4">What genres for today?</div>
      </div>
</div>
</template>

<script setup>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { postStore }  from "../stores/counter"
import useFetch from '../composable/fetch';

  const { genres, genresName, genre, genresSeries } = useFetch();
  const storeCounter = postStore();
    onMounted(() => {
      genresName()
    });
    onUpdated(() => {
      const genresSeries = (slug) => {}
      storeCounter.genresNav()
        if(genre.value.length > 0){
          storeCounter.genres()
        }
    })

</script>

