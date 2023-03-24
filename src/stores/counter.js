import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"

export const postStore = defineStore({
  id: 'post',
  state:() => ({
    posts: [],
    baseUrlImage: "http://127.0.0.1:8000/storage/"
  }),

  actions:{

    genresNav(){
      const items = document.querySelectorAll(".genre-list");
      items.forEach((item, index) => {
        item.id = `item-${index}`;
        item.addEventListener("click", function() {
          items.forEach(item => {
            item.classList.remove("active2");
          });
          this.classList.add("active2");
          const width = this.offsetWidth;
          const left = this.offsetLeft;
          const parent = this.parentElement;
          const scrollWidth = parent.scrollWidth;
          const parentWidth = parent.offsetWidth;
          const center = (parentWidth - width) / 2 
          const isOverflowing = scrollWidth > parentWidth;
          if (isOverflowing) {
            if (left > center) {
              parent.scrollLeft = left - center + width / 2;
            } else {
              parent.scrollLeft = 0;
            }
          }
        });
      });
    },
    genres(){
      
      let element = ref([]);
      const elements = document.querySelectorAll('.image');
      if (elements) {
        element.value = elements;
        const elementWidth = elements[0].clientWidth;
        const containerWidth = document.querySelector('.cont').clientWidth;
        const elementsPerRow = Math.floor(containerWidth / elementWidth);
        const rows = Math.ceil(elements.length / elementsPerRow);
        for (let i = 0; i < rows; i++) {
          let row = [];
          for (let j = 0; j < elementsPerRow; j++) {
            let index = i * elementsPerRow + j;
            if (index < elements.length) {
              row.push(elements[index]);
            }
          }
          for (let k = 0; k < row.length; k++) {
            if (k !== 0) {
                row[k].style.transform = `translate3d(0px, ${58 * (k)}px, 0px)`;
            }
          }
          let previousScroll = 0;
          window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > previousScroll && currentScroll >= 55) {
              for (let k = 0; k < row.length; k++) {
                row[k].style.transform = `translate3d(0px, 0px, 0px)`;
              }
            } else {
              for (let k = 0; k < row.length; k++) {
                if (k !== 0) {
                      row[k].style.transform = `translate3d(0px, ${58 * (k)}px, 0px)`;
                  }
              }
            }
            previousScroll = currentScroll;
          });
        }
      } else {
        console.log('Element not found');
      }
    }
  }

});
