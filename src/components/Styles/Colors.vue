<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="px-4 pt-4 pb-0 mb-0">
        <v-text-field
          id="searchColorInput"
          prepend-inner-icon="mdi-magnify"
          append-icon="mdi-palette"
          solo
          v-model="searchColor"
          placeholder="Search Colors ('.' to focus)"
          light
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="color in searchColors" :key="color" cols="12" sm="6" md="4">
        <v-card class="pa-0" tile>
          <v-card-title :class="`${color} px-4 py-6`">{{ color }}</v-card-title>
          <v-list-item v-for="shade in shades" :key="shade" class="pa-0 ma-0">
            <v-list-item-content :class="`${color} ${shade} pa-0 ma-0`">
              <v-list-item-title class="px-4 py-4 ma-0"
                >{{ color }} {{ shade }}</v-list-item-title
              >
              <!-- <v-list-item-subtitle>Secondary text</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
document.addEventListener('keydown', (e) => {
  if (e.key == '.') {
    e.preventDefault();

    document.querySelector('#searchColorInput').focus();
  }
});
export default {
  data() {
    return {
      searchColor: '',
      colors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'blue-grey',
        'grey'
      ],
      shades: [
        'lighten-5',
        'lighten-4',
        'lighten-3',
        'lighten-2',
        'lighten-1',
        'darken-1',
        'darken-2',
        'darken-3',
        'darken-4'
      ]
    };
  },
  computed: {
    searchColors() {
      if (
        this.searchColor.trim() != '' &&
        this.searchColor.trim() != 'undefined'
      ) {
        return this.colors.filter((color) => color.includes(this.searchColor));
      } else {
        return this.colors;
      }
    }
  }
};
</script>

<style></style>
