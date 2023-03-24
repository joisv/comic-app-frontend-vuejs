<template>
<div class="navbar" v-if="showNav">
    <div class="w-auto h-8 bg-primary absolute flex items-center justify-center p-2 rounded-br-lg top-3 z-10 sm:hidden" id="kanan">
      <button class="z-50" id="btn-menu" @click="toggleNavbar">
          <h1 class="text-slate-300 text-sm font-bold">Menu</h1>
      </button>
  </div>
<nav id="navbar" class="relative z-10 duration-200 sm:hidden " :class="[{ '-translate-x-full': showNavbar, 'ease-in-out': showNavbar }]">
    <div class="wrap-menu w-screen h-screen bg-bgDark absolute p-2">
       
        <div class="w-full h-16">
            <div class="logo">
              
                <div class="search relative">
                        <input type="text"  class="searchMe w-full h-10 rounded-[2px] block px-2 py-1 xl:w-1/2 font-normal text-slate-200 bg-primary bg-opacity-80 bg-clip-padding border border-none focus:outline-none mb-2 right-2 text-lg search-sm" placeholder="Search..." v-model="query"  @input="liveSearch()">
                        <div class="bg-slate-900 w-full p-2 absolute Cont z-50 search-sm"  v-if="query.length > 0">
                             <template v-if="loading">
                              <div class="p-3 text-lg font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-sm animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                            </template>
                            <template v-if="!loading">
                                <template v-for="series in result" :key="series.id">
                                        <router-link :to="`/detail/${series.slug}`" @click="toggleNavbar">
                                            <div class="flex justify-between items-center">
                                                <h1 class="text-slate-200 font-medium mb-3">{{ series.title }}</h1>
                                                <span class="py-1 px-2 font-medium bg-cyan-500 text-sm">{{ series.info }}</span>
                                            </div>
                                        </router-link>
                                </template>
                            </template>
                        </div> 
                </div>
            </div>
            <div class="w-full h-screen grid items-center">
                <div class="flex relative -top-32">
                    <div class="menu w-full grid justify-items-end">
                        <ul class="mobile-nav ease-in-out duration-1000 mr-2" :class="{'translate-x-32':showMenusMobile}">
                                    <li class="flex items-center" @click="toggleNavbar">
                                        <router-link  :to="{name: 'home'}">
                                            <span class="ml-3 text-slate-200">Home</span>
                                        </router-link>
                                    </li>
                                   <li class="flex items-center" @click="toggleNavbar">
                                           <a class="" href="#">
                                       <span class="ml-3">List</span>
                                   </a>
                                       </li>
                                   <li class="flex items-center" @click="toggleNavbar">
                                        <router-link :to="{ name: 'trending' }">
                                            <span class="ml-3">Trending</span>
                                        </router-link>
                                   </li>
                                   <li class="flex items-center" @click="toggleNavbar">
                                        <router-link :to="{ name: 'genres' }">
                                            <span class="ml-3">Genre</span>
                                        </router-link>
                                    </li>
                                   <li class="flex items-center" @click="toggleNavbar">
                                           <a class="" href="#">
                                       <span class="ml-3">Schedule</span>
                                   </a>
                                   </li>
                                   <li class="flex items-center" @click="toggleNavbar">
                                           <router-link class="" :to="{name: 'favourite'}">
                                       <span class="ml-3">Favourite</span>
                                   </router-link>
                                   </li>
                        </ul>
                        <div class="flex items-center absolute left-12">
                            <button @click="toggleNavbar">
                                <svg width="27" height="27" viewBox="0 0 27 27" class="fill-slate-200 w-12 h-12">
                                    <path d="M23.625 12.375H7.68375L11.7112 8.33625L10.125 6.75L3.375 13.5L10.125 20.25L11.7112 18.6638L7.68375 14.625H23.625V12.375Z"/>
                                    </svg>
                            </button>
                        </div>
                    </div>
                    <div class="bg-bgDark border-primary border-l-4 w-[55%] z-10">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</nav>
<nav>
    <div class="relative z-50 hidden sm:block">
        <div class="absolute px-5 py-3 flex gap-14 w-full">
            <div class="w-full h-auto bg-transparent">
                <a href="/">
                <h1 class="text-primary font-bold text-2xl group-hover:text-slate-200">XX<span class="group-hover:text-primary font-bold text-2xl text-slate-200 text-center">Toon</span></h1>
            </a>
            </div>
                <div class="absolute z-50 flex items-center justify-end w-[70%]">
                    <ul>
                        <div class="flex items-center gap-4">
                            <li class="font-normal text-slate-200 text-lg"><router-link  :to="{name: 'home'}">
                                            <span class="ml-3 text-slate-200">Home</span>
                                        </router-link></li>
                            <li class="font-normal text-slate-200 text-lg"><a class="nav-item" href="/list">List</a></li>
                            <li class="font-normal text-slate-200 text-lg"><router-link :to="{ name: 'trending' }">
                                            <span class="ml-3">Trending</span>
                                        </router-link></li>
                            <li class="font-normal text-slate-200 text-lg"> <router-link :to="{ name: 'genres' }">
                                            <span class="ml-3">Genre</span>
                                        </router-link></li>
                            <li class="font-normal text-slate-200 text-lg"><a class="nav-item" href="/schedule">Schedule</a></li>
                            <li class="font-normal text-slate-200 text-lg"><router-link class="nav-item" :to="{name: 'favourite'}">Favourite</router-link></li>
                        </div>
                    </ul>
                </div>
            <div class="relative w-full -top-1">
                    <input type="text" class="searchMe search-lg absolute rounded-sm block px-2 py-1 w-1/2 font-normal text-slate-200 bg-primary bg-opacity-80 bg-clip-padding border border-none focus:outline-none mb-2 right-2 text-lg" placeholder="search here..." v-model="query"  @input="liveSearch()">
            </div>
        </div>
        <div class="Cont search-lg absolute w-1/3 bg-slate-900 right-7 top-12 px-5 py-2 rounded-sm" v-if="query.length > 0">
            <template v-if="loading">
                <Loading/>
            </template>
            <template v-if="!loading">
                <template v-for="series in result" :key="series.id">
                    <router-link :to="`/detail/${series.slug}`">
                        <div class="flex justify-between items-center" v-if="resultQuery">
                            <h1 class="text-slate-200 font-medium mb-3">{{ series.title }}</h1>
                            <span class="py-1 px-2 font-medium bg-cyan-500 text-sm">{{ series.info }}</span>
                        </div>
                    </router-link>
                </template>
            </template>
        </div>
    </div>
</nav>
</div>

</template>
<script setup>
import useFetch from '../composable/fetch';
import Loading from '../components/skeleton/Loading.vue'
import { ref, onUpdated } from 'vue';

    const showNavbar = ref(true);
    const showMenusMobile = ref(true);
    const showNav = ref(true);
    const resultQuery = ref(false);
    const query = ref('')

    const { result, loading, liveSearch } = useFetch();

    const toggleNavbar = () => {
      showMenusMobile.value = !showMenusMobile.value;
      showNavbar.value = !showNavbar.value;
    };
    let currentRequest = null;

    onUpdated(() => {
        if (query.value.length > 0) {
            if (!currentRequest) {

                currentRequest = liveSearch(query.value).then(() => {
                currentRequest = null;
                loading.value = false

            });
            }
            resultQuery.value = !resultQuery.value
        }
    });
   
    


    // onMounted(() => liveSearch(query.value))

</script>