<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Badge Customizations
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="customization.showCode = !customization.showCode"
              text
              class="text--primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="customization.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="window = 0"
              >Template</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="copy(customization.template)"
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card
            max-height="300"
            elevation="0"
            tile
            style="overflow-y: scroll; overflow-x:auto;"
          >
            <v-window>
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  customization.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Customization />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dynamic Notifications
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                dynamicNotifications.showCode = !dynamicNotifications.showCode
              "
              text
              class="text--primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="dynamicNotifications.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dynamicNotifications.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dynamicNotifications.window = 1"
              >Script</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip bottom
              ><template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="
                    copy(
                      dynamicNotifications.template +
                        dynamicNotifications.script
                    )
                  "
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card
            max-height="300"
            elevation="0"
            tile
            style="overflow-y: scroll; overflow-x:auto;"
          >
            <v-window v-model="dynamicNotifications.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dynamicNotifications.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dynamicNotifications.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DynamicNotifications />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Show on Hover
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="showOnHover.showCode = !showOnHover.showCode"
              text
              class="text--primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="showOnHover.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="showOnHover.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="showOnHover.window = 1"
              >Script</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip bottom
              ><template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="copy(showOnHover.template + showOnHover.script)"
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card
            max-height="300"
            elevation="0"
            tile
            style="overflow-y: scroll; overflow-x:auto;"
          >
            <v-window v-model="showOnHover.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  showOnHover.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  showOnHover.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ShowOnHover />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tab Badges
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="tabBadges.showCode = !tabBadges.showCode"
              text
              class="text--primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="tabBadges.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="window = 0"
              >Template</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="copy(tabBadges.template)"
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card
            max-height="300"
            elevation="0"
            tile
            style="overflow-y: scroll; overflow-x:auto;"
          >
            <v-window>
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  tabBadges.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TabBadges />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Customization from './CustomizationOptions';
import DynamicNotifications from './DynamicNotifications';
import ShowOnHover from './ShowOnHover';
import TabBadges from './Tabs';

export default {
  components: {
    Customization,
    DynamicNotifications,
    ShowOnHover,
    TabBadges
  },
  data() {
    return {
      customization: {
        template: `<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-badge bordered color="error" icon="mdi-lock" overlap>
        <v-btn class="white--text" color="error" depressed>
          Lock Account
        </v-btn>
      </v-badge>

      <div class="mx-3"></div>

      <v-badge bordered bottom color="deep-purple accent-4" dot offset-x="10" offset-y="10">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>

      <div class="mx-3"></div>

      <v-badge avatar bordered overlap>
        <template v-slot:badge>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
          </v-avatar>
        </template>

        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
      </v-badge>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      dynamicNotifications: {
        template: `<template>
  <v-container>
    <v-row justify="space-around">
      <div>
        <v-btn class="mx-1" color="primary" @click="messages++">
          Send Message
        </v-btn>

        <v-btn class="mx-1" color="error" @click="messages = 0">
          Clear Notifications
        </v-btn>
      </div>

      <v-badge :content="messages" :value="messages" color="green" overlap>
        <v-icon large>mdi-email</v-icon>
      </v-badge>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      messages: 0,
      show: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      showOnHover: {
        template: `<template>
  <div class="text-center">
    <v-badge :value="hover" color="deep-purple accent-4" content="9999+" left transition="slide-x-transition">
      <v-hover v-model="hover">
        <v-icon color="grey lighten-1" large>
          mdi-account-circle
        </v-icon>
      </v-hover>
    </v-badge>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    hover: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      tabBadges: {
        template: `<template>
  <v-toolbar>
    <v-tabs dark background-color="primary" grow>
      <v-tab>
        <v-badge color="pink" dot>
          Item One
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge color="green" content="6">
          Item Two
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge color="deep-purple accent-4" icon="mdi-vuetify">
          Item Three
        </v-badge>
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>
`,
        showCode: false
      },
      tooltipText: 'Copy Code'
    };
  },
  methods: {
    copy(text) {
      this.$copyText(text).then(
        // eslint-disable-next-line
        (e) => {
          this.tooltipText = 'Copied!';
          console.log(`copied successfully`);
        },
        (e) => {
          console.log(`could not copy`, e);
        }
      );
    }
  }
};
</script>

<style></style>
