import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'prismjs';
import 'prismjs/components/prism-javascript'; // 支援 JavaScript 語法
import 'prismjs/themes/prism-okaidia.css'; // 深色主題

createApp(App).use(store).mount('#app')
