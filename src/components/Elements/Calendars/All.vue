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
            <v-btn
              text
              class="white--text"
              rounded
              @click="playground.window = 2"
              >Style</v-btn
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
                      playground.template + playground.script + playground.style
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
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  playground.style
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
        Basic Usage - Calendars
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
        Calendars - Categories
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="category.showCode = !category.showCode"
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
        <v-sheet v-if="category.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="category.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="category.window = 1"
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
                  @click="copy(category.template + category.script)"
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
            <v-window v-model="category.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  category.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  category.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Category />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Calendars - Daily
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="daily.showCode = !daily.showCode"
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
        <v-sheet v-if="daily.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="daily.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="daily.window = 1"
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
                  @click="copy(daily.template + daily.script)"
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
            <v-window v-model="daily.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  daily.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  daily.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Daily />
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
            <v-btn
              text
              class="white--text"
              rounded
              @click="dismissible.window = 2"
              >Style</v-btn
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
                  @click="copy(dismissible.template + dismissible.script + dismissible.style )"
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
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  dismissible.style
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
        Calendars - Drag and Drop
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dragAndDrop.showCode = !dragAndDrop.showCode"
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
        <v-sheet v-if="dragAndDrop.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dragAndDrop.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dragAndDrop.window = 1"
              >Script</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dragAndDrop.window = 2"
              >Style</v-btn
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
                      dragAndDrop.template +
                        dragAndDrop.script +
                        dragAndDrop.style
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
            <v-window v-model="dragAndDrop.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dragAndDrop.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dragAndDrop.script
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  dragAndDrop.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DragAndDrop />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Calendars - Events
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="events.showCode = !events.showCode"
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
        <v-sheet v-if="events.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="events.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="events.window = 1"
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
                  @click="copy(events.template + events.script)"
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
            <v-window v-model="events.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  events.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  events.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Events />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Calendars - Now Line
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="nowLine.showCode = !nowLine.showCode"
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
        <v-sheet v-if="nowLine.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="nowLine.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="nowLine.window = 1"
              >Script</v-btn
            >
            <v-btn text class="white--text" rounded @click="nowLine.window = 2"
              >Style</v-btn
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
                    copy(nowLine.template + nowLine.script + nowLine.style)
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
            <v-window v-model="nowLine.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  nowLine.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  nowLine.script
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  nowLine.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <NowLine />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Calendars - Slots
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
        Calendars - Weekly
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="weekly.showCode = !weekly.showCode"
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
        <v-sheet v-if="weekly.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="weekly.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="weekly.window = 1"
              >Script</v-btn
            >
            <v-btn text class="white--text" rounded @click="weekly.window = 2"
              >Style</v-btn
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
                  @click="copy(weekly.template + weekly.script + weekly.style)"
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
            <v-window v-model="weekly.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  weekly.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  weekly.script
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  weekly.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Weekly />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Category from './Category';
import Daily from './Daily';
import DragAndDrop from './DragandDrop';
import Events from './Events';
import NowLine from './NowLine';
import Playground from './Playground';
import Slots from './Slots';
import Usage from './Usage';
import Weekly from './Weekly';

export default {
  components: {
    Category,
    Daily,
    DragAndDrop,
    Events,
    NowLine,
    Playground,
    Slots,
    Usage,
    Weekly
  },
  data() {
    return {
      category: {
        template: `<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          type="category"
          category-show-all
          :categories="categories"
          :events="events"
          :event-color="getEventColor"
          @change="fetchEvents"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    focus: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ],
    categories: ["John Smith", "Tori Walker"]
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    fetchEvents({ start, end }) {
      const events = [];

      const min = new Date(\`\${start.date}T00:00:00\`);
      const max = new Date(\`\${end.date}T23:59:59\`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
          category: this.categories[this.rnd(0, this.categories.length - 1)]
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      daily: {
        template: `<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar color="primary" type="day">
          <template v-slot:day-header="{ present }">
            <template v-if="present" class="text-center">
              Today
            </template>
          </template>

          <template v-slot:interval="{ hour }">
            <div class="text-center">{{ hour }} o'clock</div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({})
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dragAndDrop: {
        template: `<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          color="primary"
          type="4day"
          :events="events"
          :event-color="getEventColor"
          :event-ripple="false"
          @change="getEvents"
          @mousedown:event="startDrag"
          @mousedown:time="startTime"
          @mousemove:time="mouseMove"
          @mouseup:time="endDrag"
          @mouseleave.native="cancelDrag"
        >
          <template #event="{ event, timed, eventSummary }">
            <div class="v-event-draggable" v-html="eventSummary()"></div>
            <div
              v-if="timed"
              class="v-event-drag-bottom"
              @mousedown.stop="extendBottom(event)"
            ></div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    value: "",
    events: [],
    colors: [
      "#2196F3",
      "#3F51B5",
      "#673AB7",
      "#00BCD4",
      "#4CAF50",
      "#FF9800",
      "#757575"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null
  }),
  methods: {
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;

        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: \`Event #\${this.events.length}\`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true
        };

        this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);

        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    getEventColor(event) {
      const rgb = parseInt(event.color.substring(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;

      return event === this.dragEvent
        ? \`rgba(\${r}, \${g}, \${b}, 0.7)\`
        : event === this.createEvent
        ? \`rgba(\${r}, \${g}, \${b}, 0.7)\`
        : event.color;
    },
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(\`\${start.date}T00:00:00\`).getTime();
      const max = new Date(\`\${end.date}T23:59:59\`).getTime();
      const days = (max - min) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const timed = this.rnd(0, 3) !== 0;
        const firstTimestamp = this.rnd(min, max);
        const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000;
        const start = firstTimestamp - (firstTimestamp % 900000);
        const end = start + secondTimestamp;

        events.push({
          name: this.rndElement(this.names),
          color: this.rndElement(this.colors),
          start,
          end,
          timed
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    }
  }
};
</scrpt>
`,
        style: `<style scoped lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: "";
  }

  &:hover::after {
    display: block;
  }
}
</style>
`,
        window: 0,
        showCode: false
      },
      events: {
        template: `<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ]
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(\`\${start.date}T00:00:00\`);
      const max = new Date(\`\${end.date}T23:59:59\`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      nowLine: {
        template: `<template>
  <v-row>
    <v-col>
      <v-sheet height="500">
        <v-calendar ref="calendar" v-model="value" type="week">
          <template #day-body="{ date, week }">
            <div
              class="v-current-time"
              :class="{ first: date === week[0].date }"
              :style="{ top: nowY }"
            ></div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    value: "",
    ready: false
  }),
  computed: {
    cal() {
      return this.ready ? this.$refs.calendar : null;
    },
    nowY() {
      return this.cal ? this.cal.timeToY(this.cal.times.now) + "px" : "-10px";
    }
  },
  mounted() {
    this.ready = true;
    this.scrollToTime();
    this.updateTime();
  },
  methods: {
    getCurrentTime() {
      return this.cal
        ? this.cal.times.now.hour * 60 + this.cal.times.now.minute
        : 0;
    },
    scrollToTime() {
      const time = this.getCurrentTime();
      const first = Math.max(0, time - (time % 30) - 30);

      this.cal.scrollToTime(first);
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000);
    }
  }
};
</scrpt>
`,
        style: `<style lang="scss">
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: "";
    position: absolute;
    background-color: #ea4335;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
</style>
`,
        window: 0,
        showCode: false
      },
      playground: {
        template: `<template>
  <v-row>
    <v-col sm="12" lg="3" class="mb-4 controls">
      <v-btn
        fab
        small
        absolute
        left
        color="primary"
        @click="$refs.calendar.prev()"
      >
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        absolute
        right
        color="primary"
        @click="$refs.calendar.next()"
      >
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
      <br /><br /><br />
      <v-select
        v-model="type"
        :items="typeOptions"
        label="Type"
        hide-details
        outlined
        dense
      ></v-select>
      <v-checkbox v-model="dark" label="Dark" hide-details></v-checkbox>
      <v-checkbox
        v-model="shortIntervals"
        label="Short intervals"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="shortMonths"
        label="Short months"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="shortWeekdays"
        label="Short weekdays"
        hide-details
      ></v-checkbox>
      <v-select
        v-model="color"
        :items="colorOptions"
        class="mt-3"
        label="Color"
        hide-details
        outlined
        dense
      ></v-select>
      <v-menu
        ref="startMenu"
        v-model="startMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="start"
            class="mt-3"
            label="Start Date"
            prepend-icon="event"
            dense
            readonly
            outlined
            hide-details
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="start" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="startMenu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.startMenu.save(start)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        v-if="hasEnd"
        ref="endMenu"
        v-model="endMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end"
            class="mt-3"
            label="End Date"
            prepend-icon="event"
            dense
            readonly
            outlined
            hide-details
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="end" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="endMenu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.endMenu.save(end)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="nowMenu"
        v-model="nowMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="now"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="now"
            class="mt-3"
            label="Today"
            prepend-icon="event"
            dense
            readonly
            outlined
            hide-details
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="now" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="nowMenu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.nowMenu.save(now)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-select
        v-model="mode"
        :items="modeOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Event Overlap Mode"
      ></v-select>
      <v-select
        v-model="weekdays"
        :items="weekdaysOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Weekdays"
      ></v-select>
      <v-text-field
        v-if="type === 'custom-weekly'"
        v-model="minWeeks"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Minimum Weeks"
        type="number"
      ></v-text-field>
      <v-select
        v-if="hasIntervals"
        v-model="intervals"
        :items="intervalsOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Intervals"
      ></v-select>
      <v-select
        v-if="type === 'custom-daily'"
        v-model="maxDays"
        :items="maxDaysOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="# of Days"
      ></v-select>
      <v-select
        v-if="hasIntervals"
        v-model="styleInterval"
        :items="styleIntervalOptions"
        dense
        outlined
        hide-details
        class="mt-3"
        label="Styling"
      ></v-select>
    </v-col>
    <v-col sm="12" lg="9" class="pl-4">
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          :start="start"
          :end="end"
          :min-weeks="minWeeks"
          :max-days="maxDays"
          :now="now"
          :dark="dark"
          :weekdays="weekdays"
          :first-interval="intervals.first"
          :interval-minutes="intervals.minutes"
          :interval-count="intervals.count"
          :interval-height="intervals.height"
          :interval-style="intervalStyle"
          :show-interval-label="showIntervalLabel"
          :short-intervals="shortIntervals"
          :short-months="shortMonths"
          :short-weekdays="shortWeekdays"
          :color="color"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="45"
          :event-color="getEventColor"
          @change="getEvents"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6];

const intervalsDefault = {
  first: 0,
  minutes: 60,
  count: 24,
  height: 48
};

const stylings = {
  default(interval) {
    return undefined;
  },
  workday(interval) {
    const inactive =
      interval.weekday === 0 ||
      interval.weekday === 6 ||
      interval.hour < 9 ||
      interval.hour >= 17;
    const startOfHour = interval.minute === 0;
    const dark = this.dark;
    const mid = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    return {
      backgroundColor: inactive
        ? dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined,
      borderTop: startOfHour ? undefined : "1px dashed " + mid
    };
  },
  past(interval) {
    return {
      backgroundColor: interval.past
        ? this.dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined
    };
  }
};

export default {
  data: () => ({
    dark: false,
    startMenu: false,
    start: "2019-01-12",
    endMenu: false,
    end: "2019-01-27",
    nowMenu: false,
    minWeeks: 1,
    now: null,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ],
    type: "month",
    typeOptions: [
      { text: "Day", value: "day" },
      { text: "4 Day", value: "4day" },
      { text: "Week", value: "week" },
      { text: "Month", value: "month" },
      { text: "Custom Daily", value: "custom-daily" },
      { text: "Custom Weekly", value: "custom-weekly" }
    ],
    mode: "stack",
    modeOptions: [
      { text: "Stack", value: "stack" },
      { text: "Column", value: "column" }
    ],
    weekdays: weekdaysDefault,
    weekdaysOptions: [
      { text: "Sunday - Saturday", value: weekdaysDefault },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] }
    ],
    intervals: intervalsDefault,
    intervalsOptions: [
      { text: "Default", value: intervalsDefault },
      {
        text: "Workday",
        value: { first: 16, minutes: 30, count: 20, height: 48 }
      }
    ],
    maxDays: 7,
    maxDaysOptions: [
      { text: "7 days", value: 7 },
      { text: "5 days", value: 5 },
      { text: "4 days", value: 4 },
      { text: "3 days", value: 3 }
    ],
    styleInterval: "default",
    styleIntervalOptions: [
      { text: "Default", value: "default" },
      { text: "Workday", value: "workday" },
      { text: "Past", value: "past" }
    ],
    color: "primary",
    colorOptions: [
      { text: "Primary", value: "primary" },
      { text: "Secondary", value: "secondary" },
      { text: "Accent", value: "accent" },
      { text: "Red", value: "red" },
      { text: "Pink", value: "pink" },
      { text: "Purple", value: "purple" },
      { text: "Deep Purple", value: "deep-purple" },
      { text: "Indigo", value: "indigo" },
      { text: "Blue", value: "blue" },
      { text: "Light Blue", value: "light-blue" },
      { text: "Cyan", value: "cyan" },
      { text: "Teal", value: "teal" },
      { text: "Green", value: "green" },
      { text: "Light Green", value: "light-green" },
      { text: "Lime", value: "lime" },
      { text: "Yellow", value: "yellow" },
      { text: "Amber", value: "amber" },
      { text: "Orange", value: "orange" },
      { text: "Deep Orange", value: "deep-orange" },
      { text: "Brown", value: "brown" },
      { text: "Blue Gray", value: "blue-gray" },
      { text: "Gray", value: "gray" },
      { text: "Black", value: "black" }
    ],
    shortIntervals: true,
    shortMonths: false,
    shortWeekdays: false
  }),
  computed: {
    intervalStyle() {
      return stylings[this.styleInterval].bind(this);
    },
    hasIntervals() {
      return (
        this.type in
        {
          week: 1,
          day: 1,
          "4day": 1,
          "custom-daily": 1
        }
      );
    },
    hasEnd() {
      return (
        this.type in
        {
          "custom-weekly": 1,
          "custom-daily": 1
        }
      );
    }
  },
  methods: {
    viewDay({ date }) {
      this.start = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    showIntervalLabel(interval) {
      return interval.minute === 0;
    },
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(\`\${start.date}T00:00:00\`);
      const max = new Date(\`\${end.date}T23:59:59\`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          timed: !allDay,
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</scrpt>
`,
        style: `<style scoped>
.controls {
  position: relative;
}
</style>
`,
        window: 0,
        showCode: false
      },
      slots: {
        template: `<template>
  <v-row>
    <v-col>
      <v-sheet height="500">
        <v-calendar :now="today" :value="today" color="primary">
          <template v-slot:day="{ present, past, date }">
            <v-row class="fill-height">
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="\`\${percent}%\`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    today: "2019-01-10",
    tracked: {
      "2019-01-09": [23, 45, 10],
      "2019-01-08": [10],
      "2019-01-07": [0, 78, 5],
      "2019-01-06": [0, 0, 50],
      "2019-01-05": [0, 10, 23],
      "2019-01-04": [2, 90],
      "2019-01-03": [10, 32],
      "2019-01-02": [80, 10, 10],
      "2019-01-01": [20, 25, 10]
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <div>
    <v-sheet tile height="54" color="grey lighten-3" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] }
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ]
  }),
  methods: {
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(\`\${start.date}T00:00:00\`);
      const max = new Date(\`\${end.date}T23:59:59\`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      weekly: {
        template: `<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    today: "2019-01-08",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00"
      },
      {
        name: "Thomas' Birthday",
        start: "2019-01-10"
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30"
      }
    ]
  }),
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  }
};
</scrpt>
`,
        style: `<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>
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
