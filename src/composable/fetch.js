import axios from "axios";
import { ref } from "vue"
import {useRouter} from 'vue-router'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"

export default function useFetch(){
    const posts = ref([]);
    const post = ref([]);
    const episodes = ref([]);
    const episode = ref([]);
    const nextepisode = ref([]);
    const result = ref([]);
    const genres = ref([]);
    const genre = ref([]);
    const loading = ref(false);

    const getPost = async () => {
        const response = await axios.get("posts/series");
        posts.value = response.data;
    }

    const getEpisodes = async () => {
        const response = await axios.get("posts/episodes");
        episodes.value = response.data;
        console.log(episodes);
    }

    const getDetailPost = async (slug) => {
        const response = await axios.get("detail/" + slug )
        post.value = response.data;
    }

    const getEpisode = async (slug) => {
        const response = await axios.get("episode/" + slug)
        episode.value = response.data;
        if (response.data.nextepisode && response.data.nextepisode.slug) {
          nextepisode.value = response.data.nextepisode.slug;
        } else {
          nextepisode.value = null;
        }
    }

    const liveSearch = async (query) => {
        try {
          const response = await axios.get("search/" + query)
          result.value = response.data
          loading.value = true
        } catch (error) {
          console.error(error)
        }
      } 
    const genresName = async () => {
        try {
          const response = await axios.get("genres/")
          genres.value = response.data.data
        } catch (error) {
            console.error(error)
        }
      } 
    const genresSeries = async (slug) => {
        try {
          const response = await axios.get("genres/"+ slug )
          genre.value = response.data.data
        } catch (error) {
            console.error(error)
        }
      } 

    return {
        posts,getPost,post,getDetailPost,episodes,getEpisodes,getEpisode,episode,nextepisode,liveSearch,result,genresName,genres,genresSeries,genre,loading
    }
}