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
        Basic Usage - Treeview
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

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Activatable TreeView
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="activatable.showCode = !activatable.showCode"
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
        <v-sheet v-if="activatable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="activatable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="activatable.window = 1"
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
                  @click="copy(activatable.template + activatable.script)"
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
            <v-window v-model="activatable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  activatable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  activatable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Activatable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Asynchronous Items
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="asyncItems.showCode = !asyncItems.showCode"
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
        <v-sheet v-if="asyncItems.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="asyncItems.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="asyncItems.window = 1"
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
                  @click="copy(asyncItems.template + asyncItems.script)"
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
            <v-window v-model="asyncItems.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  asyncItems.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  asyncItems.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AsyncItems />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Checkbox Color
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="checkboxColor.showCode = !checkboxColor.showCode"
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
        <v-sheet v-if="checkboxColor.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxColor.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="checkboxColor.window = 1"
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
                  @click="copy(checkboxColor.template + checkboxColor.script)"
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
            <v-window v-model="checkboxColor.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  checkboxColor.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  checkboxColor.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CheckboxColor />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Color Treeview
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
            <v-btn text class="white--text" rounded @click="color.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="color.window = 1"
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
                  @click="copy(color.template + color.script)"
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
            <v-window v-model="color.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  color.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  color.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Color />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Custom Selectable Icons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                customSelectableIcons.showCode = !customSelectableIcons.showCode
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
        <v-sheet v-if="customSelectableIcons.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="customSelectableIcons.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="customSelectableIcons.window = 1"
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
                      customSelectableIcons.template +
                        customSelectableIcons.script
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
            <v-window v-model="customSelectableIcons.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  customSelectableIcons.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  customSelectableIcons.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CustomSelectableIcons />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dense Mode
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="denseMode.showCode = !denseMode.showCode"
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
        <v-sheet v-if="denseMode.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="denseMode.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="denseMode.window = 1"
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
                  @click="copy(denseMode.template + denseMode.script)"
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
            <v-window v-model="denseMode.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  denseMode.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  denseMode.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DenseMode />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Disabling Nodes
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="disablingNodes.showCode = !disablingNodes.showCode"
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
        <v-sheet v-if="disablingNodes.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="disablingNodes.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="disablingNodes.window = 1"
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
                  @click="copy(disablingNodes.template + disablingNodes.script)"
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
            <v-window v-model="disablingNodes.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  disablingNodes.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  disablingNodes.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DisablingNodes />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Hoverable Treeview
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="hoverable.showCode = !hoverable.showCode"
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
        <v-sheet v-if="hoverable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="hoverable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="hoverable.window = 1"
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
                  @click="copy(hoverable.template + hoverable.script)"
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
            <v-window v-model="hoverable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  hoverable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  hoverable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Hoverable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Open All Treeview
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="openAll.showCode = !openAll.showCode"
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
        <v-sheet v-if="openAll.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="openAll.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="openAll.window = 1"
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
                  @click="copy(openAll.template + openAll.script)"
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
            <v-window v-model="openAll.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  openAll.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  openAll.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OpenAll />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Rounded Treeview
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
            <v-btn text class="white--text" rounded @click="rounded.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="rounded.window = 1"
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
                  @click="copy(rounded.template + rounded.script)"
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
            <v-window v-model="rounded.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  rounded.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  rounded.script
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
        Searching A Directory
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                searchingADirectory.showCode = !searchingADirectory.showCode
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
        <v-sheet v-if="searchingADirectory.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="searchingADirectory.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="searchingADirectory.window = 1"
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
                      searchingADirectory.template + searchingADirectory.script
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
            <v-window v-model="searchingADirectory.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  searchingADirectory.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  searchingADirectory.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SearchingADirectory />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Selectable Treeview
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="selectable.showCode = !selectable.showCode"
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
        <v-sheet v-if="selectable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="selectable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="selectable.window = 1"
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
                  @click="copy(selectable.template + selectable.script)"
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
            <v-window v-model="selectable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  selectable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  selectable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Selectable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Selection Type Treeview
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="selectionType.showCode = !selectionType.showCode"
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
        <v-sheet v-if="selectionType.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="selectionType.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="selectionType.window = 1"
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
                  @click="copy(selectionType.template + selectionType.script)"
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
            <v-window v-model="selectionType.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  selectionType.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  selectionType.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SelectionType />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Shaped Treeview
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
        Treeview Slots
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
  </v-container>
</template>

<script>
import Activatable from "./Activatable";
import AsyncItems from "./AsyncItems";
import CheckboxColor from "./CheckboxColor";
import Color from "./Color";
import CustomSelectableIcons from "./CustomSelectableIcons";
import DenseMode from "./DenseMode";
import DisablingNodes from "./DisablingNodes";
import Hoverable from "./Hoverable";
import OpenAll from "./OpenAll";
import Playground from "./Playground";
import Rounded from "./Rounded";
import SearchingADirectory from "./SearchingADirectory";
import Selectable from "./Selectable";
import SelectionType from "./SelectionType";
import Shaped from "./Shaped";
import Slots from "./Slots";
import Usage from "./Usage";

export default {
  components: {
    Activatable,
    AsyncItems,
    CheckboxColor,
    Color,
    CustomSelectableIcons,
    DenseMode,
    DisablingNodes,
    Hoverable,
    OpenAll,
    Playground,
    Rounded,
    SearchingADirectory,
    Selectable,
    SelectionType,
    Shaped,
    Slots,
    Usage
  },
  data() {
    return {
      usage: {
        template: `<template>
  <v-treeview :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      slots: {
        template: `<template>
  <v-treeview v-model="tree" :open="open" :items="items" activatable item-key="name" open-on-click>
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    open: ['public'],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-json',
      md: 'mdi-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel'
    },
    tree: [],
    items: [
      {
        name: '.git'
      },
      {
        name: 'node_modules'
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [
              {
                name: 'logo.png',
                file: 'png'
              }
            ]
          },
          {
            name: 'favicon.ico',
            file: 'png'
          },
          {
            name: 'index.html',
            file: 'html'
          }
        ]
      },
      {
        name: '.gitignore',
        file: 'txt'
      },
      {
        name: 'babel.config.js',
        file: 'js'
      },
      {
        name: 'package.json',
        file: 'json'
      },
      {
        name: 'README.md',
        file: 'md'
      },
      {
        name: 'vue.config.js',
        file: 'js'
      },
      {
        name: 'yarn.lock',
        file: 'txt'
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      shaped: {
        template: `<template>
  <v-treeview shaped hoverable activatable :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      selectionType: {
        template: `<template>
  <v-container>
    <v-select v-model="selectionType" :items="['leaf', 'independent']" label="Selection type"></v-select>
    <v-row>
      <v-col>
        <v-treeview v-model="selection" :items="items" :selection-type="selectionType" selectable return-object open-all></v-treeview>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="pa-6" cols="6">
        <template v-if="!selection.length">
          No nodes selected.
        </template>
        <template v-else>
          <div v-for="node in selection" :key="node.id">
            {{ node.name }}
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    selectionType: 'leaf',
    selection: [],
    items: [
      {
        id: 1,
        name: 'Root',
        children: [
          { id: 2, name: 'Child #1' },
          { id: 3, name: 'Child #2' },
          {
            id: 4,
            name: 'Child #3',
            children: [
              { id: 5, name: 'Grandchild #1' },
              { id: 6, name: 'Grandchild #2' }
            ]
          }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      selectable: {
        template: `<template>
  <v-treeview selectable :items="items"></v-treeview>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      searchingADirectory: {
        template: `<template>
  <v-card class="mx-auto" max-width="500">
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field v-model="search" label="Search Company Directory" dark flat solo-inverted hide-details clearable clear-icon="mdi-close-circle-outline"></v-text-field>
      <v-checkbox v-model="caseSensitive" dark hide-details label="Case sensitive search"></v-checkbox>
    </v-sheet>
    <v-card-text>
      <v-treeview :items="items" :search="search" :filter="filter" :open.sync="open">
        <template v-slot:prepend="{ item }">
          <v-icon v-if="item.children" v-text="\`mdi-\${item.id === 1 ? 'home-variant' : 'folder-network'}\`"></v-icon>
        </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Vuetify Human Resources',
        children: [
          {
            id: 2,
            name: 'Core team',
            children: [
              {
                id: 201,
                name: 'John'
              },
              {
                id: 202,
                name: 'Kael'
              },
              {
                id: 203,
                name: 'Nekosaur'
              },
              {
                id: 204,
                name: 'Jacek'
              },
              {
                id: 205,
                name: 'Andrew'
              }
            ]
          },
          {
            id: 3,
            name: 'Administrators',
            children: [
              {
                id: 301,
                name: 'Ranee'
              },
              {
                id: 302,
                name: 'Rachel'
              }
            ]
          },
          {
            id: 4,
            name: 'Contributors',
            children: [
              {
                id: 401,
                name: 'Phlow'
              },
              {
                id: 402,
                name: 'Brandon'
              },
              {
                id: 403,
                name: 'Sean'
              }
            ]
          }
        ]
      }
    ],
    open: [1, 2],
    search: null,
    caseSensitive: false
  }),
  computed: {
    filter() {
      return this.caseSensitive ? (item, search, textKey) => item[textKey].indexOf(search) > -1 : undefined;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      rounded: {
        template: `<template>
  <v-treeview rounded hoverable activatable :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
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
      <v-switch v-model="dense" label="Dense"></v-switch>
      <v-switch v-model="selectable" label="Selectable"></v-switch>
      <v-switch v-model="activatable" label="Activatable"></v-switch>
      <v-switch v-model="hoverable" label="Hoverable"></v-switch>
      <v-switch v-model="shaped" label="Shaped"></v-switch>
      <v-switch v-model="rounded" label="Rounded"></v-switch>
      <v-switch v-model="openOnClick" label="Open on any item click"></v-switch>
      <v-col cols="12">
        <v-select v-model="selectedColor" :items="selectedColors" :disabled="!selectable" label="Selected checkbox color"></v-select>
      </v-col>
      <v-col cols="12">
        <v-select v-model="color" :items="selectedColors" :disabled="!activatable" label="Active node color"></v-select>
      </v-col>
    </v-row>

    <v-treeview
      :items="items"
      :dense="dense"
      :selectable="selectable"
      :activatable="activatable"
      :hoverable="hoverable"
      :open-on-click="openOnClick"
      :selected-color="selectedColor"
      :color="color"
      :shaped="shaped"
      :rounded="rounded"
    ></v-treeview>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ],
    dense: false,
    selectable: false,
    activatable: false,
    hoverable: false,
    openOnClick: false,
    shaped: false,
    rounded: false,
    color: 'primary',
    selectedColor: 'accent',
    selectedColors: ['accent', 'teal', 'red', 'success', 'warning lighten-2']
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      openAll: {
        template: `<template>
  <v-treeview open-all :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      hoverable: {
        template: `<template>
  <v-treeview hoverable :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      disablingNodes: {
        template: `<template>
  <v-treeview selectable item-disabled="locked" :items="items"></v-treeview>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        locked: true,
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                locked: true,
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf', locked: true },
          { id: 17, name: 'November : pdf', locked: true },
          { id: 18, name: 'Tutorial : html', locked: true }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      denseMode: {
        template: `<template>
  <v-treeview dense :items="items"></v-treeview>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      customSelectableIcons: {
        template: `<template>
  <v-card>
    <v-toolbar color="primary" dark flat>
      <v-icon>mdi-silverware</v-icon>
      <v-toolbar-title>Local hotspots</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="fetch"
            :items="items"
            selected-color="indigo"
            open-on-click
            selectable
            return-object
            expand-icon="mdi-chevron-down"
            on-icon="mdi-bookmark"
            off-icon="mdi-bookmark-outline"
            indeterminate-icon="mdi-bookmark-minus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col cols="12" md="6">
        <v-card-text>
          <div v-if="tree.length === 0" key="title" class="title font-weight-light grey--text pa-4 text-center">
            Select your favorite breweries
          </div>

          <v-scroll-x-transition group hide-on-leave>
            <v-chip v-for="(selection, i) in tree" :key="i" color="grey" dark small class="ma-1">
              <v-icon left small>mdi-beer</v-icon>
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
        </v-card-text>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text @click="tree = []">
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="white--text" color="green darken-1" depressed>
        Save
        <v-icon right>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    breweries: [],
    isLoading: false,
    tree: [],
    types: []
  }),

  computed: {
    items() {
      const children = this.types.map((type) => ({
        id: type,
        name: this.getName(type),
        children: this.getChildren(type)
      }));

      return [
        {
          id: 1,
          name: 'All Breweries',
          children
        }
      ];
    },
    shouldShowTree() {
      return this.breweries.length > 0 && !this.isLoading;
    }
  },

  watch: {
    breweries(val) {
      this.types = val
        .reduce((acc, cur) => {
          const type = cur.brewery_type;

          if (!acc.includes(type)) acc.push(type);

          return acc;
        }, [])
        .sort();
    }
  },

  methods: {
    fetch() {
      if (this.breweries.length) return;

      return fetch('https://api.openbrewerydb.org/breweries')
        .then((res) => res.json())
        .then((data) => (this.breweries = data))
        .catch((err) => console.log(err));
    },
    getChildren(type) {
      const breweries = [];

      for (const brewery of this.breweries) {
        if (brewery.brewery_type !== type) continue;

        breweries.push({
          ...brewery,
          name: this.getName(brewery.name)
        });
      }

      return breweries.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    getName(name) {
      return \`\${name.charAt(0).toUpperCase()}\${name.slice(1)}\`;
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
  <v-treeview activatable color="warning" :items="items"></v-treeview>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      checkboxColor: {
        template: `<template>
  <v-treeview selectable selected-color="red" :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      asyncItems: {
        template: `<template>
  <v-card>
    <v-card-title class="indigo white--text headline">
      User Directory
    </v-card-title>
    <v-row class="pa-4" justify="space-between">
      <v-col cols="5">
        <v-treeview :active.sync="active" :items="items" :load-children="fetchUsers" :open.sync="open" activatable color="warning" open-on-click transition>
          <template v-slot:prepend="{ item, active }">
            <v-icon v-if="!item.children">mdi-account</v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex text-center">
        <v-scroll-y-transition mode="out-in">
          <div v-if="!selected" class="title grey--text text--lighten-1 font-weight-light" style="align-self: center;">
            Select a User
          </div>
          <v-card v-else :key="selected.id" class="pt-6 mx-auto" flat max-width="400">
            <v-card-text>
              <v-avatar v-if="avatar" size="88">
                <v-img :src="\`https://avataaars.io/\${avatar}\`" class="mb-6"></v-img>
              </v-avatar>
              <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
              <div class="blue--text mb-2">{{ selected.email }}</div>
              <div class="blue--text subheading font-weight-bold">{{ selected.username }}</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Company:</v-col>
              <v-col>{{ selected.company.name }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Website:</v-col>
              <v-col>
                <a :href="\`//\${selected.website}\`" target="_blank">{{ selected.website }}</a>
              </v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Phone:</v-col>
              <v-col>{{ selected.phone }}</v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>
`,
        script: `<script>
const avatars = [
  '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly'
];

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: []
  }),

  computed: {
    items() {
      return [
        {
          name: 'Users',
          children: this.users
        }
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find((user) => user.id === id);
    }
  },

  watch: {
    selected: 'randomAvatar'
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500);

      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      activatable: {
        template: `<template>
  <v-treeview activatable :items="items"></v-treeview>
</template>`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
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
