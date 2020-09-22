<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app light>
      <!-- Vue Components Menu -->
      <v-list-group prepend-icon="mdi-vuejs">
        <template v-slot:activator>
          <v-list-item-title>Vue Core</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in vueComponents"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <!-- Styles Menu -->
      <v-list-group id="sideNav" prepend-icon="mdi-glasses">
        <template v-slot:activator>
          <v-list-item-title>Styles</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in styles"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <!-- Layouts Menu -->
      <v-list-group prepend-icon="mdi-desktop-mac-dashboard">
        <template v-slot:activator>
          <v-list-item-title>Layouts</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in layouts"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>

      <!-- Playgrounds Menu -->
      <v-list-group prepend-icon="mdi-play">
        <template v-slot:activator>
          <v-list-item-title>Playgrounds</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in playgrounds"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon :class="{ 'primary--text': item.hasPlayground }">{{
              item.icon
            }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <!-- Groups menu -->
      <v-list-group prepend-icon="mdi-group">
        <template v-slot:activator>
          <v-list-item-title>Groups</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in groups"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <!-- Custom Components Menu -->
      <v-list-group prepend-icon="mdi-content-save-edit-outline">
        <template v-slot:activator>
          <v-list-item-title>Custom</v-list-item-title>
        </template>
        <v-list-item
          dense
          v-for="(item, i) in customComponents"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <v-list-group prepend-icon="mdi-all-inclusive" value="true">
        <template v-slot:activator>
          <v-list-item-title>All Elements</v-list-item-title>
        </template>

        <v-list-item dense v-for="(item, i) in menu" :key="i" :to="item.route">
          <v-list-item-icon>
            <v-icon :class="{ 'primary--text': item.hasPlayground }">{{
              item.icon
            }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <div class="text-center">
            <v-chip
              v-if="item.isUpdate"
              class="orange white--text ma-2"
              x-small
            >
              New
            </v-chip>
          </div>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar
      v-if="!layoutPaths.includes($route.path)"
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          id="menuIcon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-autocomplete
        prepend-inner-icon="mdi-magnify"
        placeholder="Search ('/' to focus, ';' to open menu)"
        class="my-auto mt-1"
        ref="search"
        id="searchInput"
        solo
        rounded
        :items="searchableMenu"
        v-model="searchTerm"
        light
        hint="Press Enter key to Navigate to Result page"
        align-center
        @keydown.enter="gotoResult"
        @click:prepend="gotoResult"
      ></v-autocomplete>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Bankole2000/vuetifyKitchenSink"
        target="_blank"
        text
      >
        <v-icon left>mdi-github</v-icon>
        <span class="mr-2">View Git Repository</span>
        <v-icon right>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main style="background-color: #fefefe ;">
      <transition name="router-anim">
        <router-view />
        <!-- <HelloWorld /> -->
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import menuItems from './menu.json';

// import HelloWorld from './components/HelloWorld';

document.addEventListener('keydown', (e) => {
  if (e.key == '/') {
    e.preventDefault();
    console.log(menuItems);
    document.querySelector('#searchInput').focus();
  }
  if (e.key == ';') {
    document.querySelector('#menuIcon').click();
    document.querySelector('#sideNav').focus();
  }
});

export default {
  name: 'App',

  components: {
    // HelloWorld
  },

  data() {
    //
    return {
      drawer: true,
      searchTerm: '',
      menu: [
        {
          route: '/elements/alerts',
          name: 'Alerts',
          icon: 'mdi-alert-circle',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/appbars',
          name: 'AppBars',
          icon: 'mdi-application',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/autocomplete',
          name: 'Autocomplete',
          icon: 'mdi-more',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/avatars',
          name: 'Avatars',
          icon: 'mdi-account-circle',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/badges',
          name: 'Badges',
          icon: 'mdi-bell-outline',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/banners',
          name: 'Banners',
          icon: 'mdi-book-variant',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/styles/borderradius',
          name: 'Border Radius',
          icon: 'mdi-vector-radius',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/bottomsheets',
          name: 'Bottom Sheets',
          icon: 'mdi-cards-variant',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/breadcrumbs',
          name: 'Bread Crumbs',
          icon: 'mdi-dots-horizontal',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/buttons',
          name: 'Buttons',
          icon: 'mdi-caps-lock',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/calendars',
          name: 'Calendars',
          icon: 'mdi-calendar',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/cards',
          name: 'Cards',
          icon: 'mdi-cards-playing-outline',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/carousels',
          name: 'Carousels',
          icon: 'mdi-view-carousel',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/chips',
          name: 'Chips',
          icon: 'mdi-chip',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/circularprogress',
          name: 'Circular',
          icon: 'mdi-cached',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/colorpickers',
          name: 'Color Picker',
          icon: 'mdi-eyedropper',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/styles/colors',
          name: 'Colors',
          icon: 'mdi-palette',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/styles/content',
          name: 'Content',
          icon: 'mdi-table-of-contents',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/combobox',
          name: 'Combo Box',
          icon: 'mdi-package',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/datepickers',
          name: 'Date Pickers',
          icon: 'mdi-calendar-range',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/dialogs',
          name: 'Dialogs / Modals',
          icon: 'mdi-picture-in-picture-top-right',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/dividers',
          name: 'Dividers',
          icon: 'mdi-division',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/custom/dynamicforms',
          name: 'Dynamic Forms',
          icon: 'mdi-pen-plus',
          group: 'Custom',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/styles/elevation',
          name: 'Elevation',
          icon: 'mdi-elevator',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/expansionpanels',
          name: 'Expansion Panels',
          icon: 'mdi-unfold-more-horizontal',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },

        {
          route: '/elements/fabbuttons',
          name: 'FAB Buttons',
          icon: 'mdi-plus-circle',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/fileinputs',
          name: 'File Inputs',
          icon: 'mdi-file',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/styles/flex',
          name: 'Flex',
          icon: 'mdi-stretch-to-page',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/footers',
          name: 'Footers',
          icon: 'mdi-page-layout-footer',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/forms',
          name: 'Forms',
          icon: 'mdi-format-list-checkbox',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/grids',
          name: 'Grids',
          icon: 'mdi-grid',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/groups/buttons',
          name: 'Group Buttons',
          icon: 'mdi-circle-double',
          group: 'Groups',
          isUpdate: true
        },
        {
          route: '/groups/chips',
          name: 'Group Chips',
          icon: 'mdi-chip',
          group: 'Groups',
          isUpdate: true
        },
        {
          route: '/groups/items',
          name: 'Group Items',
          icon: 'mdi-format-list-bulleted-type',
          group: 'Groups',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/groups/listitems',
          name: 'Group Lists',
          icon: 'mdi-format-list-bulleted-square',
          group: 'Groups',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/groups/slides',
          name: 'Group Slides',
          icon: 'mdi-slope-uphill',
          group: 'Groups',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/groups/windows',
          name: 'Group Windows',
          icon: 'mdi-window-open',
          group: 'Groups',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/hover',
          name: 'Hover',
          icon: 'mdi-mouse',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/icons',
          name: 'Icons',
          icon: 'mdi-information-outline',
          group: 'Elements',
          hasPlayground: false,
          isUpdate: true
        },
        {
          route: '/elements/inputs',
          name: 'Inputs',
          icon: 'mdi-import',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/images',
          name: 'Images',
          icon: 'mdi-image',
          group: 'Elements',
          hasPlayground: false,
          isUpdate: true
        },
        {
          route: '/elements/lists',
          name: 'Lists',
          icon: 'mdi-format-list-bulleted-square',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/linearprogress',
          name: 'Linear',
          icon: 'mdi-minus',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/vue/lifecyclehooks',
          name: 'Life Cycle Hooks',
          icon: 'mdi-hook',
          group: 'Vue',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/vue/vuex',
          name: 'Vuex Notes',
          icon: 'mdi-database',
          group: 'Vue',
          hasPlayground: false,
          isUpdate: true
        },
        {
          route: '/elements/menus',
          name: 'Menus',
          icon: 'mdi-menu',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/elements/navdrawers',
          name: 'Nav Drawers',
          icon: 'mdi-menu-open',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/overflowbuttons',
          name: 'Overflow Buttons',
          icon: 'mdi-chevron-left-box-outline',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/overlays',
          name: 'Overlays',
          icon: 'mdi-transition-masked',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/pagination',
          name: 'Pagination',
          icon: 'mdi-book-open-page-variant',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/parallax',
          name: 'Parallax',
          icon: 'mdi-panorama-horizontal',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/ratings',
          name: 'Ratings',
          icon: 'mdi-star',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/selectioncontrols',
          name: 'Selection Controls',
          icon: 'mdi-checkbox-marked',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/selects',
          name: 'Selects',
          icon: 'mdi-chevron-down-circle-outline',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/sheets',
          name: 'Sheets',
          icon: 'mdi-note',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/skeletonloaders',
          name: 'Skeleton Loaders',
          icon: 'mdi-desktop-mac-dashboard',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/sliders',
          name: 'Sliders',
          icon: 'mdi-signal-distance-variant',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/snackbars',
          name: 'Snackbars',
          icon: 'mdi-chart-timeline',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/styles/spacing',
          name: 'Spacing',
          icon: 'mdi-diameter-outline',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/sparklines',
          name: 'Sparklines',
          icon: 'mdi-chart-bell-curve',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/steppers',
          name: 'Steppers',
          icon: 'mdi-fast-forward',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/subheaders',
          name: 'SubHeaders',
          icon: 'mdi-format-size',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/systembars',
          name: 'System Bars',
          icon: 'mdi-desktop-classic',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/datatables',
          name: 'Data Tables',
          icon: 'mdi-database',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/tables',
          name: 'Tables',
          icon: 'mdi-table',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: true
        },
        {
          route: '/elements/tabs',
          name: 'Tabs',
          icon: 'mdi-table-border',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },

        {
          route: '/elements/textareas',
          name: 'Text Areas',
          icon: 'mdi-checkbook',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/elements/textfields',
          name: 'Text Fields',
          icon: 'mdi-cursor-text',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/elements/timelines',
          name: 'Time lines',
          icon: 'mdi-timeline-text',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/elements/timepickers',
          name: 'Time Pickers',
          icon: 'mdi-clock',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/elements/toolbars',
          name: 'Toolbars',
          icon: 'mdi-cellphone-text',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/tooltips',
          name: 'Tooltips',
          icon: 'mdi-tooltip',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/treeview',
          name: 'Tree View',
          icon: 'mdi-file-tree',
          group: 'Elements',
          hasPlayground: true,
          isUpdate: false
        },
        {
          route: '/styles/transitions',
          name: 'Transitions',
          icon: 'mdi-transition',
          group: 'Styles',
          hasPlayground: false,
          isUpdate: true
        },
        {
          route: '/styles/typography',
          name: 'Text - Typography',
          icon: 'mdi-text-shadow',
          group: 'Styles',
          isUpdate: true
        },
        {
          route: '/elements/virtualscrollers',
          name: 'Virtual Scrollers',
          icon: 'mdi-arrow-expand-vertical',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/layouts/contacts',
          name: 'Google Contacts',
          icon: 'mdi-contacts',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/keep',
          name: 'GoogleKeep',
          icon: 'mdi-file-plus',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/login',
          name: 'Login',
          icon: 'mdi-login',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/simple',
          name: 'Basic Layout',
          icon: 'mdi-page-layout-header-footer',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/youtube',
          name: 'Youtube',
          icon: 'mdi-youtube',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/sidebars',
          name: 'Sidebars',
          icon: 'mdi-shuffle-disabled',
          group: 'Layouts',
          isUpdate: false
        },
        {
          route: '/layouts/layoutplayground',
          name: 'Layouts Playground',
          icon: 'mdi-file-document-edit',
          group: 'Layouts',
          isUpdate: false
        }
      ]
    };
  },
  created() {
    console.log(this.$route);
  },
  beforeUpdate() {
    this.$vuetify.theme.dark ? (this.$vuetify.theme.dark = false) : false;
  },
  computed: {
    searchableMenu() {
      return this.menu.map((menu) => menu.name);
    },
    styles() {
      return this.menu.filter((menu) => menu.group == 'Styles');
    },
    layouts() {
      return this.menu.filter((menu) => menu.group == 'Layouts');
    },
    playgrounds() {
      return this.menu.filter((menu) => menu.hasPlayground === true);
    },
    groups() {
      return this.menu.filter((menu) => menu.group == 'Groups');
    },
    vueComponents() {
      return this.menu.filter((menu) => menu.group == 'Vue');
    },
    customComponents() {
      return this.menu.filter((menu) => menu.group == 'Custom');
    },
    codeSnippets() {
      return this.menu.filter((menu) => menu.group == 'Snippets');
    },
    layoutPaths() {
      return this.layouts.map((menu) => menu.route);
    }
  },
  methods: {
    focusMethod() {
      console.log('focus');
    },
    gotoResult() {
      console.log(this.$refs.search.value);
      let menuItem;
      if (this.searchTerm !== 'undefined' && this.searchTerm !== null) {
        menuItem = this.menu.find(
          (menuItem) => menuItem.name === this.searchTerm.trim()
        );
      }
      if (menuItem && this.searchTerm) {
        this.$route.path !== menuItem.route
          ? this.$router.push(menuItem.route).then(() => {
              this.searchTerm = '';
              this.$refs.search.blur();
            })
          : false;
      }
    }
  }
};
</script>

<style>
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: rgba(255, 218, 151, 0.89);
}
*::-webkit-scrollbar-thumb {
  background: rgba(255, 218, 151, 0.89);
}

*::-webkit-scrollbar {
  width: 1rem;
}

*::-webkit-scrollbar-track {
  background: #1e1e24;
}
</style>
