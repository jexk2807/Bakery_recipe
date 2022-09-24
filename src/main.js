import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Icon } from "@iconify/vue";
import router from "./router/router";

const app = createApp(App);

app.component("Icon", Icon);
app.use(router);

router.isReady()
    .then(() => {
        app.mount('#app');
    })