import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS

createApp(App).use(router).use(SimpleTypeahead).mount('#app');
