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
          placeholder="Search Colors (hit '.' to focus... click on color classname or hexcode to copy)"
          light
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="color in searchColors" :key="color" cols="12" sm="6" md="4">
        <v-card class="pa-0" tile>
          <v-card-title @click="copyColor($event)" :class="`${color} px-4 py-8`"
            ><span class="h4">{{ color }} - </span>
            <span class="subtitle-1">
              {{ color | colorCode('base') }}</span
            ></v-card-title
          >
          <!-- <v-card-subtitle :class="`${color}`">{{ color | colorCode('base') }}</v-card-subtitle> -->
          <v-list-item v-for="shade in shades" :key="shade" class="pa-0 ma-0">
            <v-list-item-content
              :class="`${color} ${shade} pa-0 ma-0`"
              @click="copyColor($event)"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    @mouseleave="tooltipText = 'Copy Code'"
                    v-bind="attrs"
                    v-on="on"
                    class="pa-4 ma-0"
                    >{{ color }} {{ shade }}
                  </v-list-item-title>
                  <!-- <span  >This text has a tooltip</span> -->
                </template>
                <span>{{ tooltipText }}</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-subtitle
                    @mouseleave="tooltipText = 'Copy Code'"
                    v-bind="attrs"
                    v-on="on"
                    class="px-4 pb-4"
                    >{{ color | colorCode(shade) }}
                  </v-list-item-subtitle>
                  <!-- <span  >This text has a tooltip</span> -->
                </template>
                <span>{{ tooltipText }}</span>
              </v-tooltip>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VuetifyColors from 'vuetify/lib/util/colors';
// VuetifyColors[`${color}`][`${shade.split('-').join('')}`]
document.addEventListener('keydown', (e) => {
  if (e.key == '.') {
    e.preventDefault();
    console.log(VuetifyColors);

    document.querySelector('#searchColorInput').focus();
  }
});
export default {
  methods: {
    copy(text) {
      this.$copyText(text).then(
        // eslint-disable-next-line
        (e) => {
          this.tooltipText = 'Copied!';
          console.log(`copied to clipboard - ${text}`);
        },
        (e) => {
          console.log(`could not copy`, e);
        }
      );
    },
    copyColor(e) {
      // console.log(e.target.textContent);
      this.copy(e.target.textContent);
    }
  },
  data() {
    return {
      tooltipText: 'Click to copy',
      searchColor: '',
      VuetifyColors,
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
        'darken-4',
        'accent-1',
        'accent-2',
        'accent-3',
        'accent-4'
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
    // colorCode(color, shade) {
    //   return this.VuetifyColors[color][shade.split('-').join('')];
    // }
  },
  filters: {
    colorCode(color, shade) {
      // console.log(VuetifyColors);
      shade = shade.split('-').join('');
      color = color.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
      });
      // console.log(color, typeof color, shade, typeof shade);
      if (VuetifyColors[color][shade] != 'undefined') {
        // console.log(VuetifyColors[color][shade], shade);
        // return VuetifyColors[`"${color}"`][`"${shade.split('-').join('')}"`];
        return VuetifyColors[color][shade];
      } else {
        return '0';
      }
    }
  }
};
</script>

<style></style>
