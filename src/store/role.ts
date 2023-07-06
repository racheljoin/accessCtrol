import { defineStore } from "pinia";
type TRole = {
  roleName: string;
  id: string;
  description?: string;
};

type TRoles = {
  roles: TRole[];
};

interface IRoleStore {
  roles: TRoles[];
}

export const useRoleStore = defineStore<string, IRoleStore>("role", {
  state: () => {
    return { roles: [] };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setMainAppData(roles: TRoles[]) {
      this.roles = roles;
    },
  },
});
