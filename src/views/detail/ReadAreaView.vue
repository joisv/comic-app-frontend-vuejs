<template>
  <section class="relative">
    <nav class="fixed z-20 duration-300" :class="{ '-translate-y-20': navRead }">
        <div class="title-chapter w-screen flex justify-center static p-2 mb-2 bg-trasnparent" >
            <div class="flex items-center absolute left-2">
            <button @click="goBack">
                <svg width="27" height="27" viewBox="0 0 27 27" class="lg:fill-slate-200 lg:w-12 lg:h-12">
                    <path d="M23.625 12.375H7.68375L11.7112 8.33625L10.125 6.75L3.375 13.5L10.125 20.25L11.7112 18.6638L7.68375 14.625H23.625V12.375Z"/>
                    </svg>
            </button>
        </div>
            <h1 class="text-2xl font-semibold " title="Death Note">{{ episode && episode.embeds && episode.embeds[0] && episode.embeds[0].episode && episode.embeds[0].episode.title }}</h1>
        </div>
    </nav>
</section>
<div class="w-full h-screen z-10 absolute flex justify-center">
    <!-- {{-- popup --}} -->
    <div class="popp popup-shadow w-[88%] max-w-screen-md h-44 bg-red-500 fixed top-[35%] border-2 border-black grid justify-items-center p-1" id="popup" v-if="popads" >
        <h3 class="text-center text-slate-300 font-semibold text-lg mt-7">Bantu website ini untuk tetap update manga favourite kalian</h3>
        <div class="btn-popup w-full h-20 flex items-center justify-center gap-1">
            <button class="w-11 h-auto p-[3px] bg-slate-400 flex justify-center" @click="goBack">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M23.625 12.375H7.68375L11.7112 8.33625L10.125 6.75L3.375 13.5L10.125 20.25L11.7112 18.6638L7.68375 14.625H23.625V12.375Z" fill="black"/>
                    </svg>
            </button>
            <button class="w-fit h-auto p-1 bg-gradient-to-tr from-[#00B1BC] to-[#D40073]" @click="popAds">
                <span class="text-slate-200 text-center font-semibold text-base">Lanjutkan membaca</span>
            </button>
        </div>
    </div>
    <!-- {{-- end popup --}} -->
    <div class="box-shadow-nav bottom-5 fixed w-9/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-11 flex items-center duration-200 drop-shadow-xl max-w-screen-sm" :class="{ 'translate-y-20': navRead }">
            <button class="relative flex items-center justify-center -right-5" id="loveme">
                <svg  width="31px" height="31px" viewBox="0 0 24 24" id="favourite" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                    <path id="primary" d="M20.28,4.74a5.82,5.82,0,0,0-8.28,0,5.82,5.82,0,0,0-8.28,0,5.94,5.94,0,0,0,0,8.34l7.57,7.62a1,1,0,0,0,1.42,0l7.57-7.62a5.91,5.91,0,0,0,0-8.34Z" />
                </svg>
            </button>
        <button class="absolute right-2 flex items-center -rotate-180">
            <template v-if="episode.nextepisode">
                <router-link :to="{ name: 'readarea', params: { slug: nextepisode } }" :key="nextepisode">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M23.625 12.375H7.68375L11.7112 8.33625L10.125 6.75L3.375 13.5L10.125 20.25L11.7112 18.6638L7.68375 14.625H23.625V12.375Z" fill="black"/>
                        </svg>
                </router-link>
            </template>
        </button>
        <button class="absolute right-8 flex items-center" @click="goBack">
             <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M23.625 12.375H7.68375L11.7112 8.33625L10.125 6.75L3.375 13.5L10.125 20.25L11.7112 18.6638L7.68375 14.625H23.625V12.375Z" fill="black"/>
                    </svg>
        </button>
    </div>
</div>
<section class="grid justify-items-center">
    <div class="absolute max-w-screen-md">
        <template v-if="episode.embeds">
            <template v-for="embed in episode.embeds" :key="embed.id">
                <img :src="embed.embed" alt="">
            </template>
        </template>
        <template v-else>
            <Loading/>
        </template>
    </div>
</section>
</template>

<script setup>
import useFetch from '../../composable/fetch';
import Loading from '../../components/skeleton/Loading.vue'
import { watchEffect, onUpdated } from 'vue';
import { postStore } from '../../stores/counter'

    // const navRead = ref(false),
    const props = defineProps({
        slug:{
            required: true,
            type: String
        }
    })
    const base = postStore()
    const { episode, nextepisode, getEpisode } = useFetch();
    watchEffect( async () => await getEpisode(props.slug));
     
</script>
<script>
    export default {
        data(){
            return{
                popads: true,
                navRead: false,
                lastScrollTop: 0
            }
        },
        methods: {
            popAds(){
                this.popads = false
            },
            goBack() {
                this.$router.back()
            },
            handleScroll(){
                const currentScroll = window.scrollY
                console.log(currentScroll);
                if (currentScroll > this.lastScrollTop) {
                    this.navRead = true
                }else{
                    this.navRead = false
                }
               this.lastScrollTop = currentScroll
            }
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll);
            const nav = document.querySelectorAll('.navbar')
            nav.forEach(element => {
            element.style.display = 'none'
        });
        }
    }
</script>

