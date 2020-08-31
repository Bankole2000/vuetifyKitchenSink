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
        Basic Usage - Tabs
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
        Tabs - Center Active Tab
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="centeredActive.showCode = !centeredActive.showCode"
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
        <v-sheet v-if="centeredActive.showCode" tile>
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
                  @click="copy(centeredActive.template)"
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
                  centeredActive.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CenteredActive />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs with Custom Icons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="customIcons.showCode = !customIcons.showCode"
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
        <v-sheet v-if="customIcons.showCode" tile>
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
                  @click="copy(customIcons.template)"
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
                  customIcons.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CustomIcons />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Fixed Tabs
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="fixedTabs.showCode = !fixedTabs.showCode"
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
        <v-sheet v-if="fixedTabs.showCode" tile>
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
                  @click="copy(fixedTabs.template)"
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
                  fixedTabs.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <FixedTabs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs with Pagination
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="pagination.showCode = !pagination.showCode"
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
        <v-sheet v-if="pagination.showCode" tile>
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
                  @click="copy(pagination.template)"
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
                  pagination.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Pagination />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Vertical Tabs
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="verticalTabs.showCode = !verticalTabs.showCode"
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
        <v-sheet v-if="verticalTabs.showCode" tile>
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
                  @click="copy(verticalTabs.template)"
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
                  verticalTabs.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <VerticalTabs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs - Right Aligned
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="rightAligned.showCode = !rightAligned.showCode"
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
        <v-sheet v-if="rightAligned.showCode" tile>
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
                  @click="copy(rightAligned.template)"
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
                  rightAligned.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RightAligned />
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
        Tabs - Align with Toolbar Title
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="alignWithToolbar.showCode = !alignWithToolbar.showCode"
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
        <v-sheet v-if="alignWithToolbar.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="alignWithToolbar.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="alignWithToolbar.window = 1"
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
                    copy(alignWithToolbar.template + alignWithToolbar.script)
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
            <v-window v-model="alignWithToolbar.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  alignWithToolbar.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  alignWithToolbar.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AlignWithToolbar />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs - Content
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="content.showCode = !content.showCode"
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
        <v-sheet v-if="content.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="content.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="content.window = 1"
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
                  @click="copy(content.template + content.script)"
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
            <v-window v-model="content.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  content.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  content.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Content />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Desktop Tabs
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="desktopTabs.showCode = !desktopTabs.showCode"
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
        <v-sheet v-if="desktopTabs.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="desktopTabs.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="desktopTabs.window = 1"
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
                  @click="copy(desktopTabs.template + desktopTabs.script)"
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
            <v-window v-model="desktopTabs.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  desktopTabs.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  desktopTabs.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DesktopTabs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dynamic Tabs
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dynamicTabs.showCode = !dynamicTabs.showCode"
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
        <v-sheet v-if="dynamicTabs.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dynamicTabs.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dynamicTabs.window = 1"
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
                  @click="copy(dynamicTabs.template + dynamicTabs.script)"
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
            <v-window v-model="dynamicTabs.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dynamicTabs.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dynamicTabs.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DynamicTabs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs - Grow
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="grow.showCode = !grow.showCode"
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
        <v-sheet v-if="grow.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="grow.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="grow.window = 1"
              >Script</v-btn
            >
            <v-btn text class="white--text" rounded @click="grow.window = 2"
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
                  @click="copy(grow.template + grow.script + grow.style)"
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
            <v-window v-model="grow.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  grow.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{ grow.script }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{ grow.style }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Grow />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs with Icons and Text
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconsAndText.showCode = !iconsAndText.showCode"
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
        <v-sheet v-if="iconsAndText.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconsAndText.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="iconsAndText.window = 1"
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
                  @click="copy(iconsAndText.template + iconsAndText.script)"
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
            <v-window v-model="iconsAndText.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  iconsAndText.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  iconsAndText.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconsAndText />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs - Tab Items
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="tabItems.showCode = !tabItems.showCode"
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
        <v-sheet v-if="tabItems.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="tabItems.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="tabItems.window = 1"
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
                  @click="copy(tabItems.template + tabItems.script)"
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
            <v-window v-model="tabItems.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  tabItems.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  tabItems.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TabItems />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs with Menus
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="withMenu.showCode = !withMenu.showCode"
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
        <v-sheet v-if="withMenu.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="withMenu.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="withMenu.window = 1"
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
                  @click="copy(withMenu.template + withMenu.script)"
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
            <v-window v-model="withMenu.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  withMenu.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  withMenu.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <WithMenu />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Tabs with Search
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="withSearch.showCode = !withSearch.showCode"
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
        <v-sheet v-if="withSearch.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="withSearch.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="withSearch.window = 1"
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
                  @click="copy(withSearch.template + withSearch.script)"
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
            <v-window v-model="withSearch.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  withSearch.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  withSearch.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <WithSearch />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AlignWithToolbar from "./AlignTabsWithToolbarTitle";
import CenteredActive from "./CenteredActiveTab";
import Content from "./Content";
import CustomIcons from "./CustomIcons";
import DesktopTabs from "./DesktopTabs";
import DynamicTabs from "./DynamicTabs";
import FixedTabs from "./FixedTabs";
import Grow from "./Grow";
import IconsAndText from "./IconsAndText";
import Pagination from "./Pagination";
import Playground from "./Playground";
import RightAligned from "./RightAlignedTabs";
import TabItems from "./TabItems";
import Usage from "./Usage";
import VerticalTabs from "./VerticalTabs";
import WithMenu from "./WithMenu";
import WithSearch from "./WithSearch";

export default {
  components: {
    AlignWithToolbar,
    CenteredActive,
    Content,
    CustomIcons,
    DesktopTabs,
    DynamicTabs,
    FixedTabs,
    Grow,
    IconsAndText,
    Pagination,
    Playground,
    RightAligned,
    TabItems,
    Usage,
    VerticalTabs,
    WithMenu,
    WithSearch
  },
  data() {
    return {
      alignWithToolbar: {
        template: `<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tab: null,
      items: ['web', 'shopping', 'videos', 'images', 'news'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      centeredActive: {
        template: `<template>
  <v-card>
    <v-tabs background-color="deep-purple accent-4" center-active dark>
      <v-tab>One</v-tab>
      <v-tab>Two</v-tab>
      <v-tab>Three</v-tab>
      <v-tab>Four</v-tab>
      <v-tab>Five</v-tab>
      <v-tab>Six</v-tab>
      <v-tab>Seven</v-tab>
      <v-tab>Eight</v-tab>
      <v-tab>Nine</v-tab>
      <v-tab>Ten</v-tab>
      <v-tab>Eleven</v-tab>
      <v-tab>Twelve</v-tab>
      <v-tab>Thirteen</v-tab>
      <v-tab>Fourteen</v-tab>
      <v-tab>Fifteen</v-tab>
      <v-tab>Sixteen</v-tab>
      <v-tab>Seventeen</v-tab>
      <v-tab>Eighteen</v-tab>
      <v-tab>Nineteen</v-tab>
      <v-tab>Twenty</v-tab>
    </v-tabs>
  </v-card>
</template>
`,
        showCode: false
      },
      content: {
        template: `<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="model" centered slider-color="yellow">
          <v-tab v-for="i in 3" :key="i" :href="\`#tab-\${i}\`"> Item {{ i }} </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="model">
      <v-tab-item v-for="i in 3" :key="i" :value="\`tab-\${i}\`">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      model: 'tab-2',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      customIcons: {
        template: `<template>
  <v-sheet elevation="6">
    <v-tabs background-color="cyan" dark next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline" show-arrows>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i"> Item {{ i }} </v-tab>
    </v-tabs>
  </v-sheet>
</template>
`,
        showCode: false
      },
      desktopTabs: {
        template: `<template>
  <v-card>
    <v-toolbar flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Contact Database</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1" class="primary--text">
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-2" class="primary--text">
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-3" class="primary--text">
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dynamicTabs: {
        template: `<template>
  <v-card>
    <v-tabs v-model="tab" background-color="red lighten-2" dark>
      <v-tab v-for="n in length" :key="n"> Item {{ n }} </v-tab>
    </v-tabs>
    <v-card-text class="text-center">
      <v-btn text @click="length--">Remove Tab</v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn text @click="length++">Add Tab</v-btn>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    length: 15,
    tab: null
  }),

  watch: {
    length(val) {
      this.tab = val - 1;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      fixedTabs: {
        template: `<template>
  <v-tabs fixed-tabs background-color="indigo" dark>
    <v-tab>
      Option
    </v-tab>
    <v-tab>
      Another Selection
    </v-tab>
    <v-tab>
      Items
    </v-tab>
    <v-tab>
      Another Screen
    </v-tab>
  </v-tabs>
</template>
`,
        showCode: false
      },
      grow: {
        template: `<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">BASiL</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card color="basil" flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tab: null,
      items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</scrpt>
`,
        style: `<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
`,
        window: 0,
        showCode: false
      },
      iconsAndText: {
        template: `<template>
  <v-card>
    <v-tabs v-model="tab" background-color="deep-purple accent-4" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Recents
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tab: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      pagination: {
        template: `<template>
  <v-card>
    <v-tabs dark background-color="teal darken-3" show-arrows>
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

      <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i"> Item {{ i }} </v-tab>
    </v-tabs>
  </v-card>
</template>
`,
        showCode: false
      },
      playground: {
        template: `<template>
  <div>
    <v-row justify="space-around">
      <v-switch v-model="icons" class="mx-2" label="Text + icons"></v-switch>
      <v-switch v-model="centered" class="mx-2" label="Centered" :disabled="vertical"></v-switch>
      <v-switch v-model="grow" class="mx-2" label="Grow"></v-switch>
      <v-switch v-model="vertical" class="mx-2" label="Vertical"></v-switch>
      <v-switch v-model="right" class="mx-2" label="Right"></v-switch>
      <v-col cols="12">
        <v-slider v-model="tabs" min="0" max="10" label="Tabs number"></v-slider>
      </v-col>
    </v-row>

    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="vertical"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons"
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="i in tabs" :key="i" :href="\`#tab-\${i}\`">
        Tab {{ i }}
        <v-icon v-if="icons">mdi-phone</v-icon>
      </v-tab>

      <v-tab-item v-for="i in tabs" :key="i" :value="'tab-' + i">
        <v-card flat tile>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tab: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icons: false,
      centered: false,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 3
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      rightAligned: {
        template: `<template>
  <v-card>
    <v-tabs background-color="white" color="deep-purple accent-4" right>
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <v-img
                :src="\`https://picsum.photos/500/300?image=\${i * n * 5 + 10}\`"
                :lazy-src="\`https://picsum.photos/10/6?image=\${i * n * 5 + 10}\`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
`,
        showCode: false
      },
      tabItems: {
        template: `<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
        { tab: 'Six', content: 'Tab 6 Content' },
        { tab: 'Seven', content: 'Tab 7 Content' },
        { tab: 'Eight', content: 'Tab 8 Content' },
        { tab: 'Nine', content: 'Tab 9 Content' },
        { tab: 'Ten', content: 'Tab 10 Content' }
      ]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-tabs>
    <v-tab>Item One</v-tab>
    <v-tab>Item Two</v-tab>
    <v-tab>Item Three</v-tab>
  </v-tabs>
</template>
`,
        showCode: false
      },
      verticalTabs: {
        template: `<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Option 1
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
              nisl sit amet velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
              aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
              tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum
              sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac
              eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
`,
        showCode: false
      },
      withMenu: {
        template: `<template>
  <v-card>
    <v-toolbar color="deep-purple accent-4" dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="currentItem" fixed-tabs slider-color="white">
          <v-tab v-for="item in items" :key="item" :href="'#tab-' + item">
            {{ item }}
          </v-tab>

          <v-menu v-if="more.length" bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
                more
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item v-for="item in items.concat(more)" :key="item" :value="'tab-' + item">
        <v-card flat>
          <v-card-text>
            <h2>{{ item }}</h2>
            {{ text }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    currentItem: 'tab-Web',
    items: ['Web', 'Shopping', 'Videos', 'Images'],
    more: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = 'tab-' + item;
      });
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      withSearch: {
        template: `<template>
  <v-card>
    <v-toolbar color="purple" dark flat prominent>
      <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab v-for="n in 3" :key="n"> Item {{ n }} </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">An awesome title</v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
              rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis,
              ligula mi congue nunc, vitae euismod ligula urna in dolor.
              Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
              nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
              egestas, neque sit amet convallis pulvinar, justo nulla eleifend
              augue, ac auctor orci leo non est. Etiam sit amet orci eget eros
              faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
              suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">An even better title</v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Sed hendrerit.
              Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin
              faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
              magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam
              lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
