<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app light>
      <v-list-group dense prepend-icon="mdi-all-inclusive" value="true">
        <template v-slot:activator>
          <v-list-item-title>All Elements</v-list-item-title>
        </template>

        <v-list-item v-for="(item, i) in menu" :key="i" :to="item.route">
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
      <!-- <v-list>
        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(admin, i) in admins" :key="i" link>
              <v-list-item-title v-text="admin[0]"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i">
              <v-list-item-title v-text="crud[0]"></v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list> -->
      <!-- <v-list dense>
        <v-list-item link to="/elements/alerts">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/elements/appbars">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld
  },

  data() {
    //
    return {
      drawer: true,
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
          route: '/elements/overlays',
          name: 'Overlays',
          icon: 'mdi-transition-masked',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/pagination',
          name: 'Pagination',
          icon: 'mdi-book-open-page-variant',
          group: 'Elements',
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
          isUpdate: true
        },
        {
          route: '/elements/selectioncontrols',
          name: 'Selection Controls',
          icon: 'mdi-checkbox-marked',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/selects',
          name: 'Selects',
          icon: 'mdi-chevron-down-circle-outline',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/sheets',
          name: 'Sheets',
          icon: 'mdi-note',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/skeletonloaders',
          name: 'Skeleton Loaders',
          icon: 'mdi-desktop-mac-dashboard',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/sliders',
          name: 'Sliders',
          icon: 'mdi-signal-distance-variant',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/snackbars',
          name: 'Snackbars',
          icon: 'mdi-chart-timeline',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/sparklines',
          name: 'Sparklines',
          icon: 'mdi-chart-bell-curve',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/steppers',
          name: 'Steppers',
          icon: 'mdi-fast-forward',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/subheaders',
          name: 'SubHeaders',
          icon: 'mdi-format-size',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/systembars',
          name: 'System Bars',
          icon: 'mdi-desktop-classic',
          group: 'Elements',
          isUpdate: true
        },
        {
          route: '/elements/tabs',
          name: 'Tabs',
          icon: 'mdi-table-border',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/textareas',
          name: 'Text Areas',
          icon: 'mdi-checkbook',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/textfields',
          name: 'Text Fields',
          icon: 'mdi-cursor-text',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/timelines',
          name: 'Time lines',
          icon: 'mdi-timeline-text',
          group: 'Elements',
          isUpdate: false
        },
        {
          route: '/elements/timepickers',
          name: 'Time Pickers',
          icon: 'mdi-clock',
          group: 'Elements',
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
          isUpdate: false
        },
        {
          route: '/elements/virtualscrollers',
          name: 'Virtual Scrollers',
          icon: 'mdi-arrow-expand-vertical',
          group: 'Elements',
          isUpdate: false
        }
      ],
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    };
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
