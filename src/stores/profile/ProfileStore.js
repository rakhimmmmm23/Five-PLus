import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/apiClient';
import { useAuthStore } from '@/stores/auth/AuthStore'

export const useProfileStore = defineStore({
  id: 'profile',
  actions: {
    async updateProfile(form) {
      const authStore = useAuthStore()

      const payload = []

      if (form.email !== authStore.user.email) {
        let operation = 'change'

        if (!form.email) {
          operation = 'delete'
        } else if (!authStore.user.email) {
          operation = 'add'
        }

        payload.push({
          filed_name: "email",
          new_value: form.email,
          operation,
        })
      }

      if (form.phone !== authStore.user.phone) {
        let operation = 'change'

        if (!form.phone) {
          operation = 'delete'
        } else if (!authStore.user.phone) {
          operation = 'add'
        }

        payload.push({
          filed_name: "phone",
          new_value: form.phone,
          operation
        })
      }

      try {
          const data = await apiClient.put('/self', payload)

          return data
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
},
);