
import { createApp } from 'vue';
import CountButton from './components/count_button.vue';
import Sidebar from './components/sidebar.vue';

createApp(CountButton).mount('#vue-count-button');
createApp(Sidebar).mount('#vue-sidebar')
