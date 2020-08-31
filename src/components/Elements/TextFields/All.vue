<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Playground
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="playground.showCode = !playground.showCode"
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
        <v-sheet v-if="playground.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="playground.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="playground.window = 1"
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
                  @click="copy(playground.template + playground.script)"
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
            <v-window v-model="playground.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  playground.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  playground.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Playground />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Basic Usage - Text Fields Alerts
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
        Character Counter
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="characterCounter.showCode = !characterCounter.showCode"
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
        <v-sheet v-if="characterCounter.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="characterCounter.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="characterCounter.window = 1"
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
                    copy(characterCounter.template + characterCounter.script)
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
            <v-window v-model="characterCounter.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  characterCounter.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  characterCounter.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CharacterCounter />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Box Style
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="boxStyle.showCode = !boxStyle.showCode"
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
        <v-sheet v-if="boxStyle.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="boxStyle.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="boxStyle.window = 1"
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
                  @click="copy(boxStyle.template + boxStyle.script)"
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
            <v-window v-model="boxStyle.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  boxStyle.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  boxStyle.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <BoxStyle />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Dense
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dense.showCode = !dense.showCode"
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
        <v-sheet v-if="dense.showCode" tile>
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
                  @click="copy(dense.template)"
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
                  dense.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Dense />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Hints
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="hintText.showCode = !hintText.showCode"
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
        <v-sheet v-if="hintText.showCode" tile>
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
                  @click="copy(hintText.template)"
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
                  hintText.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <HintText />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Disabled and Read Only
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                disabledAndReadOnly.showCode = !disabledAndReadOnly.showCode
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
        <v-sheet v-if="disabledAndReadOnly.showCode" tile>
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
                  @click="copy(disabledAndReadOnly.template)"
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
                  disabledAndReadOnly.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DisabledAndReadOnly />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Label Slot
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="labelSlot.showCode = !labelSlot.showCode"
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
        <v-sheet v-if="labelSlot.showCode" tile>
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
                  @click="copy(labelSlot.template)"
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
                  labelSlot.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <LabelSlot />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Clearable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="clearable.showCode = !clearable.showCode"
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
        <v-sheet v-if="clearable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="clearable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="clearable.window = 1"
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
                  @click="copy(clearable.template + clearable.script)"
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
            <v-window v-model="clearable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  clearable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  clearable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Clearable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Auto-Hidint Details
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="autoHide.showCode = !autoHide.showCode"
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
        <v-sheet v-if="autoHide.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="autoHide.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="autoHide.window = 1"
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
                  @click="copy(autoHide.template + autoHide.script)"
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
            <v-window v-model="autoHide.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  autoHide.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  autoHide.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AutoHide />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Custom Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="customColors.showCode = !customColors.showCode"
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
        <v-sheet v-if="customColors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="customColors.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="customColors.window = 1"
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
                  @click="copy(customColors.template + customColors.script)"
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
            <v-window v-model="customColors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  customColors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  customColors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CustomColors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Icon Events
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconEvents.showCode = !iconEvents.showCode"
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
        <v-sheet v-if="iconEvents.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconEvents.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconEvents.window = 1"
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
                  @click="copy(iconEvents.template + iconEvents.script)"
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
            <v-window v-model="iconEvents.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  iconEvents.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  iconEvents.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconEvents />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Full Width
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="fullWidth.showCode = !fullWidth.showCode"
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
        <v-sheet v-if="fullWidth.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="fullWidth.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="fullWidth.window = 1"
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
                  @click="copy(fullWidth.template + fullWidth.script)"
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
            <v-window v-model="fullWidth.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  fullWidth.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  fullWidth.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <FullWidth />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Icons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="icons.showCode = !icons.showCode"
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
        <v-sheet v-if="icons.showCode" tile>
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
                  @click="copy(icons.template)"
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
                  icons.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Icons />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Icon Slots
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconSlots.showCode = !iconSlots.showCode"
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
        <v-sheet v-if="iconSlots.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconSlots.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconSlots.window = 1"
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
                  @click="copy(iconSlots.template + iconSlots.script)"
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
            <v-window v-model="iconSlots.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  iconSlots.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  iconSlots.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconSlots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Single Line
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="singleLine.showCode = !singleLine.showCode"
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
        <v-sheet v-if="singleLine.showCode" tile>
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
                  @click="copy(singleLine.template)"
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
                  singleLine.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SingleLine />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Shaped
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="shaped.showCode = !shaped.showCode"
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
        <v-sheet v-if="shaped.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="shaped.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="shaped.window = 1"
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
                  @click="copy(shaped.template + shaped.script)"
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
            <v-window v-model="shaped.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  shaped.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  shaped.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Shaped />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Solo Style
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="soloStyle.showCode = !soloStyle.showCode"
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
        <v-sheet v-if="soloStyle.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="soloStyle.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="soloStyle.window = 1"
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
                  @click="copy(soloStyle.template + soloStyle.script)"
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
            <v-window v-model="soloStyle.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  soloStyle.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  soloStyle.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SoloStyle />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Prefixes and Suffixes
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                prefixesAndSuffixes.showCode = !prefixesAndSuffixes.showCode
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
        <v-sheet v-if="prefixesAndSuffixes.showCode" tile>
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
                  @click="copy(prefixesAndSuffixes.template)"
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
                  prefixesAndSuffixes.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <PrefixesAndSuffixes />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Outlined Style
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="outlinedStyle.showCode = !outlinedStyle.showCode"
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
        <v-sheet v-if="outlinedStyle.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="outlinedStyle.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="outlinedStyle.window = 1"
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
                  @click="copy(outlinedStyle.template + outlinedStyle.script)"
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
            <v-window v-model="outlinedStyle.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  outlinedStyle.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  outlinedStyle.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OutlinedStyle />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Password Inputs
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="passwordInputs.showCode = !passwordInputs.showCode"
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
        <v-sheet v-if="passwordInputs.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="passwordInputs.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="passwordInputs.window = 1"
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
                  @click="copy(passwordInputs.template + passwordInputs.script)"
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
            <v-window v-model="passwordInputs.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  passwordInputs.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  passwordInputs.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <PasswordInputs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Fields - Progress Bar
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="progressBar.showCode = !progressBar.showCode"
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
        <v-sheet v-if="progressBar.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="progressBar.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="progressBar.window = 1"
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
                  @click="copy(progressBar.template + progressBar.script)"
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
            <v-window v-model="progressBar.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  progressBar.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  progressBar.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ProgressBar />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Validation
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="validation.showCode = !validation.showCode"
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
        <v-sheet v-if="validation.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="validation.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="validation.window = 1"
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
                  @click="copy(validation.template + validation.script)"
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
            <v-window v-model="validation.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  validation.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  validation.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Validation />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Custom Validation
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="customValidation.showCode = !customValidation.showCode"
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
        <v-sheet v-if="customValidation.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="customValidation.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="customValidation.window = 1"
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
                    copy(customValidation.template + customValidation.script)
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
            <v-window v-model="customValidation.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  customValidation.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  customValidation.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CustomValidation />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AutoHide from "./AutoHidingDetails";
import BoxStyle from "./BoxStyle";
import CharacterCounter from "./CharacterCounter";
import Clearable from "./Clearable";
import CustomColors from "./CustomColors";
import CustomValidation from "./CustomValidation";
import Dense from "./Dense";
import DisabledAndReadOnly from "./DisabledAndReadOnly";
import FullWidth from "./FullWidthTextFieldWithCharacterCounter";
import HintText from "./HintText";
import IconEvents from "./IconEvents";
import Icons from "./Icons";
import IconSlots from "./IconSlots";
import LabelSlot from "./LabelSlot";
import OutlinedStyle from "./OutlinedStyle";
import PasswordInputs from "./PasswordInputs";
import Playground from "./Playground";
import PrefixesAndSuffixes from "./PrefixesAndSuffixes";
import ProgressBar from "./ProgressBar";
import Shaped from "./Shaped";
import SingleLine from "./SingleLine";
import SoloStyle from "./SoloStyle";
import Usage from "./Usage";
import Validation from "./Validation";

export default {
  components: {
    AutoHide,
    BoxStyle,
    CharacterCounter,
    Clearable,
    CustomColors,
    CustomValidation,
    Dense,
    DisabledAndReadOnly,
    FullWidth,
    HintText,
    IconEvents,
    Icons,
    IconSlots,
    LabelSlot,
    OutlinedStyle,
    PasswordInputs,
    Playground,
    PrefixesAndSuffixes,
    ProgressBar,
    Shaped,
    SingleLine,
    SoloStyle,
    Usage,
    Validation
  },
  data() {
    return {
      autoHide: {
        template: `<template>
  <div>
    <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    rules: [(value) => !!value || 'Required.', (value) => (value && value.length >= 3) || 'Min 3 characters']
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      boxStyle: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first" label="First Name" filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="last" label="Last Name" filled></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    first: 'John',
    last: 'Doe'
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      characterCounter: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="title" :rules="rules" counter="25" hint="This field uses counter prop" label="Regular"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="description" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="Limit exceeded"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="title" :rules="rules" counter="25" filled label="Filled"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="title" :rules="rules" counter="25" label="Outlined" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      title: 'Preliminary report',
      description: 'California is a state in the western United States',
      rules: [(v) => v.length <= 25 || 'Max 25 characters']
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      clearable: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="message1" label="Regular" clearable></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="message2" solo label="Solo" clearable></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="message3" filled label="Filled" clearable></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="message4" label="Outlined" outlined clearable></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      message1: 'Hey!',
      message2: 'Hey!',
      message3: 'Hey!',
      message4: 'Hey!'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      customColors: {
        template: `<template>
  <v-card flat>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>mdi-checkbox-marked-circle</v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.first" :rules="rules.name" color="purple darken-2" label="First name" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.last" :rules="rules.name" color="blue darken-2" label="Last name" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="form.bio" color="teal">
              <template v-slot:label>
                <div>Bio <small>(optional)</small></div>
              </template>
            </v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select v-model="form.favoriteAnimal" :items="animals" :rules="rules.animal" color="pink" label="Favorite animal" required></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-slider v-model="form.age" :rules="rules.age" color="orange" label="Age" hint="Be honest" min="1" max="100" thumb-label></v-slider>
          </v-col>
          <v-col cols="12">
            <v-checkbox v-model="form.terms" color="green">
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a href="javascript:;" @click.stop="terms = true">terms</a>
                  and
                  <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn text @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formIsValid" text color="primary" type="submit">Register</v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog v-model="terms" width="70%">
      <v-card>
        <v-card-title class="title">Terms</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="terms = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="conditions" width="70%">
      <v-card>
        <v-card-title class="title">Conditions</v-card-title>
        <v-card-text v-for="n in 5" :key="n">
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      bio: '',
      favoriteAnimal: '',
      age: null,
      terms: false
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        age: [(val) => val < 10 || \`I don't believe you!\`],
        animal: [(val) => (val || '').length > 0 || 'This field is required'],
        name: [(val) => (val || '').length > 0 || 'This field is required']
      },
      animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
      conditions: false,
      content: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.\`,
      snackbar: false,
      terms: false,
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return this.form.first && this.form.last && this.form.favoriteAnimal && this.form.terms;
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      customValidation: {
        template: `<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field ref="name" v-model="name" :rules="[() => !!name || 'This field is required']" :error-messages="errorMessages" label="Full Name" placeholder="John Doe" required></v-text-field>
          <v-text-field
            ref="address"
            v-model="address"
            :rules="[() => !!address || 'This field is required', () => (!!address && address.length <= 25) || 'Address must be less than 25 characters', addressCheck]"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>
          <v-text-field ref="city" v-model="city" :rules="[() => !!city || 'This field is required', addressCheck]" label="City" placeholder="El Paso" required></v-text-field>
          <v-text-field ref="state" v-model="state" :rules="[() => !!state || 'This field is required']" label="State/Province/Region" required placeholder="TX"></v-text-field>
          <v-text-field ref="zip" v-model="zip" :rules="[() => !!zip || 'This field is required']" label="ZIP / Postal Code" required placeholder="79938"></v-text-field>
          <v-autocomplete ref="country" v-model="country" :rules="[() => !!country || 'This field is required']" :items="countries" label="Country" placeholder="Select..." required></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua &amp; Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia &amp; Herzegovina',
      'Botswana',
      'Brazil',
      'British Virgin Islands',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Cape Verde',
      'Cayman Islands',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Congo',
      'Cook Islands',
      'Costa Rica',
      'Cote D Ivoire',
      'Croatia',
      'Cruise Ship',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Polynesia',
      'French West Indies',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyz Republic',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Namibia',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Pierre &amp; Miquelon',
      'Samoa',
      'San Marino',
      'Satellite',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'South Africa',
      'South Korea',
      'Spain',
      'Sri Lanka',
      'St Kitts &amp; Nevis',
      'St Lucia',
      'St Vincent',
      'St. Lucia',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      "Timor L'Este",
      'Togo',
      'Tonga',
      'Trinidad &amp; Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks &amp; Caicos',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (US)',
      'Yemen',
      'Zambia',
      'Zimbabwe'
    ],
    errorMessages: '',
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country
      };
    }
  },

  watch: {
    name() {
      this.errorMessages = '';
    }
  },

  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name ? "Hey! I'm required" : '';

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dense: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field dense label="Regular"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Filled" filled dense></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Filled" placeholder="Dense & Rounded" filled rounded dense></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Solo" solo dense></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Outlined" outlined dense></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Outlined" placeholder="Placeholder" outlined dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      disabledAndReadOnly: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Regular" disabled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Regular" readonly></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Solo" solo disabled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Solo" solo readonly></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Filled" filled disabled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Filled" filled readonly></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Outlined" outlined disabled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field value="John Doe" label="Outlined" outlined readonly></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      fullWidth: {
        template: `<template>
  <v-form>
    <v-autocomplete v-model="selected" :items="['Trevor Handsen', 'Alex Nelson']" chips label="To" full-width hide-details hide-no-data hide-selected multiple single-line></v-autocomplete>
    <v-divider></v-divider>
    <v-text-field label="Subject" value="Plans for the weekend" single-line full-width hide-details></v-text-field>
    <v-divider></v-divider>
    <v-textarea v-model="title" label="Message" counter maxlength="120" full-width single-line></v-textarea>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      selected: ['Trevor Handsen'],
      items: ['Trevor Handsen', 'Alex Nelson'],
      title: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      hintText: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      iconEvents: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    password: 'Password',
    show: false,
    message: 'Hey!',
    marker: true,
    iconIndex: 0,
    icons: ['mdi-emoticon', 'mdi-emoticon-cool', 'mdi-emoticon-dead', 'mdi-emoticon-excited', 'mdi-emoticon-happy', 'mdi-emoticon-neutral', 'mdi-emoticon-sad', 'mdi-emoticon-tongue']
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    }
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1 ? (this.iconIndex = 0) : this.iconIndex++;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      icons: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

          <v-text-field label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

          <v-text-field label="Append" append-icon="mdi-map-marker"></v-text-field>

          <v-text-field label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field solo label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

          <v-text-field solo label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

          <v-text-field solo label="Append" append-icon="mdi-map-marker"></v-text-field>

          <v-text-field solo label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field filled label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

          <v-text-field filled label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

          <v-text-field filled label="Append" append-icon="mdi-map-marker"></v-text-field>

          <v-text-field filled label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field outlined label="Prepend" prepend-icon="mdi-map-marker"></v-text-field>

          <v-text-field outlined label="Prepend inner" prepend-inner-icon="mdi-map-marker"></v-text-field>

          <v-text-field outlined label="Append" append-icon="mdi-map-marker"></v-text-field>

          <v-text-field outlined label="Append outer" append-outer-icon="mdi-map-marker"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      iconSlots: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="message" outlined clearable label="Message" type="text">
            <template v-slot:prepend>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">mdi-help-circle-outline</v-icon>
                </template>
                I'm a tooltip
              </v-tooltip>
            </template>
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="" />
              </v-fade-transition>
            </template>
            <template v-slot:append-outer>
              <v-menu style="top: -12px" offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <v-icon left>mdi-menu</v-icon>
                    Menu
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text class="pa-6">
                    <v-btn large flat color="primary" @click="clickMe"><v-icon left>mdi-target</v-icon>Click me</v-btn>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    message: 'Hey!',
    loading: false
  }),

  methods: {
    clickMe() {
      this.loading = true;
      this.message = 'Wait for it...';
      setTimeout(() => {
        this.loading = false;
        this.message = "You've clicked me!";
      }, 2000);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      labelSlot: {
        template: `<template>
  <v-form>
    <v-container>
      <v-text-field>
        <template v-slot:label> What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">find_in_page</v-icon> </template>
      </v-text-field>
    </v-container>
  </v-form>
</template>`,
        showCode: false
      },
      outlinedStyle: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first" label="First Name" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="last" label="Last Name" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    first: 'John',
    last: 'Doe'
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      passwordInputs: {
        template: `<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Visible"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Not visible"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.emailMatch]"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="Error"
            hint="At least 8 characters"
            value="Pa"
            error
            @click:append="show4 = !show4"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      playground: {
        template: `<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field v-model="label" label="Label"></v-text-field>
        <v-text-field v-model="hint" label="Hint"></v-text-field>
        <v-text-field v-model="placeholder" label="Placeholder"></v-text-field>
      </v-col>
      <v-col cols="12"></v-col>
      <v-col cols="12" md="6">
        <v-switch v-model="shaped" class="ma-1" label="Shaped (requires Filled, Outlined or Solo)" :disabled="!outlined && !filled && !solo"></v-switch>
        <v-switch v-model="outlined" class="ma-1" label="Outlined"></v-switch>
        <v-switch v-model="rounded" class="ma-1" label="Rounded (requires Filled, Outlined or Solo)" :disabled="!filled && !outlined && !solo"></v-switch>
        <v-switch v-model="solo" class="ma-1" label="Solo" :disabled="filled"></v-switch>
        <v-switch v-model="singleLine" class="ma-1" label="Single-line"></v-switch>
        <v-switch v-model="filled" class="ma-1" label="Filled" :disabled="outlined || solo"></v-switch>
        <v-switch v-model="clearable" class="ma-1" label="Clearable"></v-switch>
        <v-switch v-model="persistentHint" class="ma-1" label="Persistent Hint"></v-switch>
        <v-switch v-model="loading" class="ma-1" label="Loading"></v-switch>
        <v-switch v-model="flat" class="ma-1" label="Flat (requires Solo)" :disabled="!solo"></v-switch>
        <v-switch v-model="dense" class="ma-1" label="Dense"></v-switch>
        <v-row>
          <v-switch v-model="counterEn" class="ma-0 mr-2 ml-1" label="Counter"></v-switch>
          <v-slider v-model="counter" :disabled="!counterEn"></v-slider>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet elevation="12" class="pa-12">
          <v-text-field
            v-model="model"
            :label="label"
            :hint="hint"
            :placeholder="placeholder"
            :shaped="shaped"
            :outlined="outlined"
            :rounded="rounded"
            :solo="solo"
            :single-line="singleLine"
            :filled="filled"
            :clearable="clearable"
            :persistent-hint="persistentHint"
            :loading="loading"
            :flat="flat"
            :counter="counterEn ? counter : false"
            :dense="dense"
          ></v-text-field>
          <div class="mt-12 text-center">Value: {{ model }}</div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    model: "I'm a text field",
    label: 'Hey!',
    hint: 'Customize me!',
    placeholder: '',
    shaped: false,
    outlined: false,
    rounded: false,
    solo: false,
    singleLine: false,
    filled: false,
    clearable: false,
    persistentHint: false,
    loading: false,
    flat: false,
    counterEn: false,
    counter: 0,
    dense: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      prefixesAndSuffixes: {
        template: `<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>Prefix for dollar currency</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Amount" value="10.00" prefix="$"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Suffix for weight</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Weight" value="28.00" suffix="lbs"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Suffix for email domain</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Email address" value="example" suffix="@gmail.com"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Suffix for time zone</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="Label Text" value="12:30:00" type="time" suffix="PST"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      progressBar: {
        template: `<template>
  <v-container fluid>
    <v-checkbox v-model="custom" label="Custom progress bar"></v-checkbox>
    <v-text-field v-model="value" color="cyan darken" label="Text field" placeholder="Start typing..." loading>
      <template v-slot:progress>
        <v-progress-linear v-if="custom" :value="progress" :color="color" absolute height="7"></v-progress-linear>
      </template>
    </v-text-field>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    value: '',
    custom: true
  }),
  computed: {
    progress() {
      return Math.min(100, this.value.length * 10);
    },
    color() {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)];
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      shaped: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first" label="First Name" outlined shaped></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="last" label="Last Name" filled shaped></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    first: 'John',
    last: 'Doe'
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      singleLine: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Regular" single-line></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Solo" single-line solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Filled" single-line filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Outlined" single-line outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      soloStyle: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="first" label="First Name" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="last" label="Last Name" solo-inverted></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    first: 'John',
    last: 'Doe'
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Regular"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Regular" placeholder="Placeholder"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Solo" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Solo" placeholder="Placeholder" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Filled" filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Filled" placeholder="Placeholder" filled></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Outlined" outlined></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Outlined" placeholder="Placeholder" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        showCode: false
      },
      validation: {
        template: `<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="title" :rules="[rules.required, rules.counter]" label="Title" counter maxlength="20"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      title: 'Preliminary report',
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }
      }
    };
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
