import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return { mainAppData: null };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setMainAppData(mainAppData: any) {
      this.mainAppData = mainAppData;
    },
  },
});
