<template>
  <section v-if="posts.length">
    <div title="New Episode" class="max-w-screen-lg m-auto py-5">
        <h1 class="sm:text-4xl text-2xl text-slate-200 font-bold opacity-50 ml-2 sm:m-0 hidden">New Series</h1>
          <div class="w-full flex justify-end">
         <h1 class="sm:hidden p-2 bg-cyan-500 text-slate-200 w-fit font-semibold text-lg">New Series</h1>
      </div>
     </div>
    <div class="w-full relative">
    <div class="max-w-screen-lg grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1 mx-auto">
        <article class="bg-eps w-full h-full bg-cover bg-top sm:bg-top row-span-2 relative lazy" :style="{ 'background-image': 'url(' + (posts.length ? base.baseUrlImage + posts[0].image : 'image/Sample.jpg') + ')' }">
            <router-link :to="{name: 'detail', params: { slug: posts[0].slug } }">
            <div class="w-full h-full absolute">
                  <div class="bg-primary flex items-center justify-center absolute w-full p-2">
                        <h1 class="text-slate-200 font-semibold">NEW</h1>
                  </div>
                  <div class="w-full h-full relative">
                     <div  class="absolute bottom-2">
                        <div title="#" class="p-1">
                           <h1 class="text-center font-medium text-lg text-slate-200">{{ posts.length ? posts[0].title : 'No data available' }}</h1>
                        </div>
                        <div class="bgTypes w-fit h-fit p-1 ">
                           <h1 v-bind:class="[      'types', 'p-1','text-xs', 'font-semibold', 'text-slate-200',      posts.length && posts[0].info.type === 'Manhwa' ? 'bg-manhwa' : 'bg-doujinshi'
                            ]">{{ posts.length ? posts[0].info.type : 'No data available' }}</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </router-link>
          </article>
       <div v-for="post in posts.slice(1)" :key="post.id">
        <router-link :to="{ name: 'detail' , params: { slug: post.slug } }"  class="group block">
            <article class="bg-eps w-full h-52 md:h-64 lg:h-72 xl:h-80 relative bg-cover bg-top after:group-hover:bg-sky-400 after:w-full after:h-full after:absolute after:duration-75 after:group-hover:ease-in overflow-hidden sm:bg-top lazy" :style="{ 'background-image': 'url(' + (post.image ? base.baseUrlImage + post.image : 'image/Sample.jpg') + ')' }">
                <div class="w-full h-full p-1 relative">
                    <div class="p-1 bg-primary w-[30%] flex items-center justify-center absolute right-1">
                        <span class="sm:text-sm text-xs font-medium">{{ post.info ? post.info.ratings : 'N/A' }}</span>
                    </div>
                    <div class="absolute bottom-0">
                        <div class="w-full">
                            <h1 title="Naruto Shippuden" class="text-sm font-semibold z-20 sm:text-lg text-slate-200">{{ post.title }}</h1>
                        </div>
                        <div class="flex items-center">
                            <div class="bgTypes">
                                    <h1 v-bind:class="[      'types', 'p-1', 'text-xs', 'font-semibold', 'text-slate-200',      post.info && post.info.type === 'Manhwa' ? 'bg-manhwa' : 'bg-doujinshi']">{{ post.info ? post.info.type : 'Tidak ada tipe' }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </router-link >
        </div>
    </div>
    </div>
</section>
</template>

<script setup>
import useFetch from '../composable/fetch';
import { onMounted } from 'vue';
import { postStore } from '../stores/counter'

    const base = postStore()
    const { posts, getPost } = useFetch();
    onMounted(() => getPost());
</script>

<style>

</style>