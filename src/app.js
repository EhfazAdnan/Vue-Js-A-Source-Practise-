import Vue from 'vue';
import Accordion from './components/Accordion';

new Vue({
   el: '#app',

   components: {
      Accordion,
   },
   
   data: {
       items: [
           { id: 1, title: 'Title 1', description: 'Description for tab 1.'},
           { id: 2, title: 'Title 2', description: 'Description for tab 2.'},
           { id: 3, title: 'Title 3', description: 'Description for tab 3.'},
       ]
   }

});