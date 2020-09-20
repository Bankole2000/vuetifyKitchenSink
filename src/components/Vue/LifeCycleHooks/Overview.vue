<template>
  <v-container>
    <v-img :src="require('./componentLifecycle.png')"> </v-img>
  </v-container>
</template>

<script>
import LCImage from '@/components/Vue/LifeCycleHooks/componentLifecycle.png';
export default {
  data() {
    return {
      LCImage
    };
  }
};
</script>

<style></style>
