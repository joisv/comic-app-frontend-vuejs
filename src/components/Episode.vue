<template v-if="episodes.length">
    <section>
   <div title="New Episode" class="max-w-screen-lg m-auto py-5">
      <h1 class="sm:text-4xl text-2xl text-slate-200 font-bold opacity-50 ml-2 sm:m-0 hidden">New Episode</h1>
      <div class="w-full flex justify-end">
         <h1 class="sm:hidden p-2 bg-red-600 text-slate-200 w-fit font-semibold text-lg rounded-bl-lg">New Episode</h1>
      </div>
   </div>
   <div class="wraper relative w-full">
       <div class="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-1 max-w-screen-lg m-auto" id="loop">
         <template v-for="episode in episodes" :key="episode.id">
            <article class="bg-eps block w-full h-52 md:h-64 lg:h-72 xl:h-80 relative bg-top bg-cover lazy" :style="{ 'background-image': 'url(' + (episodes.length && episode.series.image ? base.baseUrlImage + episode.series.image : '/image/Sample.jpg') + ')' }"> 
               <router-link :to="{name: 'detail', params: { slug: episode.series.slug } }">
                  <div class="relative w-full h-full">
                     <div class="absolute bottom-0 w-full p-1">
                        <div title="Boku No Kaasan" class="w-full self-center">
                           <h1 class="text-sm font-semibold z-20 sm:text-lg text-slate-200">{{ episode.title }}</h1>
                        </div>
                        <div class="bgTypes type w-fit h-fit mb-2">
                              <h1 class="types text-xs font-semibold text-slate-200" v-bind:class="[      'types', 'p-1','text-xs', 'font-semibold', 'text-slate-200',      episode.series.info && episode.series.info.type === 'Manhwa' ? 'bg-manhwa' : 'bg-doujinshi'
                            ]">{{ episode.series.info ? episode.series.info.type : 'N/A' }}</h1> 
                        </div>
                     </div>
                  </div>
               </router-link>
            </article>
         </template>
      </div>
   </div>
</section>
</template>
<script setup>
import useFetch from '../composable/fetch';
import { onMounted } from 'vue';
import { postStore } from '../stores/counter'

    const base = postStore()
    const { episodes, getEpisodes } = useFetch();
    onMounted(() => getEpisodes());

</script>
