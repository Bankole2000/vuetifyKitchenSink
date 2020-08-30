<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icon Slot
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconSlot.showCode = !iconSlot.showCode"
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
        <v-sheet v-if="iconSlot.showCode" tile>
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
                  @click="copy(iconSlot.template)"
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
                  iconSlot.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconSlot />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Two Lines
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="twoLine.showCode = !twoLine.showCode"
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
        <v-sheet v-if="twoLine.showCode" tile>
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
                  @click="copy(twoLine.template)"
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
                  twoLine.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TwoLine />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Actions Slot
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="actionSlot.showCode = !actionSlot.showCode"
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
        <v-sheet v-if="actionSlot.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="actionSlot.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="actionSlot.window = 1"
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
                  @click="copy(actionSlot.template + actionSlot.script)"
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
            <v-window v-model="actionSlot.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  actionSlot.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  actionSlot.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ActionSlot />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Icon Click Event
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconClick.showCode = !iconClick.showCode"
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
        <v-sheet v-if="iconClick.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconClick.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconClick.window = 1"
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
                  @click="copy(iconClick.template + iconClick.script)"
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
            <v-window v-model="iconClick.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  iconClick.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  iconClick.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconClick />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Single Line (For Desktops)
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="singleLineDesktop.showCode = !singleLineDesktop.showCode"
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
        <v-sheet v-if="singleLineDesktop.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="singleLineDesktop.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="singleLineDesktop.window = 1"
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
                    copy(singleLineDesktop.template + singleLineDesktop.script)
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
            <v-window v-model="singleLineDesktop.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  singleLineDesktop.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  singleLineDesktop.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SingleLineDesktop />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import ActionSlot from './ActionsSlot';
import IconClick from './IconClickEvent';
import IconSlot from './IconSlot';
import SingleLineDesktop from './SingleLineForDesktop';
import TwoLine from './TwoLine';

export default {
  components: {
    ActionSlot,
    IconClick,
    IconSlot,
    SingleLineDesktop,
    TwoLine
  },
  data() {
    return {
      actionSlot: {
        template: `<template>
  <div>
    <v-checkbox v-model="v0" label="Visible"></v-checkbox>
    <v-banner v-model="v0" single-line transition="slide-y-transition">
      No Internet connection
      <template v-slot:actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss">Dismiss</v-btn>
        <v-btn text color="primary">Retry</v-btn>
      </template>
    </v-banner>
  </div>
</template>`,
        script: `<script>
export default {
  data: () => ({
    v0: true
  })
};
</scrpt>`,
        window: 0,
        showCode: false
      },
      iconClick: {
        template: `<template>
  <v-banner single-line @click:icon="alert">
    <v-icon slot="icon" color="warning" size="36">
      mdi-wifi-strength-alert-outline
    </v-icon>
    Unable to verify your Internet connection

    <template v-slot:actions>
      <v-btn color="primary" text>
        Connecting Settings
      </v-btn>
    </template>
  </v-banner>
</template>
`,
        script: `<script>
export default {
  methods: {
    alert() {
      alert('Hello, World!');
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      iconSlot: {
        template: `<template>
  <v-banner two-line>
    <v-avatar slot="icon" color="deep-purple accent-4" size="40">
      <v-icon icon="mdi-lock" color="white">
        mdi-lock
      </v-icon>
    </v-avatar>

    Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and
    actionable.

    <template v-slot:actions>
      <v-btn text color="deep-purple accent-4">Action</v-btn>
      <v-btn text color="deep-purple accent-4">Action</v-btn>
    </template>
  </v-banner>
</template>
`,
        showCode: false
      },
      singleLineDesktop: {
        template: `<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>My Document</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-switch v-model="sticky" label="Sticky Banner" hide-details></v-switch>
      </div>
    </v-toolbar>
    <v-banner single-line :sticky="sticky">
      We can't save your edits while you are in offline mode.

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4">Get Online</v-btn>
      </template>
    </v-banner>
    <v-card-text class="grey lighten-4">
      <v-sheet max-width="800" height="300" class="mx-auto"></v-sheet>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    sticky: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      twoLine: {
        template: `<template>
  <v-banner>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada. Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
    <template v-slot:actions>
      <v-btn text color="primary">Dismiss</v-btn>
      <v-btn text color="primary">Retry</v-btn>
    </template>
  </v-banner>
</template>`,
        showCode: false
      },
      tooltipText: 'Copy Code'
    };
  },
  methods: {}
};
</script>

<style></style>
