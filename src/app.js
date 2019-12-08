import Vue from 'vue';
import Accordion from './components/Accordion';
import List from './components/List';

window.axios = require('axios');

new Vue({
   el: '#app',

   components: {
      Accordion,
      List,
   },

   mounted: function(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(error => this.posts = [{title: 'No posts found.'}])
            .finally(() => console.log('Data loading complete'));
   },
   
   data: {
       items: [
           { id: 1, title: 'Title 1', description: 'Description for tab 1.'},
           { id: 2, title: 'Title 2', description: 'Description for tab 2.'},
           { id: 3, title: 'Title 3', description: 'Description for tab 3.'},
       ],

       posts: null,
   }

});