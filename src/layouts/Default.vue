<template>
    <div class="default-layout">
        <router-view v-if="!isLoading" />
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth/AuthStore';

export default {
}
</script>