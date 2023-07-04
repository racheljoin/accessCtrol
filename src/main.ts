import "./public-path";
import "./assets/main.css";
import { createApp, type ComponentPublicInstance } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import { router } from "./router";
const app = createApp(App);

let instance: ComponentPublicInstance | null = null;

function render(props?: QiankunProps) {
  const { container } = props ?? {};
  app.use(router);
  app.use(ElementPlus);
  instance = app.mount(container ?? "#container");
}

renderWithQiankun({
  bootstrap() {
    console.log("[vue] vue app bootstraped");
  },
  mount(props = { container: document.body }) {
    console.log("[vue] props from main framework", props);
    render(props);
  },
  unmount() {
    app.unmount();
    instance = null;
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
});

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

