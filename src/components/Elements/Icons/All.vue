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
        Icons - Buttons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="buttons.showCode = !buttons.showCode"
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
        <v-sheet v-if="buttons.showCode" tile>
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
                  @click="copy(buttons.template)"
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
                  buttons.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Buttons />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icons - Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="color.showCode = !color.showCode"
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
        <v-sheet v-if="color.showCode" tile>
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
                  @click="copy(color.template)"
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
                  color.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconColor />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icons - Font Awesome
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="fontAwesome.showCode = !fontAwesome.showCode"
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
        <v-sheet v-if="fontAwesome.showCode" tile>
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
                  @click="copy(fontAwesome.template)"
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
                  fontAwesome.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <FontAwesome />
      </v-container>
    </v-card>

    <!-- <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dismissible Alerts
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dismissible.showCode = !dismissible.showCode"
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
        <v-sheet v-if="dismissible.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dismissible.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dismissible.window = 1"
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
                  @click="copy(dismissible.template + dismissible.script)"
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
            <v-window v-model="dismissible.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dismissible.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dismissible.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Dismissible />
      </v-container>
    </v-card> -->

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icons - Clickable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="clickable.showCode = !clickable.showCode"
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
        <v-sheet v-if="clickable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="clickable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="clickable.window = 1"
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
                  @click="copy(clickable.template + clickable.script)"
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
            <v-window v-model="clickable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  clickable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  clickable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Clickable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icons - Material Design
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="materialDesign.showCode = !materialDesign.showCode"
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
        <v-sheet v-if="materialDesign.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="materialDesign.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="materialDesign.window = 1"
              >Style</v-btn
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
                  @click="copy(materialDesign.template + materialDesign.style)"
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
            <v-window v-model="materialDesign.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  materialDesign.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  materialDesign.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MaterialDesign />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icons - MDI & SVG
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mDISVG.showCode = !mDISVG.showCode"
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
        <v-sheet v-if="mDISVG.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="mDISVG.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="mDISVG.window = 1"
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
                  @click="copy(mDISVG.template + mDISVG.script)"
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
            <v-window v-model="mDISVG.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mDISVG.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mDISVG.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MDISVG />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Buttons from './Buttons';
import Clickable from './Clickable';
import IconColor from './Color';
import FontAwesome from './FontAwesome';
import MaterialDesign from './MaterialDesign';
import MDISVG from './MDISVG';

export default {
  components: {
    Buttons,
    Clickable,
    IconColor,
    FontAwesome,
    MaterialDesign,
    MDISVG
  },
  data() {
    return {
      buttons: {
        template: `<template>
  <div class="text-center">
    <div>
      <v-btn class="ma-2" color="primary" dark
        >Accept
        <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
      </v-btn>

      <v-btn class="ma-2" color="red" dark
        >Decline
        <v-icon dark right>mdi-cancel</v-icon>
      </v-btn>

      <v-btn class="ma-2" dark>
        <v-icon dark left>mdi-minus_circle</v-icon>Cancel
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" color="orange darken-2" dark>
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>

      <v-btn class="ma-2" color="purple" dark>
        <v-icon dark>mdi-wrench</v-icon>
      </v-btn>

      <v-btn class="ma-2" color="indigo" dark>
        <v-icon dark>mdi-cloud-upload</v-icon>
      </v-btn>
    </div>

    <div>
      <v-btn class="ma-2" text icon color="blue lighten-2">
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn class="ma-2" text icon color="red lighten-2">
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div>
  </div>
</template>
`,
        showCode: false
      },
      clickable: {
        template: `<template>
  <v-card>
    <v-toolbar color="pink" dark dense flat>
      <v-toolbar-title class="body-2">Upcoming Changes</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-icon large @click="next">
        mdi-chevron-right
      </v-icon>
    </v-card-actions>
  </v-card>
</template>
`,
        script: `<script>
export default {
  methods: {
    next() {
      alert("You clicked next!");
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      color: {
        template: `<template>
  <v-row justify="space-around">
    <v-icon large color="green darken-2">mdi-domain</v-icon>

    <v-icon large color="blue darken-2">mdi-message-text</v-icon>

    <v-icon large color="purple darken-2">mdi-dialpad</v-icon>

    <v-icon large color="teal darken-2">mdi-email</v-icon>

    <v-icon large color="blue-grey darken-2">mdi-call-split</v-icon>

    <v-icon large color="orange darken-2">mdi-arrow-up-bold-box-outline</v-icon>
  </v-row>
</template>
`,
        showCode: false
      },
      fontAwesome: {
        template: `<template>
  <v-row align="center" justify="space-around">
    <v-icon>fas fa-lock</v-icon>

    <v-icon>fas fa-search</v-icon>

    <v-icon>fas fa-list</v-icon>

    <v-icon>fas fa-edit</v-icon>

    <v-icon>fas fa-tachometer-alt</v-icon>

    <v-icon>fas fa-circle-notch fa-spin</v-icon>
  </v-row>
</template>
`,
        showCode: false
      },
      materialDesign: {
        template: `<template>
  <v-container fluid>
    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon>home</v-icon>
        <v-icon>event</v-icon>
        <v-icon>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon dark>folder_open</v-icon>
        <v-icon dark>widgets</v-icon>
        <v-icon dark>gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon medium>home</v-icon>
        <v-icon medium>event</v-icon>
        <v-icon medium>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon medium dark>folder_open</v-icon>
        <v-icon medium dark>widgets</v-icon>
        <v-icon medium dark>gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around" class="mb-2">
      <span class="group pa-2">
        <v-icon large>home</v-icon>
        <v-icon large>event</v-icon>
        <v-icon large>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon large dark>folder_open</v-icon>
        <v-icon large dark>widgets</v-icon>
        <v-icon large dark>gavel</v-icon>
      </span>
    </v-row>

    <v-row justify="space-around">
      <span class="group pa-2">
        <v-icon x-large>home</v-icon>
        <v-icon x-large>event</v-icon>
        <v-icon x-large>info</v-icon>
      </span>

      <span class="group pa-2 teal">
        <v-icon x-large dark>folder_open</v-icon>
        <v-icon x-large dark>widgets</v-icon>
        <v-icon x-large dark>gavel</v-icon>
      </span>
    </v-row>
  </v-container>
</template>
`,
        style: `<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>
`,
        window: 0,
        showCode: false
      },
      mDISVG: {
        template: `<template>
  <v-row align="center" justify="center">
    <v-icon>{{ icons.mdiAccount }}</v-icon>
    <div class="mx-2"></div>
    <v-icon>{{ icons.mdiPencil }}</v-icon>
    <div class="mx-2"></div>
    <v-icon>{{ icons.mdiShareVariant }}</v-icon>
    <div class="mx-2"></div>
    <v-btn color="primary" depressed>
      <v-icon left>{{ icons.mdiDelete }}</v-icon>
      Delete
    </v-btn>
  </v-row>
</template>
`,
        script: `<script>
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";

export default {
  data: () => ({
    icons: {
      mdiAccount,
      mdiPencil,
      mdiShareVariant,
      mdiDelete
    }
  })
};
</scrpt>
`,
        window: 0,
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
