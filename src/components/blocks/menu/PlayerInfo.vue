<template>
  <div class="player-info">
    <p>{{ user.nickname }}</p>
    <p>~</p>
    <p>Level {{ user.level }}</p>
    <p>~</p>
    <p>{{ user.gold }} Gold</p>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/useProfileStore';

const profileStore = useProfileStore();
const user = profileStore.user;
</script>

<style lang="scss" scoped>
@use '@/assets/scss/var.scss';

.player-info {
  display: flex;
  gap: 20px;
  justify-content: space-around;

  color: var.$default-text-color;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
