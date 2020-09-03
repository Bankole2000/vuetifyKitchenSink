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
        Basic Usage - Grids
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
        Grids - Variable Content Width
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                variableContentWidth.showCode = !variableContentWidth.showCode
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
        <v-sheet v-if="variableContentWidth.showCode" tile>
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
                  @click="copy(variableContentWidth.template)"
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
                  variableContentWidth.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <VariableContentWidth />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Unique Layouts
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="uniqueLayouts.showCode = !uniqueLayouts.showCode"
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
        <v-sheet v-if="uniqueLayouts.showCode" tile>
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
                  @click="copy(uniqueLayouts.template)"
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
                  uniqueLayouts.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <UniqueLayouts />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Spacers
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="spacers.showCode = !spacers.showCode"
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
        <v-sheet v-if="spacers.showCode" tile>
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
                  @click="copy(spacers.template)"
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
                  spacers.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Spacers />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Order Last First
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="orderLastFirst.showCode = !orderLastFirst.showCode"
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
        <v-sheet v-if="orderLastFirst.showCode" tile>
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
                  @click="copy(orderLastFirst.template)"
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
                  orderLastFirst.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OrderLastFirst />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Order Classes
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="orderClasses.showCode = !orderClasses.showCode"
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
        <v-sheet v-if="orderClasses.showCode" tile>
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
                  @click="copy(orderClasses.template)"
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
                  orderClasses.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OrderClasses />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - One Column Width
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="oneColumnWidth.showCode = !oneColumnWidth.showCode"
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
        <v-sheet v-if="oneColumnWidth.showCode" tile>
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
                  @click="copy(oneColumnWidth.template)"
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
                  oneColumnWidth.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OneColumnWidth />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Offset Breakpoint
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="offsetBreakpoint.showCode = !offsetBreakpoint.showCode"
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
        <v-sheet v-if="offsetBreakpoint.showCode" tile>
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
                  @click="copy(offsetBreakpoint.template)"
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
                  offsetBreakpoint.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OffsetBreakpoint />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Offset
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="offset.showCode = !offset.showCode"
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
        <v-sheet v-if="offset.showCode" tile>
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
                  @click="copy(offset.template)"
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
                  offset.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Offset />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - No Gutter
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="noGutter.showCode = !noGutter.showCode"
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
        <v-sheet v-if="noGutter.showCode" tile>
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
                  @click="copy(noGutter.template)"
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
                  noGutter.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NoGutter />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Nested Grid
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="nestedGrid.showCode = !nestedGrid.showCode"
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
        <v-sheet v-if="nestedGrid.showCode" tile>
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
                  @click="copy(nestedGrid.template)"
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
                  nestedGrid.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NestedGrid />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Margin Utilities
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="marginUtilities.showCode = !marginUtilities.showCode"
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
        <v-sheet v-if="marginUtilities.showCode" tile>
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
                  @click="copy(marginUtilities.template)"
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
                  marginUtilities.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MarginUtilities />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Grow And Shrink
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="growAndShrink.showCode = !growAndShrink.showCode"
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
        <v-sheet v-if="growAndShrink.showCode" tile>
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
                  @click="copy(growAndShrink.template)"
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
                  growAndShrink.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <GrowAndShrink />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Equal Width Columns
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="equalWidthColumns.showCode = !equalWidthColumns.showCode"
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
        <v-sheet v-if="equalWidthColumns.showCode" tile>
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
                  @click="copy(equalWidthColumns.template)"
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
                  equalWidthColumns.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <EqualWidthColumns />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Column Wrapping
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="columnWrapping.showCode = !columnWrapping.showCode"
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
        <v-sheet v-if="columnWrapping.showCode" tile>
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
                  @click="copy(columnWrapping.template)"
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
                  columnWrapping.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ColumnWrapping />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Auto Sizing Columns
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="autoSizingColumns.showCode = !autoSizingColumns.showCode"
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
        <v-sheet v-if="autoSizingColumns.showCode" tile>
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
                  @click="copy(autoSizingColumns.template)"
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
                  autoSizingColumns.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AutoSizingColumns />
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
        Grids - Vertical Alignment
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="verticalAlignment.showCode = !verticalAlignment.showCode"
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
        <v-sheet v-if="verticalAlignment.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="verticalAlignment.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="verticalAlignment.window = 1"
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
                    copy(verticalAlignment.template + verticalAlignment.script)
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
            <v-window v-model="verticalAlignment.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  verticalAlignment.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  verticalAlignment.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <VerticalAlignment />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Row And Column Breakpoints
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                rowAndColumnBreakpoints.showCode = !rowAndColumnBreakpoints.showCode
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
        <v-sheet v-if="rowAndColumnBreakpoints.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="rowAndColumnBreakpoints.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="rowAndColumnBreakpoints.window = 1"
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
                      rowAndColumnBreakpoints.template +
                        rowAndColumnBreakpoints.script
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
            <v-window v-model="rowAndColumnBreakpoints.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  rowAndColumnBreakpoints.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  rowAndColumnBreakpoints.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RowAndColumnBreakpoints />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Grids - Horizontal Alignment
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                horizontalAlignment.showCode = !horizontalAlignment.showCode
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
        <v-sheet v-if="horizontalAlignment.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="horizontalAlignment.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="horizontalAlignment.window = 1"
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
                      horizontalAlignment.template + horizontalAlignment.script
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
            <v-window v-model="horizontalAlignment.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  horizontalAlignment.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  horizontalAlignment.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <HorizontalAlignment />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AutoSizingColumns from './AutoSizingColumns';
import ColumnWrapping from './ColumnWrapping';
import EqualWidthColumns from './EqualWidthColumns';
import GrowAndShrink from './GrowAndShrink';
import HorizontalAlignment from './HorizontalAlignment';
import MarginUtilities from './MarginUtilities';
import NestedGrid from './NestedGrid';
import NoGutter from './NoGutter';
import Offset from './Offset';
import OffsetBreakpoint from './OffsetBreakpoint';
import OneColumnWidth from './OneColumnWidth';
import OrderClasses from './OrderClasses';
import OrderLastFirst from './OrderLastFirst';
import Playground from './Playground';
import RowAndColumnBreakpoints from './RowAndColumnBreakpoints';
import Spacers from './Spacers';
import UniqueLayouts from './UniqueLayouts';
import Usage from './Usage';
import VariableContentWidth from './VariableContentWidth';
import VerticalAlignment from './VerticalAlignment';

export default {
  components: {
    AutoSizingColumns,
    ColumnWrapping,
    EqualWidthColumns,
    GrowAndShrink,
    HorizontalAlignment,
    MarginUtilities,
    NestedGrid,
    NoGutter,
    Offset,
    OffsetBreakpoint,
    OneColumnWidth,
    OrderClasses,
    OrderLastFirst,
    Playground,
    RowAndColumnBreakpoints,
    Spacers,
    UniqueLayouts,
    Usage,
    VariableContentWidth,
    VerticalAlignment
  },
  data() {
    return {
      autoSizingColumns: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row v-for="n in 2" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
      <v-col v-for="k in n + 1" :key="k">
        <v-card class="pa-2" outlined tile> {{ k }} of {{ n + 1 }} </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      columnWrapping: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="9">
        <v-card class="pa-2" outlined tile>
          .col-9
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          .col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets
          wrapped onto a new line as one contiguous unit.
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" outlined tile>
          .col-6<br />Subsequent columns continue along the new line.
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      equalWidthColumns: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card class="pa-2" outlined tile>
            Column
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="\`width-\${n}\`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      growAndShrink: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col v-for="n in 4" :key="n">
        <v-card class="pa-2" tile outlined>
          col
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 8 : 4">
        <v-card class="pa-2" tile outlined> col-{{ n === 1 ? 8 : 4 }} </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      horizontalAlignment: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row v-for="j in justify" :key="j" :justify="j">
      <v-col v-for="k in 2" :key="k" md="4">
        <v-card class="pa-2" outlined tile>
          One of two columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    justify: ["start", "center", "end", "space-around", "space-between"]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      marginUtilities: {
        template: `<template>
  <div class="ma-5 pa-5">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col md="4">
          <v-card class="pa-2" outlined tile>
            .col-md-4
          </v-card>
        </v-col>
        <v-col md="4" class="ml-auto">
          <v-card class="pa-2" outlined tile>
            .col-md-4 .ml-auto
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3" class="ml-md-auto">
          <v-card class="pa-2" outlined tile>
            .col-md-3 .ml-md-auto
          </v-card>
        </v-col>
        <v-col md="3" class="ml-md-auto">
          <v-card class="pa-2" outlined tile>
            .col-md-3 .ml-md-auto
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <v-card class="pa-2" outlined tile>
            .col-auto .mr-auto
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="pa-2" outlined tile>
            .col-auto
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
`,
        showCode: false
      },
      nestedGrid: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col sm="9">
        <v-card class="pa-2" outlined tile>
          Level 1: .col-sm-9
        </v-card>
        <v-row no-gutters>
          <v-col cols="8" sm="6">
            <v-card
              class="pa-2"
              outlined
              style="background-color: lightgrey;"
              tile
            >
              Level 2: .col-8 .col-sm-6
            </v-card>
          </v-col>
          <v-col cols="4" sm="6">
            <v-card
              class="pa-2"
              outlined
              style="background-color: lightgrey;"
              tile
            >
              Level 3: .col-4 .col-sm-6
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      noGutter: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          .col-12 .col-sm-6 .col-md-8
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      offset: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col md="4">
        <v-card class="pa-2" outlined tile>
          .col-md-4
        </v-card>
      </v-col>
      <v-col md="4" offset-md="4">
        <v-card class="pa-2" outlined tile>
          .col-md-4 .offset-md-4
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-6" no-gutters>
      <v-col md="3" offset-md="3">
        <v-card class="pa-2" outlined tile>
          .col-md-3 .offset-md-3
        </v-card>
      </v-col>
      <v-col md="3" offset-md="3">
        <v-card class="pa-2" outlined tile>
          .col-md-3 .offset-md-3
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col md="6" offset-md="3">
        <v-card class="pa-2" outlined tile>
          .col-md-6 .offset-md-3
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      offsetBreakpoint: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <v-card class="pa-2" outlined tile>
          .col-sm-5 .col-md-6
        </v-card>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <v-card class="pa-2" outlined tile>
          .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="6" md="5" lg="6">
        <v-card class="pa-2" outlined tile>
          .col-sm-6 .col-md-5 .col-lg-6
        </v-card>
      </v-col>
      <v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
        <v-card class="pa-2" outlined tile>
          .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      oneColumnWidth: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col v-for="n in 3" :key="n" :cols="n === 2 ? 6 : undefined">
        <v-card class="pa-2" outlined tile>
          {{ n }} of 3 {{ n === 2 ? "(wider)" : "" }}
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" :cols="n === 2 ? 5 : undefined">
        <v-card class="pa-2" outlined tile>
          {{ n }} of 3 {{ n === 2 ? "(wider)" : "" }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      orderClasses: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2" outlined tile>
          First, but unordered
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card class="pa-2" outlined tile>
          Second, but last
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card class="pa-2" outlined tile>
          Third, but first
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      orderLastFirst: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col order="last">
        <v-card class="pa-2" outlined tile>
          First, but last
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile>
          Second, but unordered
        </v-card>
      </v-col>
      <v-col order="first">
        <v-card class="pa-2" outlined tile>
          Third, but first
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      playground: {
        template: `<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>
            Column
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" md="2">
            <v-select
              v-model="alignment"
              :items="alignmentsAvailable"
              label="Align"
            ></v-select>
          </v-col>

          <v-col cols="6" md="2">
            <v-select
              v-model="justify"
              :items="justifyAvailable"
              label="Justify"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center"
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      rowAndColumnBreakpoints: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col
        v-for="n in 2"
        :key="n"
        :lg="cols[n - 1]"
        :md="6"
        :sm="cols[n - 1]"
      >
        <v-card class="pa-2" outlined tile> col-{{ cols[n - 1] }} </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="sm">
        <v-card class="pa-2" outlined tile>
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  computed: {
    cols() {
      const { lg, sm } = this.$vuetify.breakpoint;
      return lg ? [3, 9] : sm ? [9, 3] : [6, 6];
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      spacers: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col>
        <v-card class="pa-2" outlined tile>
          .col
        </v-card>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <v-card class="pa-2" outlined tile>
          .col
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" lg="3">
        <v-card class="pa-2" outlined tile>
          .col-auto
        </v-card>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <v-card class="pa-2" outlined tile>
          .col
        </v-card>
      </v-col>

      <v-spacer></v-spacer>

      <v-col md="5">
        <v-card class="pa-2" cols="auto" outlined tile>
          .col-md-5
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      uniqueLayouts: {
        template: `<template>
  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile>
          .col-12 .col-md-8
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="6" md="4">
        <v-card class="pa-2" outlined tile>
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <v-row>
      <v-col v-for="n in 2" :key="n" cols="6">
        <v-card class="pa-2" outlined tile>
          .col-6
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      variableContentWidth: {
        template: `<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          1 of 3
        </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile>
          Variable width content
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          3 of 3
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-2" outlined tile>
          1 of 3
        </v-card>
      </v-col>
      <v-col md="auto">
        <v-card class="pa-2" outlined tile>
          Variable width content
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card class="pa-2" outlined tile>
          3 of 3
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        showCode: false
      },
      verticalAlignment: {
        template: `<template>
  <div>
    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row :align="align" no-gutters style="height: 150px;">
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row no-gutters style="height: 150px;">
        <v-col v-for="align in alignments" :key="align" :align-self="align">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"]
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
