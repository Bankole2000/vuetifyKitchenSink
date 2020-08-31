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
        Basic Usage - Text Areas
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
        Text Areas - Icons
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
        Text Areas - Rows
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="rows.showCode = !rows.showCode"
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
        <v-sheet v-if="rows.showCode" tile>
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
                  @click="copy(rows.template)"
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
                  rows.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Rows />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Background Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="backgroundColor.showCode = !backgroundColor.showCode"
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
        <v-sheet v-if="backgroundColor.showCode" tile>
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
                  @click="copy(backgroundColor.template)"
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
                  backgroundColor.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <BackgroundColor />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Areas - Clearable
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
                  @click="copy(clearable.template)"
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
                  clearable.template
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
        Browser Autocomplete
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                browserAutocomplete.showCode = !browserAutocomplete.showCode
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
        <v-sheet v-if="browserAutocomplete.showCode" tile>
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
                  @click="copy(browserAutocomplete.template)"
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
                  browserAutocomplete.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <BrowserAutocomplete />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Area - Auto Grow
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="autoGrow.showCode = !autoGrow.showCode"
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
        <v-sheet v-if="autoGrow.showCode" tile>
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
                  @click="copy(autoGrow.template)"
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
                  autoGrow.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AutoGrow />
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
        Beautiful Forms
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="beautifulForms.showCode = !beautifulForms.showCode"
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
        <v-sheet v-if="beautifulForms.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="beautifulForms.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="beautifulForms.window = 1"
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
                  @click="copy(beautifulForms.template + beautifulForms.script)"
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
            <v-window v-model="beautifulForms.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  beautifulForms.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  beautifulForms.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <BeautifulForms />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Areas - Character Counter
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="counter.showCode = !counter.showCode"
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
        <v-sheet v-if="counter.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="counter.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="counter.window = 1"
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
                  @click="copy(counter.template + counter.script)"
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
            <v-window v-model="counter.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  counter.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  counter.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Counter />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Areas - No Resize
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="noResize.showCode = !noResize.showCode"
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
        <v-sheet v-if="noResize.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="noResize.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="noResize.window = 1"
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
                  @click="copy(noResize.template + noResize.script)"
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
            <v-window v-model="noResize.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  noResize.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  noResize.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NoResize />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AutoGrow from "./AutoGrow";
import BackgroundColor from "./BackgroundColor";
import BeautifulForms from "./BeautifulForms";
import BrowserAutocomplete from "./BrowserAutocomplete";
import Clearable from "./Clearable";
import Counter from "./Counter";
import Icons from "./Icons";
import NoResize from "./NoResize";
import Playground from "./Playground";
import Rows from "./Rows";
import Usage from "./Usage";

export default {
  components: {
    AutoGrow,
    BackgroundColor,
    BeautifulForms,
    BrowserAutocomplete,
    Clearable,
    Counter,
    Icons,
    NoResize,
    Playground,
    Rows,
    Usage
  },
  data() {
    return {
      autoGrow: {
        template: `<template>
  <v-container fluid>
    <v-textarea name="input-7-1" filled label="Label" auto-grow value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
  </v-container>
</template>`,
        showCode: false
      },
      backgroundColor: {
        template: `<template>
  <v-container>
    <v-textarea background-color="light-blue" color="black" label="Label"></v-textarea>

    <v-textarea background-color="grey lighten-2" color="cyan" label="Label"></v-textarea>

    <v-textarea background-color="amber lighten-4" color="orange orange-darken-4" label="Label"></v-textarea>
  </v-container>
</template>
`,
        showCode: false
      },
      beautifulForms: {
        template: `<template>
  <v-card class="mx-auto" style="max-width: 500px;">
    <v-system-bar color="deep-purple darken-4" dark>
      <v-spacer></v-spacer>
      <v-icon small>mdi-square</v-icon>
      <v-icon class="ml-1" small>mdi-circle</v-icon>
      <v-icon class="ml-1" small>mdi-triangle</v-icon>
    </v-system-bar>
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">Sign up</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field v-model="password" :rules="[rules.password, rules.length(6)]" filled color="deep-purple" counter="6" label="Password" style="min-height: 96px" type="password"></v-text-field>
      <v-text-field v-model="phone" filled color="deep-purple" label="Phone number"></v-text-field>
      <v-text-field v-model="email" :rules="[rules.email]" filled color="deep-purple" label="Email address" type="email"></v-text-field>
      <v-textarea v-model="bio" auto-grow filled color="deep-purple" label="Bio" rows="1"></v-textarea>
      <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
        <template v-slot:label>
          I agree to the&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
          &nbsp;and&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text @click="$refs.form.reset()">
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="!form" :loading="isLoading" class="white--text" color="deep-purple accent-4" depressed>Submit</v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog" absolute max-width="400" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-3">Legal</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="(agreement = false), (dialog = false)">
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="white--text" color="deep-purple accent-4" @click="(agreement = true), (dialog = false)">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    agreement: false,
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: (len) => (v) => (v || '').length >= len || \`Invalid character length, required \${len}\`,
      password: (v) => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*(_|[^\\w])).+$/) || 'Password must contain an upper case letter, a numeric character, and a special character',
      required: (v) => !!v || 'This field is required'
    }
  })
};
</scrpt>`,
        window: 0,
        showCode: false
      },
      browserAutocomplete: {
        template: `<template>
  <v-container fluid>
    <v-textarea autocomplete="email" label="Email"></v-textarea>
  </v-container>
</template>`,
        showCode: false
      },
      clearable: {
        template: `<template>
  <v-container fluid>
    <v-textarea clearable clear-icon="cancel" label="Text" value="This is clearable text."></v-textarea>
  </v-container>
</template>`,
        showCode: false
      },
      counter: {
        template: `<template>
  <v-container fluid>
    <v-textarea counter label="Text" :rules="rules" :value="value"></v-textarea>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    rules: [(v) => v.length <= 25 || 'Max 25 characters'],
    value: 'Hello!'
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      icons: {
        template: `<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-textarea class="mx-2" label="prepend-icon" rows="1" prepend-icon="mdi-comment"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea append-icon="mdi-comment" class="mx-2" label="append-icon" rows="1"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea prepend-inner-icon="mdi-comment" class="mx-2" label="prepend-inner-icon" rows="1"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea append-outer-icon="mdi-comment" class="mx-2" label="append-outer-icon" rows="1"></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      noResize: {
        template: `<template>
  <v-container fluid>
    <v-textarea label="Text" no-resize rows="1" :value="value"></v-textarea>
  </v-container>
</template>`,
        script: `<script>
export default {
  data: () => ({
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
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
      <v-col sm="6" cols="12">
        <v-text-field v-model="label" label="Label"></v-text-field>
        <v-text-field v-model="hint" label="Hint"></v-text-field>
        <v-text-field v-model="placeholder" label="Placeholder"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field v-model="rowHeight" :disabled="!autoGrow" class="mx-4" label="Row height - px" max="500" min="1" step="1" style="width: 125px" type="number"></v-text-field>
        <v-text-field v-model="rows" class="mx-4" label="Rows" max="50" min="1" step="1" style="width: 125px" type="number"></v-text-field>
      </v-col>

      <v-col cols="12"></v-col>

      <v-col cols="12" md="6">
        <v-switch v-model="autoGrow" class="ma-1" label="Auto-grow"></v-switch>
        <v-switch v-model="clearable" class="ma-1" label="Clearable"></v-switch>

        <v-switch v-model="filled" class="ma-1" label="Filled"></v-switch>
        <v-switch v-model="flat" class="ma-1" label="Flat (requires Solo)" :disabled="!solo"></v-switch>
        <v-switch v-model="loading" class="ma-1" label="Loading"></v-switch>
        <v-switch v-model="outlined" class="ma-1" label="Outlined"></v-switch>
        <v-switch v-model="persistentHint" class="ma-1" label="Persistent Hint"></v-switch>
        <v-switch v-model="rounded" class="ma-1" label="Rounded (requires Filled or Outlined)"></v-switch>
        <v-switch v-model="shaped" class="ma-1" label="Shaped (requires Filled or Outlined)"></v-switch>
        <v-switch v-model="singleLine" class="ma-1" label="Single-line"></v-switch>
        <v-switch v-model="solo" class="ma-1" label="Solo"></v-switch>
      </v-col>

      <v-col cols="12" md="6">
        <v-sheet elevation="12" class="pa-12">
          <v-textarea
            v-model="model"
            :auto-grow="autoGrow"
            :clearable="clearable"
            :counter="counter ? counter : false"
            :filled="filled"
            :flat="flat"
            :hint="hint"
            :label="label"
            :loading="loading"
            :no-resize="noResize"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :placeholder="placeholder"
            :rounded="rounded"
            :row-height="rowHeight"
            :rows="rows"
            :shaped="shaped"
            :single-line="singleLine"
            :solo="solo"
          ></v-textarea>
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
    autoGrow: false,
    autofocus: true,
    clearable: false,
    counter: 0,
    filled: false,
    flat: false,
    hint: '',
    label: '',
    loading: false,
    model: "I'm a textarea.",
    noResize: false,
    outlined: false,
    persistentHint: false,
    placeholder: '',
    rounded: false,
    rowHeight: 24,
    rows: 1,
    shaped: false,
    singleLine: false,
    solo: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      rows: {
        template: `<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-textarea label="One row" auto-grow outlined rows="1" row-height="15"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea filled auto-grow label="Two rows" rows="2" row-height="20"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea label="Three rows" auto-grow outlined rows="3" row-height="25" shaped></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-textarea filled auto-grow label="Four rows" rows="4" row-height="30" shaped></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          name="input-7-1"
          label="Default style"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          hint="Hint text"
        ></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea filled name="input-7-4" label="Filled textarea" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea outlined name="input-7-4" label="Outlined textarea" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
      </v-col>
    </v-row>
  </v-container>
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
