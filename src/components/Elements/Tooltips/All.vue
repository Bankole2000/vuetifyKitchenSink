<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Basic Usage - Tooltip
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="usage.showCode = !usage.showCode"
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
        <v-sheet v-if="usage.showCode" tile>
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
                  @click="copy(usage.template)"
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
                  usage.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Usage />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tooltip Alignment
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="alignment.showCode = !alignment.showCode"
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
        <v-sheet v-if="alignment.showCode" tile>
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
                  @click="copy(alignment.template)"
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
                  alignment.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Alignment />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tooltip Visibility
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="visibility.showCode = !visibility.showCode"
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
        <v-sheet v-if="visibility.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="visibility.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="visibility.window = 1"
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
                  @click="copy(visibility.template + visibility.script)"
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
            <v-window v-model="visibility.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  visibility.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  visibility.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Visibility />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Alignment from "./Alignment";
import Usage from "./Usage";
import Visibility from "./Visibility";

export default {
  components: {
    Alignment,
    Usage,
    Visibility
  },
  data() {
    return {
      visibility: {
        template: `<template>
  <v-container fluid class="text-center">
    <v-row class="flex" justify="space-between">
      <v-col cols="12">
        <v-btn @click="show = !show">toggle</v-btn>
      </v-col>

      <v-col cols="12" class="mt-12">
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="grey lighten-1">mdi-cart</v-icon>
            </v-btn>
          </template>
          <span>Programmatic tooltip</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <div class="text-center d-flex align-center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Button</v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="primary" dark v-bind="attrs" v-on="on">mdi-home</v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">This text has a tooltip</span>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </div>
</template>
`,
        showCode: false
      },
      alignment: {
        template: `<template>
  <div class="text-center">
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Left</v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn>
      </template>
      <span>Top tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Bottom</v-btn>
      </template>
      <span>Bottom tooltip</span>
    </v-tooltip>

    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Right</v-btn>
      </template>
      <span>Right tooltip</span>
    </v-tooltip>
  </div>
</template>
`,
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
