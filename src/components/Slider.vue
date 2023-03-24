<template>
  <section>
    <div class="menu">
      <div class="swiper w-full h-full">
          <div class="swiper-wrapper h-[43vh] sm:h-[60vh] lg:h-[80vh]">
            <template v-if="posts.length">
            <template v-for="post in posts" :key="post.id">
            <div class="swiper-slide relative">
              <div class="lazy sm:bg-image bg-top w-screen h-full bg-cover bg-eps" :style="{ 'background-image': 'url(' + (post.image ? base.baseUrlImage + post.image : 'image/Sample.jpg') + ')' }">
                <div class="sm:hidden w-fit absolute bottom-0 p-2 m-2 max-w-[50%]">
                  <h1 class="font-bold text-primary xl:text-5xl text-2xl">{{ post.title }}</h1>
                    <span class="px-2 bg-[#48FCA6] text-slate-800 font-medium lg:text-base text-sm rounded-sm flex justify-center items-center w-fit mt-1">{{ post.info ? post.info.rating : 'N/A' }}</span>
                </div>
              </div>
              <div class="sm:flex items-end hidden">
                <div class="flex items-center gap-5 absolute z-20 bottom-12 max-h-[60vh] h-3/5">
                  <img class="bg-eps w-44 max-h-72 object-cover object-center ml-20 lazy" :src="post.image ? base.baseUrlImage + post.image : 'image/Sample.jpg' ">
                  <div>
                    <h1 class="font-bold text-primary xl:text-5xl text-2xl">{{ post.title }}</h1>
                    <div class="flex gap-1 text-slate-200 font-medium text-lg mt-2">
                        <h3>{{ post.genres ? post.genres.length > 0 ? post.genres.map(g => g.name).join(', ') : 'Genre not available' : 'Genre not available' }}</h3>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="px-2 bg-primary text-slate-100 lg:text-base text-sm rounded-sm">
                          <h2>Rating</h2>
                      </div>
                      <div class="text-slate-200 rounded-sm">
                          <span>{{ post.info ? post.info.rating : 'N/A' }}</span>
                      </div>
                    </div>
                    <h3 class="bg-primary w-fit px-2 text-slate-100 mt-2 text-sm lg:text-base">{{ post.info ? post.info.type : 'N/A' }}</h3>
                    <div class="w-1/2 h-fit">
                      <div  class="xl:text-lg text-slate-600 text-sm">
                        <p>{{ post.body ? post.body.substring(0, 100) + '...' : 'No description available' }}</p>
                      </div>
                    </div>
                    <button class="mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit py-1 px-7">
                      <h1 class="font-semibold text-slate-200 text-xl">Watch</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </template>
            </template>
            <!-- start Loadin -->
              <SliderSkeleton v-else/>
            <!-- endLoadin -->
        </div>

            <div class="w-full items-center justify-center p-1 hidden sm:flex sm:flex-wrap">
              <div class="w-[80%] text-slate-400 mt-10 p-2">
                <h1 class="text-2xl">Watch Doujin and Manwha online free</h1>
                <p>watch tv shows online, watch tv shows online on JVNK, watch tv shows online free in high quality, free watch tv shows online</p>
              </div>
            </div>
    </div>
  </div>
</section>
</template>

<script setup>
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
import useFetch from '../composable/fetch';
import { onMounted, nextTick, onUpdated  } from 'vue';
import { postStore } from '../stores/counter'
import SliderSkeleton from '../components/skeleton/SliderSkeleton.vue'

  const base = postStore()
  const { posts, getPost } = useFetch();
  onMounted(() => getPost());
  
  onUpdated( async () => {
    await nextTick();
    const swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  })
</script>

<style>

</style>