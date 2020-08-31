<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Default Slot
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="defaultSlot.showCode = !defaultSlot.showCode"
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
        <v-sheet v-if="defaultSlot.showCode" tile>
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
                  @click="copy(defaultSlot.template)"
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
                  defaultSlot.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DefaultSlot />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Profile Card
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="profileCard.showCode = !profileCard.showCode"
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
        <v-sheet v-if="profileCard.showCode" tile>
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
                  @click="copy(profileCard.template)"
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
                  profileCard.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ProfileCard />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Avatar Size
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="size.showCode = !size.showCode"
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
        <v-sheet v-if="size.showCode" tile>
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
                  @click="copy(size.template)"
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
                  size.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Size />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Avatar Tile
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="tile.showCode = !tile.showCode"
              text
              class="text--primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="tile.showCode" tile>
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
                  @click="copy(tile.template)"
                >
                  <v-icon left>mdi-content-copy</v-icon>
                  {{ tooltipText }}
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
                  tile.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Tile />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Advanced Usage
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="advancedUsage.showCode = !advancedUsage.showCode"
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
        <v-sheet v-if="advancedUsage.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="advancedUsage.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="advancedUsage.window = 1"
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
                  @click="copy(advancedUsage.template + advancedUsage.script)"
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
            <v-window v-model="advancedUsage.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  advancedUsage.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  advancedUsage.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AdvancedUsage />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AdvancedUsage from "./AdvancedUsage";
import DefaultSlot from "./DefaultSlot";
import ProfileCard from "./ProfileCard";
import Size from "./Size";
import Tile from "./Tile";

export default {
  components: {
    AdvancedUsage,
    DefaultSlot,
    ProfileCard,
    Size,
    Tile
  },
  data() {
    return {
      advancedUsage: {
        template: `<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img v-if="message.avatar" alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
                  <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="grey--text"> &nbsp;({{ message.total }}) </span>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip v-if="message.new" :color="\`\${message.color} lighten-4\`" class="ml-0 mr-2 black--text" label small> {{ message.new }} new </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col v-if="message.excerpt" class="grey--text text-truncate hidden-sm-and-down">
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>`,
        script: `<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify.js!',
        excerpt: 'Thank you for joining our community...'
      },
      {
        color: 'red',
        icon: 'mdi-account-multiple',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter'
      },
      {
        color: 'teal',
        icon: 'mdi-tag',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today'
      }
    ],
    lorem:
      'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
  })
};
</scrpt>
`,
        showCode: false
      },
      defaultSlot: {
        template: `<template>
  <v-row justify="space-around">
    <v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar>

    <v-avatar>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>

    <v-avatar color="red">
      <span class="white--text headline">CJ</span>
    </v-avatar>
  </v-row>
</template>
`,
        showCode: false
      },
      profileCard: {
        template: `<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="164" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>
`,
        showCode: false
      },
      size: {
        template: `<template>
  <v-row justify="space-around">
    <v-avatar color="indigo" size="36">
      <span class="white--text headline">36</span>
    </v-avatar>

    <v-avatar color="teal" size="48">
      <span class="white--text headline">48</span>
    </v-avatar>

    <v-avatar color="orange" size="62">
      <span class="white--text headline">62</span>
    </v-avatar>
  </v-row>
</template>
`,
        showCode: false
      },
      tile: {
        template: `<template>
  <div class="text-center">
    <v-avatar tile color="blue">
      <v-icon dark>mdi-alarm</v-icon>
    </v-avatar>
  </div>
</template>`,
        showCode: false
      },
      tooltipText: "Copy Code"
    };
  },
  methods: {
    copy(text) {
      this.$copyText(text).then(
        // eslint-disable-next-line
        (e) => {
          this.tooltipText = "Copied!";
          console.log(`copied successfully`);
        },
        e => {
          console.log(`could not copy`, e);
        }
      );
    }
  }
};
</script>

<style></style>
