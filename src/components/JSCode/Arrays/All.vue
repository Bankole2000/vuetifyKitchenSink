<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">Basic Usage - Arrays</v-card-title>
      <v-container>
        <Usage />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title></v-card-title>
      <v-container>
        <Filters />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title></v-card-title>
      <v-container>
        <ArrayFind />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title></v-card-title>
      <v-container>
        <ArrayMap />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title></v-card-title>
      <v-container>
        <ArrayReduce />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Filters from "./Filter";
import ArrayFind from "./Find";
import ArrayMap from "./Map";
import ArrayReduce from "./Reduce";
import Usage from "./Usage";
export default {
  components: {
    Filters,
    ArrayFind,
    ArrayMap,
    ArrayReduce,
    Usage
  },
  data() {
    return {};
  }
};
</script>

<style></style>
