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
        Chips - Colored
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="colored.showCode = !colored.showCode"
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
        <v-sheet v-if="colored.showCode" tile>
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
                  @click="copy(colored.template)"
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
                  colored.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Colored />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Draggable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="draggable.showCode = !draggable.showCode"
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
        <v-sheet v-if="draggable.showCode" tile>
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
                  @click="copy(draggable.template)"
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
                  draggable.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Draggable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Labels
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="label.showCode = !label.showCode"
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
        <v-sheet v-if="label.showCode" tile>
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
                  @click="copy(label.template)"
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
                  label.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Label />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - No Ripples
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="noRipple.showCode = !noRipple.showCode"
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
        <v-sheet v-if="noRipple.showCode" tile>
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
                  @click="copy(noRipple.template)"
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
                  noRipple.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NoRipple />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Outlined
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="outlined.showCode = !outlined.showCode"
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
        <v-sheet v-if="outlined.showCode" tile>
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
                  @click="copy(outlined.template)"
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
                  outlined.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Outlined />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Sizes
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="sizes.showCode = !sizes.showCode"
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
        <v-sheet v-if="sizes.showCode" tile>
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
                  @click="copy(sizes.template)"
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
                  sizes.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Sizes />
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
        Chips - Action Chips
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="actionChips.showCode = !actionChips.showCode"
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
        <v-sheet v-if="actionChips.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="actionChips.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="actionChips.window = 1"
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
                  @click="copy(actionChips.template + actionChips.script)"
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
            <v-window v-model="actionChips.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  actionChips.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  actionChips.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ActionChips />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Additional Filtering
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                additionalFiltering.showCode = !additionalFiltering.showCode
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
        <v-sheet v-if="additionalFiltering.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="additionalFiltering.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="additionalFiltering.window = 1"
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
                      additionalFiltering.template + additionalFiltering.script
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
            <v-window v-model="additionalFiltering.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  additionalFiltering.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  additionalFiltering.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AdditionalFiltering />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Closable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="closable.showCode = !closable.showCode"
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
        <v-sheet v-if="closable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="closable.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="closable.window = 1"
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
                  @click="copy(closable.template + closable.script)"
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
            <v-window v-model="closable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  closable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  closable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Closable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Custom Lists
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="customLists.showCode = !customLists.showCode"
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
        <v-sheet v-if="customLists.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="customLists.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="customLists.window = 1"
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
                  @click="copy(customLists.template + customLists.script)"
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
            <v-window v-model="customLists.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  customLists.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  customLists.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CustomLists />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Expandable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="expandable.showCode = !expandable.showCode"
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
        <v-sheet v-if="expandable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="expandable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="expandable.window = 1"
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
                  @click="copy(expandable.template + expandable.script)"
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
            <v-window v-model="expandable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  expandable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  expandable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Expandable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Filter Example
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="filter.showCode = !filter.showCode"
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
        <v-sheet v-if="filter.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="filter.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="filter.window = 1"
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
                  @click="copy(filter.template + filter.script)"
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
            <v-window v-model="filter.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  filter.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  filter.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ChipFilter />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - Icons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="icon.showCode = !icon.showCode"
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
        <v-sheet v-if="icon.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="icon.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="icon.window = 1"
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
                  @click="copy(icon.template + icon.script)"
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
            <v-window v-model="icon.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  icon.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{ icon.script }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Icon />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Chips - In Selects
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="inSelects.showCode = !inSelects.showCode"
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
        <v-sheet v-if="inSelects.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="inSelects.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="inSelects.window = 1"
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
                  @click="copy(inSelects.template + inSelects.script)"
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
            <v-window v-model="inSelects.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  inSelects.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  inSelects.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <InSelects />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import ActionChips from './ActionChips';
import AdditionalFiltering from './AdditionalFiltering';
import Closable from './Closable';
import Colored from './Colored';
import CustomLists from './CustomLists';
import Draggable from './Draggable';
import Expandable from './Expandable';
import ChipFilter from './Filter';
import Icon from './Icon';
import InSelects from './InSelects';
import Label from './Label';
import NoRipple from './NoRipple';
import Outlined from './Outlined';
import Sizes from './Sizes';

export default {
  components: {
    ActionChips,
    AdditionalFiltering,
    Closable,
    Colored,
    CustomLists,
    Draggable,
    Expandable,
    ChipFilter,
    Icon,
    InSelects,
    Label,
    NoRipple,
    Outlined,
    Sizes
  },
  data() {
    return {
      actionChips: {
        template: `<template>
  <v-card class="mx-auto" max-width="450">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      :aspect-ratio="16 / 9"
    >
    </v-img>
    <v-card-title>
      <div class="display-1 mb-2">Welcome Home...</div>
      <div class="title font-weight-regular grey--text">
        Monday, 12:30 PM, Mostly Sunny
      </div>
    </v-card-title>
    <v-row class="px-4 grey--text" align="center">
      <v-avatar size="24" class="mr-4">
        <v-img
          src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
          contain
        ></v-img>
      </v-avatar>

      <span>81° / 62°</span>
    </v-row>

    <v-divider class="mt-6 mx-4"></v-divider>

    <v-card-text>
      <v-chip class="mr-2" @click="lights">
        <v-icon left>mdi-brightness-5</v-icon>
        Turn on Lights
      </v-chip>
      <v-chip class="mr-2" @click="alarm">
        <v-icon left>mdi-alarm-check</v-icon>
        Set alarm
      </v-chip>
      <v-chip @click="blinds">
        <v-icon left>mdi-blinds</v-icon>
        Close blinds
      </v-chip>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  methods: {
    alarm() {
      alert("Turning on alarm...");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      additionalFiltering: {
        template: `<template>
  <v-card class="mx-auto mt-12" max-width="450">
    <v-system-bar></v-system-bar>

    <v-toolbar flat color="transparent">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search News"
        single-line
      ></v-text-field>
    </v-toolbar>

    <v-card-text class="py-0">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
        {{ keyword }}
      </v-chip>
    </v-card-text>

    <v-list three-line>
      <v-list-item
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
      >
        <v-img
          :src="item.image"
          class="mr-4"
          max-width="64"
          min-width="64"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular caption"
            v-text="item.category"
          ></span>

          <div v-text="item.title"></div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
        category: "Travel",
        keyword: "Drinks"
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        title:
          "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
        category: "Technology",
        keyword: "Phones"
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        title: "How to Get Media Mentions for Your Business",
        category: "Media",
        keyword: "Social"
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        title:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        category: "Technology",
        keyword: "Military"
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        title: "Degrees of Freedom and Sudoko",
        category: "Travel",
        keyword: "Social"
      }
    ],
    search: ""
  }),

  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter(item => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      closable: {
        template: `<template>
  <div class="text-center">
    <v-btn
      v-if="!chip1 && !chip2 && !chip3 && !chip4"
      close
      color="primary"
      dark
      @click="(chip1 = true), (chip2 = true), (chip3 = true), (chip4 = true)"
    >
      Reset Chips
    </v-btn>

    <v-chip v-if="chip1" class="ma-2" close @click:close="chip1 = false">
      Closable
    </v-chip>

    <v-chip
      v-if="chip2"
      class="ma-2"
      close
      color="red"
      text-color="white"
      @click:close="chip2 = false"
    >
      Remove
    </v-chip>

    <v-chip
      v-if="chip3"
      class="ma-2"
      close
      color="green"
      outlined
      @click:close="chip3 = false"
    >
      Success
    </v-chip>

    <v-chip
      v-if="chip4"
      class="ma-2"
      close
      color="orange"
      label
      outlined
      @click:close="chip4 = false"
    >
      Complete
    </v-chip>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      colored: {
        template: `<template>
  <div class="text-center">
    <v-chip class="ma-2">
      Default
    </v-chip>

    <v-chip class="ma-2" color="primary">
      Primary
    </v-chip>

    <v-chip class="ma-2" color="secondary">
      Secondary
    </v-chip>

    <v-chip class="ma-2" color="red" text-color="white">
      Red Chip
    </v-chip>

    <v-chip class="ma-2" color="green" text-color="white">
      Green Chip
    </v-chip>
  </div>
</template>
`,
        showCode: false
      },
      customLists: {
        template: `<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar flat color="transparent">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Photo Info</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$refs.search.focus()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="py-0">
      <v-row align="center" justify="start">
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          class="shrink"
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            <v-icon left v-text="selection.icon"></v-icon>
            {{ selection.text }}
          </v-chip>
        </v-col>

        <v-col v-if="!allSelected" cols="12">
          <v-text-field
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list>
      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.text"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <v-list-item-avatar>
            <v-icon :disabled="loading" v-text="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!selected.length"
        :loading="loading"
        color="purple"
        text
        @click="next"
        >Next</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        text: "Nature",
        icon: "mdi-nature"
      },
      {
        text: "Nightlife",
        icon: "mdi-glass-wine"
      },
      {
        text: "November",
        icon: "mdi-calendar-range"
      },
      {
        text: "Portland",
        icon: "mdi-map-marker"
      },
      {
        text: "Biking",
        icon: "mdi-bike"
      }
    ],
    loading: false,
    search: "",
    selected: []
  }),

  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter(item => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    }
  },

  watch: {
    selected() {
      this.search = "";
    }
  },

  methods: {
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      draggable: {
        template: `<template>
  <v-row justify="center" align="center">
    <v-chip draggable>Default</v-chip>
  </v-row>
</template>
`,
        showCode: false
      },
      expandable: {
        template: `<template>
  <v-card max-width="400" class="mx-auto">
    <v-system-bar></v-system-bar>

    <v-row class="px-6 py-3" align="center">
      <span class="mr-4">To</span>
      <v-menu
        v-model="menu"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip pill v-on="on">
            <v-avatar left>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
            John Leider
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="menu = false">
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>

    <v-divider></v-divider>

    <v-text-field
      full-width
      value="Re: Vacation Request"
      label="Subject"
      single-line
    ></v-text-field>

    <v-textarea full-width single-line label="Message"></v-textarea>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    menu: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      filter: {
        template: `<template>
  <v-row justify="space-around" align="center">
    <v-chip class="ma-2" :input-value="active" filter>
      I'm v-chip
    </v-chip>

    <v-chip class="ma-2" :input-value="active" filter filter-icon="mdi-plus">
      I'm v-chip
    </v-chip>

    <v-chip class="ma-2" :input-value="active" filter filter-icon="mdi-minus">
      I'm v-chip
    </v-chip>

    <v-switch v-model="active" label="Active"></v-switch>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    active: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      icon: {
        template: `<template>
  <div class="text-center">
    <v-chip class="ma-2" color="indigo" text-color="white">
      <v-avatar left>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      Ranee
    </v-chip>

    <v-chip class="ma-2" color="orange" text-color="white">
      Premium
      <v-icon right>mdi-star</v-icon>
    </v-chip>

    <v-chip class="ma-2" color="primary" text-color="white">
      1 Year
      <v-icon right>mdi-cake-variant</v-icon>
    </v-chip>

    <v-chip class="ma-2" color="green" text-color="white">
      <v-avatar left class="green darken-4">
        1
      </v-avatar>
      Years
    </v-chip>

    <v-chip
      class="ma-2"
      close
      color="teal"
      text-color="white"
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>

    <v-chip
      class="ma-2"
      close
      color="teal"
      text-color="white"
      close-icon="mdi-delete"
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>
  </div>
</template>
`,
        script: `<script>
export default {
  methods: {
    close() {
      alert("Chip close clicked");
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      inSelects: {
        template: `<template>
  <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    prepend-icon="filter_list"
    solo
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong
        >&nbsp;
        <span>(interest)</span>
      </v-chip>
    </template>
  </v-combobox>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      chips: [
        "Programming",
        "Playing video games",
        "Watching movies",
        "Sleeping"
      ],
      items: ["Streaming", "Eating"]
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      label: {
        template: `<template>
  <div class="text-center">
    <v-chip class="ma-2" label>
      Label
    </v-chip>

    <v-chip class="ma-2" color="pink" label text-color="white">
      <v-icon left>mdi-label</v-icon>
      Tags
    </v-chip>

    <v-chip class="ma-2" color="primary" label>
      <v-icon left>mdi-account-circle-outline</v-icon>
      John Leider
    </v-chip>

    <v-chip class="ma-2" close color="cyan" label text-color="white">
      <v-icon left>mdi-twitter</v-icon>
      New Tweets
    </v-chip>
  </div>
</template>
`,
        showCode: false
      },
      noRipple: {
        template: `<template>
  <v-row justify="center" align="center">
    <v-chip :ripple="false">Default</v-chip>
  </v-row>
</template>
`,
        showCode: false
      },
      outlined: {
        template: `<template>
  <div class="text-center">
    <v-chip class="ma-2" color="success" outlined>
      <v-icon left>mdi-server-plus</v-icon>
      Server Status
    </v-chip>

    <v-chip class="ma-2" color="primary" outlined pill>
      User Account
      <v-icon right>mdi-account-outline</v-icon>
    </v-chip>

    <v-chip class="ma-2" color="deep-purple accent-4" outlined>
      <v-icon left>mdi-wrench</v-icon>
      Update Settings
    </v-chip>

    <v-chip class="ma-2" close color="indigo darken-3" outlined>
      <v-icon left>mdi-fire</v-icon>
      New Posts Available
    </v-chip>
  </div>
</template>
`,
        showCode: false
      },
      sizes: {
        template: `<template>
  <div class="text-center">
    <v-chip class="ma-2" x-small>
      x-small chip
    </v-chip>

    <v-chip class="ma-2" small>
      small chip
    </v-chip>

    <v-chip class="ma-2">
      Default
    </v-chip>

    <v-chip class="ma-2" large>
      large chip
    </v-chip>

    <v-chip class="ma-2" x-large>
      x-large chip
    </v-chip>
  </div>
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
