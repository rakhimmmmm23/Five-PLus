import { defineStore } from 'pinia';
import { apiClient } from '@/plugins/apiClient';

export const useProfileStore = defineStore({
  id: 'profile',
  actions: {
    async profile( email ) {
        console.log('store email', email)
        try {
          const data  = await apiClient.put('/self', [{
                filed_name: "email",
                new_value: email,
                operation: "change"
          }])
          console.log(data.res);
          return data
        } catch (error) {
          return Promise.reject(error)
        }
      },
    
      },
  },
);