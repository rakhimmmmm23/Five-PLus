import { defineStore } from "pinia";
import { apiClient } from "@/plugins/apiClient";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setRole(role) {
      this.role = role;
    },
    async register({ username, name, email, password }) {
      try {
        const { data } = await apiClient.post(
          "/auth/reg",
         
          {
            user_name: username,
            name,
            email,
            password,
          },
          {
            headers: {
              withCredentials: false,
            },
          }
        );

        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async login({ login_by, username, password }) {
      try {
        const { data } = await apiClient.post(
          "/auth/login",
          {
            login_by,
            login: username,
            password,
          },
          {
            headers: {
              withCredentials: false,
            },
          }
         
        );
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async logout() {
      try {
        const { data } = await apiClient.get(
          "/auth/logout",
        );
          setTimeout(()=> {this.setUser(null)},1000)
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async getSelfInfo() {
      try {
        const { data } = await apiClient("/self");
        this.setUser(data);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
