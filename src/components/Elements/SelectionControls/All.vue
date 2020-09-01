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
        Basic Usage - Selection Controls
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
            <v-btn text class="white--text" rounded @click="usage.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="usage.window = 1"
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
                  @click="copy(usage.template + usage.script)"
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
            <v-window v-model="usage.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  usage.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  usage.script
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

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkboxes - Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxesColors.showCode = !checkboxesColors.showCode"
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
        <v-sheet v-if="checkboxesColors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesColors.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesColors.window = 1"
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
                    copy(checkboxesColors.template + checkboxesColors.script)
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
            <v-window v-model="checkboxesColors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  checkboxesColors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  checkboxesColors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxesColors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkboxes - State
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxesState.showCode = !checkboxesState.showCode"
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
        <v-sheet v-if="checkboxesState.showCode" tile>
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
                  @click="copy(checkboxesState.template)"
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
                  checkboxesState.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxesState />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkboxes - Inline
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxesInline.showCode = !checkboxesInline.showCode"
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
        <v-sheet v-if="checkboxesInline.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesInline.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesInline.window = 1"
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
                    copy(checkboxesInline.template + checkboxesInline.script)
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
            <v-window v-model="checkboxesInline.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  checkboxesInline.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  checkboxesInline.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxesInline />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkboxes - Boolean
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxesBoolean.showCode = !checkboxesBoolean.showCode"
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
        <v-sheet v-if="checkboxesBoolean.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesBoolean.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesBoolean.window = 1"
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
                    copy(checkboxesBoolean.template + checkboxesBoolean.script)
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
            <v-window v-model="checkboxesBoolean.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  checkboxesBoolean.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  checkboxesBoolean.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxesBoolean />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkboxes Array
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxesArray.showCode = !checkboxesArray.showCode"
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
        <v-sheet v-if="checkboxesArray.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesArray.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxesArray.window = 1"
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
                    copy(checkboxesArray.template + checkboxesArray.script)
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
            <v-window v-model="checkboxesArray.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  checkboxesArray.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  checkboxesArray.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxesArray />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - State
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesState.showCode = !switchesState.showCode"
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
        <v-sheet v-if="switchesState.showCode" tile>
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
                  @click="copy(switchesState.template)"
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
                  switchesState.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesState />
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
        Label Slot
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
            <v-btn
              text
              class="white--text"
              rounded
              @click="labelSlot.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="labelSlot.window = 1"
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
                  @click="copy(labelSlot.template + labelSlot.script)"
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
            <v-window v-model="labelSlot.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  labelSlot.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  labelSlot.script
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
        Radios - Default
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="radiosDefault.showCode = !radiosDefault.showCode"
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
        <v-sheet v-if="radiosDefault.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosDefault.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosDefault.window = 1"
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
                  @click="copy(radiosDefault.template + radiosDefault.script)"
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
            <v-window v-model="radiosDefault.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  radiosDefault.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  radiosDefault.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RadiosDefault />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Radios - Colored
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="radiosColors.showCode = !radiosColors.showCode"
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
        <v-sheet v-if="radiosColors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosColors.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosColors.window = 1"
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
                  @click="copy(radiosColors.template + radiosColors.script)"
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
            <v-window v-model="radiosColors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  radiosColors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  radiosColors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RadiosColors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Radios - Direction
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="radiosDirection.showCode = !radiosDirection.showCode"
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
        <v-sheet v-if="radiosDirection.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosDirection.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="radiosDirection.window = 1"
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
                    copy(radiosDirection.template + radiosDirection.script)
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
            <v-window v-model="radiosDirection.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  radiosDirection.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  radiosDirection.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RadiosDirection />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - Array
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesArray.showCode = !switchesArray.showCode"
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
        <v-sheet v-if="switchesArray.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesArray.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesArray.window = 1"
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
                  @click="copy(switchesArray.template + switchesArray.script)"
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
            <v-window v-model="switchesArray.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  switchesArray.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  switchesArray.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesArray />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - Boolean
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesBoolean.showCode = !switchesBoolean.showCode"
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
        <v-sheet v-if="switchesBoolean.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesBoolean.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesBoolean.window = 1"
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
                    copy(switchesBoolean.template + switchesBoolean.script)
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
            <v-window v-model="switchesBoolean.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  switchesBoolean.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  switchesBoolean.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesBoolean />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesColors.showCode = !switchesColors.showCode"
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
        <v-sheet v-if="switchesColors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesColors.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesColors.window = 1"
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
                  @click="copy(switchesColors.template + switchesColors.script)"
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
            <v-window v-model="switchesColors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  switchesColors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  switchesColors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesColors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - Flat
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesFlat.showCode = !switchesFlat.showCode"
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
        <v-sheet v-if="switchesFlat.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesFlat.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesFlat.window = 1"
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
                  @click="copy(switchesFlat.template + switchesFlat.script)"
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
            <v-window v-model="switchesFlat.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  switchesFlat.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  switchesFlat.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesFlat />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Switches - Inset
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="switchesInset.showCode = !switchesInset.showCode"
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
        <v-sheet v-if="switchesInset.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesInset.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="switchesInset.window = 1"
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
                  @click="copy(switchesInset.template + switchesInset.script)"
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
            <v-window v-model="switchesInset.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  switchesInset.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  switchesInset.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SwitchesInset />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import CheckboxesArray from './CheckboxesArray';
import CheckboxesBoolean from './CheckboxesBoolean';
import CheckboxesColors from './CheckboxesColors';
import CheckboxesInline from './CheckboxesInlineWithATextfield';
import CheckboxesState from './CheckboxesStates';
import LabelSlot from './LabelSlot';
import Playground from './Playground';
import RadiosColors from './RadiosColors';
import RadiosDefault from './RadiosDefault';
import RadiosDirection from './RadiosDirection';
import SwitchesArray from './SwitchesArray';
import SwitchesBoolean from './SwitchesBoolean';
import SwitchesColors from './SwitchesColors';
import SwitchesFlat from './SwitchesFlat';
import SwitchesInset from './SwitchesInset';
import SwitchesState from './SwitchesStates';
import Usage from './Usage';

export default {
  components: {
    CheckboxesArray,
    CheckboxesBoolean,
    CheckboxesColors,
    CheckboxesInline,
    CheckboxesState,
    LabelSlot,
    Playground,
    RadiosColors,
    RadiosDefault,
    RadiosDirection,
    SwitchesArray,
    SwitchesBoolean,
    SwitchesColors,
    SwitchesFlat,
    SwitchesInset,
    SwitchesState,
    Usage
  },
  data() {
    return {
      checkboxesArray: {
        template: `<template>
  <v-container fluid>
    <p>{{ selected }}</p>
    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      selected: ["John"]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      checkboxesBoolean: {
        template: `<template>
  <v-container fluid>
    <v-checkbox
      v-model="checkbox1"
      :label="\`Checkbox 1: \${checkbox1.toString()}\`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="\`Checkbox 2: \${checkbox2.toString()}\`"
    ></v-checkbox>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      checkboxesColors: {
        template: `<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="red"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="red darken-3"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="indigo"
              color="indigo"
              value="indigo"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="indigo darken-3"
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="orange"
              color="orange"
              value="orange"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="orange darken-3"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="primary"
              color="primary"
              value="primary"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="secondary"
              color="secondary"
              value="secondary"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="success"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="info"
              color="info"
              value="info"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="ex4"
              label="warning"
              color="warning"
              value="warning"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="error"
              color="error"
              value="error"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3"
      ]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      checkboxesInline: {
        template: `<template>
  <v-card>
    <v-card-text>
      <v-row align="center">
        <v-checkbox
          v-model="includeFiles"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field label="Include files"></v-text-field>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="enabled"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="!enabled"
          label="I only work if you check the box"
        ></v-text-field>
      </v-row>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    includeFiles: true,
    enabled: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      checkboxesState: {
        template: `<template>
  <v-container fluid>
    <v-row class="light--text">
      <v-col cols="4">on</v-col>
      <v-col cols="4">off</v-col>
      <v-col cols="4">indeterminate</v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-checkbox input-value="true" value></v-checkbox>
      </v-col>
      <v-col cols="4">
        <v-checkbox value></v-checkbox>
      </v-col>
      <v-col cols="4">
        <v-checkbox value indeterminate></v-checkbox>
      </v-col>
    </v-row>
    <v-row class="light--text">
      <v-col cols="4">on disabled</v-col>
      <v-col cols="4">off disabled</v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-checkbox input-value="true" value disabled></v-checkbox>
      </v-col>
      <v-col cols="4">
        <v-checkbox value disabled></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      labelSlot: {
        template: `<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          I agree that
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a
                target="_blank"
                href="http://vuetifyjs.com"
                @click.stop
                v-on="on"
              >
                Vuetify
              </a>
            </template>
            Opens in new window
          </v-tooltip>
          is awesome
        </div>
      </template>
    </v-checkbox>

    <v-radio-group v-model="radios">
      <template v-slot:label>
        <div>Your favourite <strong>search engine</strong></div>
      </template>
      <v-radio value="Google">
        <template v-slot:label>
          <div>
            Of course it's <strong class="success--text">Google</strong>
          </div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template v-slot:label>
          <div>
            Definitely <strong class="primary--text">Duckduckgo</strong>
          </div>
        </template>
      </v-radio>
    </v-radio-group>

    <v-switch v-model="switchMe">
      <template v-slot:label>
        Turn on the progress:
        <v-progress-circular
          :indeterminate="switchMe"
          :value="0"
          size="24"
          class="ml-2"
        ></v-progress-circular>
      </template>
    </v-switch>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      checkbox: false,
      radios: "Duckduckgo",
      switchMe: false
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
  <div>
    <v-row justify="space-around">
      <v-checkbox v-model="disabled" class="mx-2" label="Disabled"></v-checkbox>
      <v-checkbox
        v-model="readonly"
        class="mx-2"
        label="Read-only"
      ></v-checkbox>
      <v-checkbox v-model="error" class="mx-2" label="Error"></v-checkbox>
      <v-checkbox v-model="success" class="mx-2" label="Success"></v-checkbox>
      <v-col cols="12">
        <v-select v-model="color" :items="colors" label="Color"></v-select>
      </v-col>
      <v-col cols="12">
        <header>Checkboxes</header>
      </v-col>
      <v-checkbox v-model="loading" class="mx-2" label="Loading"></v-checkbox>
      <v-checkbox v-model="flat" class="mx-2" label="Flat"></v-checkbox>
      <v-checkbox v-model="inset" class="mx-2" label="Inset"></v-checkbox>
      <v-col cols="12">
        <header>Switches</header>
      </v-col>
      <v-switch v-model="mandatory" class="mx-2" label="Mandatory"></v-switch>
      <v-switch v-model="multiple" class="mx-2" label="Multiple"></v-switch>
      <v-switch v-model="row" class="mx-2" label="Row"></v-switch>
      <v-col cols="12">
        <header>Radios</header>
      </v-col>
      <v-radio-group>
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="\`Radio \${n}\`"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-row>
    <v-switch
      :disabled="disabled"
      :readonly="readonly"
      :loading="loading"
      :flat="flat"
      :inset="inset"
      :error="error"
      :success="success"
      :color="color"
      label="I'm a switch"
    ></v-switch>
    <v-radio-group
      :disabled="disabled"
      :readonly="readonly"
      :mandatory="mandatory"
      :multiple="multiple"
      :error="error"
      :success="success"
      :row="row"
      :color="color"
    >
      <v-radio label="I'm a radio button"></v-radio>
      <v-radio label="I'm a radio button"></v-radio>
      <v-radio label="I'm a radio button"></v-radio>
    </v-radio-group>
    <v-switch
      v-model="indeterminate"
      class="mx-2"
      label="Indeterminate"
    ></v-switch>
    <v-checkbox
      :disabled="disabled"
      :readonly="readonly"
      :indeterminate="indeterminate"
      :error="error"
      :success="success"
      :color="color"
      label="I'm a checkbox"
    ></v-checkbox>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    disabled: false,
    readonly: false,
    loading: false,
    flat: false,
    inset: false,
    error: false,
    success: false,
    mandatory: false,
    multiple: false,
    row: false,
    indeterminate: false,
    color: "accent",
    colors: ["accent", "teal", "blue", "error", "success"]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      radiosColors: {
        template: `<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-radio-group v-model="ex7" column>
              <v-radio label="red" color="red" value="red"></v-radio>
              <v-radio
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
              ></v-radio>
              <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
              <v-radio
                label="indigo darken-3"
                color="indigo darken-3"
                value="indigo darken-3"
              ></v-radio>
              <v-radio label="orange" color="orange" value="orange"></v-radio>
              <v-radio
                label="orange darken-3"
                color="orange darken-3"
                value="orange darken-3"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-radio-group v-model="ex8" column>
              <v-radio
                label="primary"
                color="primary"
                value="primary"
              ></v-radio>
              <v-radio
                label="secondary"
                color="secondary"
                value="secondary"
              ></v-radio>
              <v-radio
                label="success"
                color="success"
                value="success"
              ></v-radio>
              <v-radio label="info" color="info" value="info"></v-radio>
              <v-radio
                label="warning"
                color="warning"
                value="warning"
              ></v-radio>
              <v-radio label="error" color="error" value="error"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      ex7: "red",
      ex8: "primary"
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      radiosDefault: {
        template: `<template>
  <v-container fluid>
    <p>{{ radios || "null" }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Radio 1" value="radio-1"></v-radio>
      <v-radio label="Radio 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      radios: "radio-1"
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      radiosDirection: {
        template: `<template>
  <v-container fluid>
    <v-radio-group v-model="column" column>
      <v-radio label="Option 1" value="radio-1"></v-radio>
      <v-radio label="Option 2" value="radio-2"></v-radio>
    </v-radio-group>
    <hr />
    <v-radio-group v-model="row" row>
      <v-radio label="Option 1" value="radio-1"></v-radio>
      <v-radio label="Option 2" value="radio-2"></v-radio>
    </v-radio-group>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      column: null,
      row: null
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesArray: {
        template: `<template>
  <v-container fluid>
    <p>{{ people }}</p>
    <v-switch v-model="people" label="John" value="John"></v-switch>
    <v-switch v-model="people" label="Jacob" value="Jacob"></v-switch>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      people: ["John"]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesBoolean: {
        template: `<template>
  <v-container fluid>
    <v-switch
      v-model="switch1"
      :label="\`Switch 1: \${switch1.toString()}\`"
    ></v-switch>
    <v-switch
      v-model="switch2"
      :label="\`Switch 2: \${switch2.toString()}\`"
    ></v-switch>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesColors: {
        template: `<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="red"
              color="red"
              value="red"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="red darken-3"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="indigo"
              color="indigo"
              value="indigo"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="indigo darken-3"
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="orange"
              color="orange"
              value="orange"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="orange darken-3"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="mt-12">
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="primary"
              color="primary"
              value="primary"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="secondary"
              color="secondary"
              value="secondary"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="success"
              color="success"
              value="success"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="info"
              color="info"
              value="info"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-switch
              v-model="ex11"
              label="warning"
              color="warning"
              value="warning"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex11"
              label="error"
              color="error"
              value="error"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      ex11: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3"
      ]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesFlat: {
        template: `<template>
  <v-sheet color="grey lighten-3" width="100%" height="100%" class="pa-12">
    <v-switch
      v-model="switch1"
      flat
      :label="\`Switch 1: \${switch1.toString()}\`"
    ></v-switch>
    <v-switch
      v-model="switch2"
      flat
      :label="\`Switch 2: \${switch2.toString()}\`"
    ></v-switch>
  </v-sheet>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesInset: {
        template: `<template>
  <v-sheet class="pa-5">
    <v-switch
      v-model="switch1"
      inset
      :label="\`Switch 1: \${switch1.toString()}\`"
    ></v-switch>
    <v-switch
      v-model="switch2"
      inset
      :label="\`Switch 2: \${switch2.toString()}\`"
    ></v-switch>
  </v-sheet>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      switchesState: {
        template: `<template>
  <v-container fluid>
    <v-row class="dark--text">
      <v-col cols="6">on</v-col>
      <v-col cols="6">off</v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-switch value input-value="true"></v-switch>
      </v-col>
      <v-col cols="6">
        <v-switch></v-switch>
      </v-col>
    </v-row>
    <v-row class="dark--text">
      <v-col cols="6">on disabled</v-col>
      <v-col cols="6">off disabled</v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-switch value input-value="true" disabled></v-switch>
      </v-col>
      <v-col cols="6">
        <v-switch disabled></v-switch>
      </v-col>
    </v-row>
    <v-row class="dark--text">
      <v-col cols="6">on loading</v-col>
      <v-col cols="6">off loading</v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-switch loading="warning" value input-value="true"></v-switch>
      </v-col>
      <v-col cols="6">
        <v-switch loading="warning"></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-container class="px-0" fluid>
    <v-checkbox
      v-model="checkbox"
      :label="\`Checkbox 1: \${checkbox.toString()}\`"
    ></v-checkbox>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      ></v-radio>
    </v-radio-group>
    <v-switch
      v-model="switch1"
      :label="\`Switch 1: \${switch1.toString()}\`"
    ></v-switch>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true
    };
  }
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
