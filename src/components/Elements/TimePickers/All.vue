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
        Basic Usage - Time Picker
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
        24 Hour Format
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="h24Format.showCode = !h24Format.showCode"
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
        <v-sheet v-if="h24Format.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="h24Format.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="h24Format.window = 1"
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
                  @click="copy(h24Format.template + h24Format.script)"
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
            <v-window v-model="h24Format.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  h24Format.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  h24Format.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <H24Format />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Allowed Times Example
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="allowedTimes.showCode = !allowedTimes.showCode"
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
        <v-sheet v-if="allowedTimes.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="allowedTimes.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="allowedTimes.window = 1"
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
                  @click="copy(allowedTimes.template + allowedTimes.script)"
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
            <v-window v-model="allowedTimes.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  allowedTimes.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  allowedTimes.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AllowedTimes />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        AM PM Switcher
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="ampmSwitch.showCode = !ampmSwitch.showCode"
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
        <v-sheet v-if="ampmSwitch.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="ampmSwitch.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="ampmSwitch.window = 1"
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
                  @click="copy(ampmSwitch.template + ampmSwitch.script)"
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
            <v-window v-model="ampmSwitch.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  ampmSwitch.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  ampmSwitch.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AMPMSwitch />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="colors.showCode = !colors.showCode"
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
        <v-sheet v-if="colors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="colors.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="colors.window = 1"
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
                  @click="copy(colors.template + colors.script)"
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
            <v-window v-model="colors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  colors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  colors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Colors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Disabled
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="disabled.showCode = !disabled.showCode"
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
        <v-sheet v-if="disabled.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="disabled.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="disabled.window = 1"
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
                  @click="copy(disabled.template + disabled.script)"
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
            <v-window v-model="disabled.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  disabled.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  disabled.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Disabled />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        In Dialogue and Menu
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="inDialogueAndMenu.showCode = !inDialogueAndMenu.showCode"
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
        <v-sheet v-if="inDialogueAndMenu.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="inDialogueAndMenu.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="inDialogueAndMenu.window = 1"
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
                    copy(inDialogueAndMenu.template + inDialogueAndMenu.script)
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
            <v-window v-model="inDialogueAndMenu.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  inDialogueAndMenu.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  inDialogueAndMenu.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <InDialogueAndMenu />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        With No Title
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="noTitle.showCode = !noTitle.showCode"
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
        <v-sheet v-if="noTitle.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="noTitle.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="noTitle.window = 1"
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
                  @click="copy(noTitle.template + noTitle.script)"
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
            <v-window v-model="noTitle.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  noTitle.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  noTitle.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NoTitle />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Pickers Elevation
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="pickersElevation.showCode = !pickersElevation.showCode"
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
        <v-sheet v-if="pickersElevation.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="pickersElevation.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="pickersElevation.window = 1"
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
                    copy(pickersElevation.template + pickersElevation.script)
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
            <v-window v-model="pickersElevation.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  pickersElevation.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  pickersElevation.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <PickersElevation />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        TimePicker - Range
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="range.showCode = !range.showCode"
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
        <v-sheet v-if="range.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="range.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="range.window = 1"
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
                  @click="copy(range.template + range.script)"
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
            <v-window v-model="range.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  range.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  range.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Range />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        TimePicker - Read Only
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="readOnly.showCode = !readOnly.showCode"
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
        <v-sheet v-if="readOnly.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="readOnly.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="readOnly.window = 1"
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
                  @click="copy(readOnly.template + readOnly.script)"
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
            <v-window v-model="readOnly.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  readOnly.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  readOnly.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ReadOnly />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        TimePicker - Scrollable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="scrollable.showCode = !scrollable.showCode"
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
        <v-sheet v-if="scrollable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="scrollable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="scrollable.window = 1"
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
                  @click="copy(scrollable.template + scrollable.script)"
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
            <v-window v-model="scrollable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  scrollable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  scrollable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Scrollable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Setting Picker Width
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                settingPickerWidth.showCode = !settingPickerWidth.showCode
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
        <v-sheet v-if="settingPickerWidth.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="settingPickerWidth.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="settingPickerWidth.window = 1"
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
                      settingPickerWidth.template + settingPickerWidth.script
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
            <v-window v-model="settingPickerWidth.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  settingPickerWidth.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  settingPickerWidth.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SettingPickerWidth />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Time Picker - With Seconds
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="withSeconds.showCode = !withSeconds.showCode"
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
        <v-sheet v-if="withSeconds.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="withSeconds.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="withSeconds.window = 1"
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
                  @click="copy(withSeconds.template + withSeconds.script)"
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
            <v-window v-model="withSeconds.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  withSeconds.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  withSeconds.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <WithSeconds />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import H24Format from "./24HFormat";
import AllowedTimes from "./AllowedTimes";
import AMPMSwitch from "./AMPMSwitchInTitle";
import Colors from "./Colors";
import Disabled from "./Disabled";
import InDialogueAndMenu from "./InDialogueAndMenu";
import NoTitle from "./NoTitle";
import PickersElevation from "./PickersElevation";
import Playground from "./Playground";
import Range from "./Range";
import ReadOnly from "./ReadOnly";
import Scrollable from "./Scrollable";
import SettingPickerWidth from "./SettingPickerWidth";
import Usage from "./Usage";
import WithSeconds from "./WithSeconds";

export default {
  components: {
    H24Format,
    AllowedTimes,
    AMPMSwitch,
    Colors,
    Disabled,
    InDialogueAndMenu,
    NoTitle,
    PickersElevation,
    Playground,
    Range,
    ReadOnly,
    Scrollable,
    SettingPickerWidth,
    Usage,
    WithSeconds
  },
  data() {
    return {
      h24Format: {
        template: `<template>
  <v-row justify="space-around">
    <v-col class="lg-offset8" md="12" lg="4">
      <v-time-picker v-model="e7" format="24hr"></v-time-picker>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
  export default {
    data () {
      return {
        e7: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      allowedTimes: {
        template: `<template>
  <v-row justify="space-around">
    <v-time-picker
      v-model="time"
      :allowed-hours="allowedHours"
      :allowed-minutes="allowedMinutes"
      class="mt-4"
      format="24hr"
      scrollable
      min="9:30"
      max="22:15"
    ></v-time-picker>
    <v-time-picker
      v-model="timeStep"
      :allowed-minutes="allowedStep"
      class="mt-4"
      format="24hr"
    ></v-time-picker>
  </v-row>
</template>
`,
        script: `<script>
  export default {
    data () {
      return {
        time: '11:15',
        timeStep: '10:10',
      }
    },
    methods: {
      allowedHours: v => v % 2,
      allowedMinutes: v => v >= 10 && v <= 50,
      allowedStep: m => m % 10 === 0,
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      ampmSwitch: {
        template: `<template>
  <v-row

    justify="space-around"
    align="center"
  >
    <v-time-picker
      v-model="picker"
      ampm-in-title
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      ampm-in-title
    ></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      colors: {
        template: `<template>
  <v-row justify="space-around">
    <v-time-picker v-model="e4" color="green lighten-1"></v-time-picker>
    <v-time-picker v-model="e4" color="green lighten-1" header-color="primary"></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        e4: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      disabled: {
        template: `<template>
  <v-row
    justify="space-around"
    align="center">
    <v-time-picker
      v-model="picker"
      disabled
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      disabled
    ></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      inDialogueAndMenu: {
        template: `<template>
  <v-row>
    <v-col cols="11" sm="5">
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picker in menu"
            prepend-icon="mdi-clock"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="11" sm="5">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picker in dialog"
            prepend-icon="mdi-clock"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker v-if="modal2" v-model="time" full-width>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(time)"
            >OK</v-btn
          >
        </v-time-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
  export default {
    data () {
      return {
        time: null,
        menu2: false,
        modal2: false,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      noTitle: {
        template: `<template>
  <v-row
    justify="space-around">
    <v-time-picker
      v-model="picker"
      no-title
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      no-title
    ></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      pickersElevation: {
        template: `<template>
  <v-row
    justify="space-around"
    align="center">
    <v-time-picker
      v-model="picker"
      flat
    ></v-time-picker>

    <v-time-picker
      v-model="picker"
      elevation="15"
    ></v-time-picker>
  </v-row>
</template>
`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      playground: {
        template: `<template>
  <v-row align="center">
    <v-row justify="space-around">
      <v-switch v-model="disabled" class="mx-2" label="Disabled"></v-switch>
      <v-switch v-model="readonly" class="mx-2" label="Readonly"></v-switch>
      <v-switch v-model="flat" class="mx-2" label="Flat"></v-switch>
      <v-switch v-model="landscape" class="mx-2" label="Landscape"></v-switch>
      <v-switch v-model="ampmInTitle" class="mx-2" label="AM/PM in title"></v-switch>
      <v-switch v-model="useSeconds" class="mx-2" label="Use seconds"></v-switch>
      <v-switch v-model="fullWidth" class="mx-2" label="Full-width"></v-switch>
      <v-switch v-model="noTitle" class="mx-2" label="No title"></v-switch>
      <v-switch v-model="scrollable" class="mx-2" label="Scrollable"></v-switch>
      <v-btn-toggle v-model="format">
        <v-btn text value="ampm">
          12h
        </v-btn>
        <v-btn text value="24hr">
          24h
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <v-time-picker
      v-model="picker"
      class="mt-2"
      :disabled="disabled"
      :readonly="readonly"
      :flat="flat"
      :landscape="landscape"
      :ampm-in-title="ampmInTitle"
      :use-seconds="useSeconds"
      :format="format"
      :full-width="fullWidth"
      :no-title="noTitle"
      :scrollable="scrollable"
    ></v-time-picker>
  </v-row>
</template>
`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
        disabled: false,
        flat: false,
        readonly: false,
        landscape: false,
        ampmInTitle: false,
        useSeconds: false,
        format: 'ampm',
        fullWidth: false,
        noTitle: false,
        scrollable: false,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      range: {
        template: `<template>
  <div>
    <h1>Plan your event:</h1>
    <v-row justify="space-around" align="center">
      <v-col style="width: 290px; flex: 0 1 auto;">
        <h2>Start:</h2>
        <v-time-picker v-model="start" :max="end"></v-time-picker>
      </v-col>
      <v-col style="width: 290px; flex: 0 1 auto;">
        <h2>End:</h2>
        <v-time-picker v-model="end" :min="start"></v-time-picker>
      </v-col>
    </v-row>
  </div>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        start: null,
        end: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      readOnly: {
        template: `<template>
  <v-row
    justify="space-around"
    align="center">
    <v-time-picker
      v-model="picker"
      readonly
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      readonly
    ></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      scrollable: {
        template: `<template>
  <v-row justify="space-around" align="center">
    <v-time-picker v-model="picker" scrollable></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      settingPickerWidth: {
        template: `<template>
  <v-row align="center">
    <v-time-picker
      v-model="time"
      type="month"
      width="290"
      class="ml-4"
    ></v-time-picker>
    <v-col class="pa-0 mx-4 mt-4 mt-sm-0">
      <v-time-picker
        v-model="time"
        :landscape="$vuetify.breakpoint.mdAndUp"
        full-width
        type="month"
      ></v-time-picker>
    </v-col>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data: () => ({
      time: '11:15',
    }),
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-row justify="center">
    <v-time-picker v-model="picker"></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
        window: 0,
        showCode: false
      },
      withSeconds: {
        template: `<template>
  <v-row
    justify="space-around"
    align="center">
    <v-time-picker
      v-model="picker"
      use-seconds
    ></v-time-picker>
    <v-time-picker
      v-model="picker"
      :landscape="$vuetify.breakpoint.smAndUp"
      use-seconds
    ></v-time-picker>
  </v-row>
</template>`,
        script: `<script>
  export default {
    data () {
      return {
        picker: null,
      }
    },
  }
</scrpt>`,
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
