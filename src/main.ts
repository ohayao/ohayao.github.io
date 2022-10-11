import { createApp, Plugin } from 'vue';
import App from './App.vue';
import stores from './vuex';
import router from './router/index';

import goapp, { types } from 'goapp';
import 'goapp/dist/themes/font/iconfont/iconfont.min.css';
import 'goapp/dist/themes/default.min.css';
const app = createApp(App);
stores.forEach((s) => {
  app.use(s.store, s.key);
});
app.use(goapp as Plugin, <types.GlobalConfig>{ Toast: <types.ConfigToast>{ type: 'error' } } as any);
app.use(router);
app.mount('#app');
