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
        Basic Usage - Linear Progress
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

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Striped
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="striped.showCode = !striped.showCode"
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
        <v-sheet v-if="striped.showCode" tile>
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
                  @click="copy(striped.template)"
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
                  striped.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Striped />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Stream
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="stream.showCode = !stream.showCode"
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
        <v-sheet v-if="stream.showCode" tile>
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
                  @click="copy(stream.template)"
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
                  stream.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Stream />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Rounded
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="rounded.showCode = !rounded.showCode"
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
        <v-sheet v-if="rounded.showCode" tile>
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
                  @click="copy(rounded.template)"
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
                  rounded.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Rounded />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Reversed
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="reversed.showCode = !reversed.showCode"
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
        <v-sheet v-if="reversed.showCode" tile>
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
                  @click="copy(reversed.template)"
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
                  reversed.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Reversed />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Indeterminate
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="indeterminate.showCode = !indeterminate.showCode"
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
        <v-sheet v-if="indeterminate.showCode" tile>
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
                  @click="copy(indeterminate.template)"
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
                  indeterminate.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Indeterminate />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - File Loader
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="fileLoader.showCode = !fileLoader.showCode"
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
        <v-sheet v-if="fileLoader.showCode" tile>
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
                  @click="copy(fileLoader.template)"
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
                  fileLoader.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <FileLoader />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Custom Colors
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
                  @click="copy(customColors.template)"
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
                  customColors.template
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
        Linear Progress - Toolbar Loader
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="toolbarLoader.showCode = !toolbarLoader.showCode"
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
        <v-sheet v-if="toolbarLoader.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="toolbarLoader.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="toolbarLoader.window = 1"
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
                  @click="copy(toolbarLoader.template + toolbarLoader.script)"
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
            <v-window v-model="toolbarLoader.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  toolbarLoader.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  toolbarLoader.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ToolbarLoader />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Slots
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="slots.showCode = !slots.showCode"
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
        <v-sheet v-if="slots.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="slots.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="slots.window = 1"
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
                  @click="copy(slots.template + slots.script)"
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
            <v-window v-model="slots.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  slots.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  slots.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Slots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Query Indeterminate
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                queryIndeterminate.showCode = !queryIndeterminate.showCode
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
        <v-sheet v-if="queryIndeterminate.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="queryIndeterminate.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="queryIndeterminate.window = 1"
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
                      queryIndeterminate.template + queryIndeterminate.script
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
            <v-window v-model="queryIndeterminate.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  queryIndeterminate.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  queryIndeterminate.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <QueryIndeterminate />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Determinate
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="determinate.showCode = !determinate.showCode"
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
        <v-sheet v-if="determinate.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="determinate.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="determinate.window = 1"
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
                  @click="copy(determinate.template + determinate.script)"
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
            <v-window v-model="determinate.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  determinate.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  determinate.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Determinate />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Linear Progress - Buffer
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="buffer.showCode = !buffer.showCode"
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
        <v-sheet v-if="buffer.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="buffer.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="buffer.window = 1"
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
                  @click="copy(buffer.template + buffer.script)"
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
            <v-window v-model="buffer.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  buffer.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  buffer.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Buffer />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Buffer from './Buffer';
import CustomColors from './CustomColors';
import Determinate from './Determinate';
import FileLoader from './FileLoader';
import Indeterminate from './Indeterminate';
import Playground from './Playground';
import QueryIndeterminate from './QueryIndeterminateAndDeterminate';
import Reversed from './Reversed';
import Rounded from './Rounded';
import Slots from './Slots';
import Stream from './Stream';
import Striped from './Striped';
import ToolbarLoader from './ToolbarLoader';
import Usage from './Usage';

export default {
  components: {
    Buffer,
    CustomColors,
    Determinate,
    FileLoader,
    Indeterminate,
    Playground,
    QueryIndeterminate,
    Reversed,
    Rounded,
    Slots,
    Stream,
    Striped,
    ToolbarLoader,
    Usage
  },
  data() {
    return {
      buffer: {
        template: `<template>
  <div>
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="purple"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="red lighten-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="black"
    ></v-progress-linear>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      value: 10,
      bufferValue: 20,
      interval: 0
    };
  },

  watch: {
    value(val) {
      if (val < 100) return;

      this.value = 0;
      this.bufferValue = 10;
      this.startBuffer();
    }
  },

  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.value += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 2000);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      customColors: {
        template: `<template>
  <div>
    <v-progress-linear
      background-color="pink lighten-3"
      color="pink lighten-1"
      value="15"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      background-color="blue-grey"
      color="lime"
      value="30"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      background-color="success"
      color="error"
      value="45"
    ></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      determinate: {
        template: `<template>
  <div>
    <v-progress-linear
      v-model="valueDeterminate"
      color="deep-purple accent-4"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="valueDeterminate"
      color="pink"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="valueDeterminate"
      color="indigo darken-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      v-model="valueDeterminate"
      color="amber"
    ></v-progress-linear>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      valueDeterminate: 50
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      fileLoader: {
        template: `<template>
  <v-card class="mx-auto" max-width="344">
    <v-toolbar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Files</v-toolbar-title>

      <v-btn absolute bottom color="white" fab left light>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container style="height: 400px;">
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          Getting your files
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
`,
        showCode: false
      },
      indeterminate: {
        template: `<template>
  <div>
    <v-progress-linear
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="green"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="teal"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="cyan"></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      playground: {
        template: `<template>
  <v-row justify="center" align="center">
    <v-container>
      <v-progress-linear
        :active="active"
        :background-opacity="opacity"
        :bottom="bottom"
        :buffer-value="buffer"
        :height="height"
        :indeterminate="indeterminate"
        :query="query"
        :rounded="rounded"
        :stream="stream"
        :striped="striped"
        :top="top"
        :value="value"
        color="light-blue"
      ></v-progress-linear>
    </v-container>

    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="buffer"
          class="mx-4"
          label="Buffer"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="height"
          class="mx-4"
          label="Height - px"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="opacity"
          class="mx-4"
          label="Opacity"
          max="1"
          min="0"
          step=".01"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-text-field
          v-model="value"
          class="mx-4"
          label="Value - %"
          max="100"
          min="1"
          step="1"
          style="width: 125px"
          type="number"
          @keydown="false"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="active"
          label="Toggle active"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="bottom"
          label="Toggle bottom"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="indeterminate"
          label="Toggle indeterminate"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="query" label="Toggle query" class="mx-4"></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="rounded"
          label="Toggle rounded"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="stream"
          label="Toggle stream"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch
          v-model="striped"
          label="Toggle striped"
          class="mx-4"
        ></v-switch>
      </v-col>
      <v-col cols="6" md="3">
        <v-switch v-model="top" label="Toggle top" class="mx-4"></v-switch>
      </v-col>
    </v-row>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    absolute: false,
    active: true,
    opacity: 0.3,
    bottom: false,
    buffer: 100,
    fixed: false,
    height: 4,
    indeterminate: false,
    query: false,
    rounded: false,
    stream: false,
    striped: false,
    top: false,
    value: 25
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      queryIndeterminate: {
        template: `<template>
  <div style="min-height: 4px;">
    <v-progress-linear
      v-model="value"
      :active="show"
      :indeterminate="query"
      :query="true"
    ></v-progress-linear>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      value: 0,
      query: false,
      show: true,
      interval: 0
    };
  },

  mounted() {
    this.queryAndIndeterminate();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    queryAndIndeterminate() {
      this.query = true;
      this.show = true;
      this.value = 0;

      setTimeout(() => {
        this.query = false;

        this.interval = setInterval(() => {
          if (this.value === 100) {
            clearInterval(this.interval);
            this.show = false;
            return setTimeout(this.queryAndIndeterminate, 2000);
          }
          this.value += 25;
        }, 1000);
      }, 2500);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      reversed: {
        template: `<template>
  <div>
    <v-progress-linear color="pink" value="15" reverse></v-progress-linear>

    <br />

    <v-progress-linear color="lime" indeterminate reverse></v-progress-linear>

    <br />

    <v-progress-linear
      buffer-value="55"
      color="success"
      reverse
      stream
      value="30"
    ></v-progress-linear>

    <br />

    <v-subheader
      >In specific cases you may want progress to display in left-to-right mode
      regardless of the application direction (LTR or RTL):</v-subheader
    >

    <v-progress-linear :reverse="$vuetify.rtl" value="15"></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      rounded: {
        template: `<template>
  <div>
    <v-progress-linear
      color="red darken-2"
      rounded
      value="100"
    ></v-progress-linear>
    <br />
    <v-progress-linear color="indigo" rounded value="100"></v-progress-linear>
    <br />
    <v-progress-linear color="teal" rounded value="100"></v-progress-linear>
    <br />
    <v-progress-linear
      color="cyan darken-2"
      rounded
      value="100"
    ></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      slots: {
        template: `<template>
  <div>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25"
    ></v-progress-linear>

    <br />

    <v-progress-linear v-model="skill" color="blue-grey" height="25">
      <template v-slot="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <v-progress-linear v-model="knowledge" height="25">
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      stream: {
        template: `<template>
  <div>
    <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear>
    <br />
    <v-progress-linear
      color="teal"
      buffer-value="0"
      value="20"
      stream
    ></v-progress-linear>
    <br />
    <v-progress-linear
      buffer-value="50"
      stream
      color="cyan"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      buffer-value="60"
      value="40"
      stream
      color="orange"
    ></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      striped: {
        template: `<template>
  <div>
    <v-progress-linear
      color="light-blue"
      height="10"
      value="10"
      striped
    ></v-progress-linear>
    <br />
    <v-progress-linear
      color="light-green darken-4"
      height="10"
      value="20"
      striped
    ></v-progress-linear>
    <br />
    <v-progress-linear
      height="10"
      value="45"
      striped
      color="lime"
    ></v-progress-linear>
    <br />
    <v-progress-linear
      value="60"
      height="10"
      striped
      color="deep-orange"
    ></v-progress-linear>
  </div>
</template>
`,
        showCode: false
      },
      toolbarLoader: {
        template: `<template>
  <v-card class="mx-auto mt-6" width="344">
    <v-system-bar>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-toolbar>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>My Recipes</v-toolbar-title>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
      ></v-progress-linear>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container style="height: 282px;">
      <v-row class="fill-height" align="center" justify="center">
        <v-scale-transition>
          <div v-if="!loading" class="text-center">
            <v-btn color="primary" @click="loading = true">Start loading</v-btn>
          </div>
        </v-scale-transition>
      </v-row>
    </v-container>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    loading: false
  }),

  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 3000);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-progress-linear value="15"></v-progress-linear>
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
