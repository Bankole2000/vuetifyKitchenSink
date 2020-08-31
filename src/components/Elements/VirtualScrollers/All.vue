<template>
  <v-container>
    <!-- <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dense Alerts
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="denseAlert.showCode = !denseAlert.showCode"
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
        <v-sheet v-if="denseAlert.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="window = 0"
              >Template</v-btn
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
                  @click="copy(denseAlert.template)"
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
                  denseAlert.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DenseAlert />
      </v-container>
    </v-card> -->

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        User Directory Example
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="userDirectory.showCode = !userDirectory.showCode"
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
        <v-sheet v-if="userDirectory.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="userDirectory.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="userDirectory.window = 1"
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
                  @click="copy(userDirectory.template + userDirectory.script)"
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
            <v-window v-model="userDirectory.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  userDirectory.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  userDirectory.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <UserDirectory />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Prerendering Items
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="prerendering.showCode = !prerendering.showCode"
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
        <v-sheet v-if="prerendering.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="prerendering.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="prerendering.window = 1"
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
                  @click="copy(prerendering.template + prerendering.script)"
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
            <v-window v-model="prerendering.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  prerendering.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  prerendering.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Prerendering />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Prerendering from "./PrerenderingItems";
import UserDirectory from "./UserDirectory";

export default {
  components: {
    Prerendering,
    UserDirectory
  },
  data() {
    return {
      prerendering: {
        template: `<template>
  <div>
    <v-responsive max-width="400" class="mx-auto mb-4">
      <v-text-field v-model="benched" type="number" label="Total Benched" min="0" max="10"></v-text-field>
    </v-responsive>

    <v-card elevation="16" max-width="400" class="mx-auto">
      <v-virtual-scroll :bench="benched" :items="items" height="300" item-height="64">
        <template v-slot="{ item }">
          <v-list-item :key="item">
            <v-list-item-action>
              <v-btn fab small depressed color="primary">
                {{ item }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                User Database Record <strong>ID {{}}</strong>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon small>mdi-open-in-new</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    benched: 0
  }),
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      userDirectory: {
        template: `<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title class="white--text orange darken-4">
      User Directory

      <v-spacer></v-spacer>

      <v-btn color="white" class="text--primary" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis,
      aperiam ducimus.
    </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll :items="items" :item-height="50" height="300">
      <template v-slot="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar :color="item.color" size="56" class="white--text">
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn depressed small>
              View User

              <v-icon color="orange darken-4" right>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
    names: [
      'Oliver',
      'Jake',
      'Noah',
      'James',
      'Jack',
      'Connor',
      'Liam',
      'John',
      'Harry',
      'Callum',
      'Mason',
      'Robert',
      'Jacob',
      'Jacob',
      'Jacob',
      'Michael',
      'Charlie',
      'Kyle',
      'William',
      'William',
      'Thomas',
      'Joe',
      'Ethan',
      'David',
      'George',
      'Reece',
      'Michael',
      'Richard',
      'Oscar',
      'Rhys',
      'Alexander',
      'Joseph',
      'James',
      'Charlie',
      'James',
      'Charles',
      'William',
      'Damian',
      'Daniel',
      'Thomas',
      'Amelia',
      'Margaret',
      'Emma',
      'Mary',
      'Olivia',
      'Samantha',
      'Olivia',
      'Patricia',
      'Isla',
      'Bethany'
    ],
    surnames: [
      'Smith',
      'Anderson',
      'Clark',
      'Wright',
      'Mitchell',
      'Johnson',
      'Thomas',
      'Rodriguez',
      'Lopez',
      'Perez',
      'Williams',
      'Jackson',
      'Lewis',
      'Hill',
      'Roberts',
      'Jones',
      'White',
      'Lee',
      'Scott',
      'Turner',
      'Brown',
      'Harris',
      'Walker',
      'Green',
      'Phillips',
      'Davis',
      'Martin',
      'Hall',
      'Adams',
      'Campbell',
      'Miller',
      'Thompson',
      'Allen',
      'Baker',
      'Parker',
      'Wilson',
      'Garcia',
      'Young',
      'Gonzalez',
      'Evans',
      'Moore',
      'Martinez',
      'Hernandez',
      'Nelson',
      'Edwards',
      'Taylor',
      'Robinson',
      'King',
      'Carter',
      'Collins'
    ]
  }),

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: \`\${name} \${surname}\`,
          initials: \`\${name[0]} \${surname[0]}\`
        };
      });
    }
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    }
  }
};
</scrpt>
`,
        window: 0,
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
