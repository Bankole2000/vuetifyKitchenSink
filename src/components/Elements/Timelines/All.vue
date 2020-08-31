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
        Basic Usage - Timeline
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
        Timeline with Basic Cards
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="timelineCard.showCode = !timelineCard.showCode"
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
        <v-sheet v-if="timelineCard.showCode" tile>
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
                  @click="copy(timelineCard.template)"
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
                  timelineCard.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TimelineCard />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline with Small Dots
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="smallDots.showCode = !smallDots.showCode"
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
        <v-sheet v-if="smallDots.showCode" tile>
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
                  @click="copy(smallDots.template)"
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
                  smallDots.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SmallDots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline within Cards
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="coloredDots.showCode = !coloredDots.showCode"
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
        <v-sheet v-if="coloredDots.showCode" tile>
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
                  @click="copy(coloredDots.template)"
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
                  coloredDots.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ColoredDots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline with Avatar Dots
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="avatarDots.showCode = !avatarDots.showCode"
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
        <v-sheet v-if="avatarDots.showCode" tile>
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
                  @click="copy(avatarDots.template)"
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
                  avatarDots.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AvatarDots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline - Reverse Direction
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="reverseDirection.showCode = !reverseDirection.showCode"
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
        <v-sheet v-if="reverseDirection.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="reverseDirection.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="reverseDirection.window = 1"
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
                    copy(reverseDirection.template + reverseDirection.script)
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
            <v-window v-model="reverseDirection.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  reverseDirection.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  reverseDirection.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ReverseDirection />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline with Icon Dots
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="iconDots.showCode = !iconDots.showCode"
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
        <v-sheet v-if="iconDots.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="iconDots.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="iconDots.window = 1"
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
                  @click="copy(iconDots.template + iconDots.script)"
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
            <v-window v-model="iconDots.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  iconDots.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  iconDots.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <IconDots />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dense Timeline Alerts
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
            <v-btn
              text
              class="white--text"
              rounded
              @click="denseAlert.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="denseAlert.window = 1"
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
                  @click="copy(denseAlert.template + denseAlert.script)"
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
            <v-window v-model="denseAlert.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  denseAlert.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  denseAlert.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DenseAlert />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Timeline Opposite Slot
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="oppositeSlot.showCode = !oppositeSlot.showCode"
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
        <v-sheet v-if="oppositeSlot.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="oppositeSlot.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="oppositeSlot.window = 1"
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
                  @click="copy(oppositeSlot.template + oppositeSlot.script)"
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
            <v-window v-model="oppositeSlot.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  oppositeSlot.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  oppositeSlot.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <OppositeSlot />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Advanced Timelines
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="advanced.showCode = !advanced.showCode"
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
        <v-sheet v-if="advanced.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="advanced.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="advanced.window = 1"
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
                  @click="copy(advanced.template + advanced.script)"
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
            <v-window v-model="advanced.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  advanced.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  advanced.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Advanced />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Advanced from "./Advanced";
import AvatarDots from "./AvatarDots";
import ColoredDots from "./ColoredDots";
import DenseAlert from "./DenseAlert";
import IconDots from "./IconDots";
import OppositeSlot from "./OppositeSlot";
import Playground from "./Playground";
import ReverseDirection from "./ReverseDirection";
import SmallDots from "./SmallDots";
import TimelineCard from "./TimelineCard";
import Usage from "./Usage";

export default {
  components: {
    Advanced,
    AvatarDots,
    ColoredDots,
    DenseAlert,
    IconDots,
    OppositeSlot,
    Playground,
    ReverseDirection,
    SmallDots,
    TimelineCard,
    Usage
  },
  data() {
    return {
      usage: {
        template: `<template>
  <v-timeline>
    <v-timeline-item>timeline item</v-timeline-item>
    <v-timeline-item class="text-right">timeline item</v-timeline-item>
    <v-timeline-item>timeline item</v-timeline-item>
  </v-timeline>
</template>`,
        showCode: false
      },
      timelineCard: {
        template: `<template>
  <v-timeline>
    <v-timeline-item v-for="n in 3" :key="n" color="red lighten-2" large>
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus,
          vix an salutandi sententiae.
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>`,
        showCode: false
      },
      smallDots: {
        template: `<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item color="purple lighten-2" fill-dot right>
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon dark size="42" class="mr-4">
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 1</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col class="hidden-sm-and-down text-right" md="2">
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="amber lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
          <v-icon dark size="42">mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col cols="12" md="4">
              Lorem ipsum dolor sit amet, no nam oblique veritus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="cyan lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon class="mr-4" dark size="42">
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 3</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col v-for="n in 3" :key="n" cols="12" md="4">
              Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="red lighten-1" fill-dot left small>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
          <v-icon dark size="42">
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-server-network</v-icon>
            </v-col>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
              voluptatibus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item color="green lighten-1" fill-dot right>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon class="mr-4" dark size="42">
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 5</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
              voluptatibus, vix an salutandi sententiae.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
`,
        showCode: false
      },
      reverseDirection: {
        template: `<template>
  <div>
    <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
    <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="n in 2" :key="n">
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline :reverse="reverse" dense>
      <v-timeline-item v-for="n in 2" :key="n">
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    reverse: true
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
    <v-radio-group row wrap>
      <v-switch v-model="alignTop" label="Toggle align-top" class="mx-4"></v-switch>
      <v-switch v-model="dense" label="Toggle dense" class="mx-4"></v-switch>
      <v-switch v-model="fillDot" label="Toggle fill-dot" class="mx-4"></v-switch>
      <v-switch v-model="hideDot" label="Toggle hide-dot" class="mx-4"></v-switch>
      <v-switch v-model="icon" label="Toggle icon" class="mx-4"></v-switch>
      <v-switch v-model="avatar" label="Toggle avatar" class="mx-4"></v-switch>
      <v-switch v-model="iconColor" label="Toggle icon color" class="mx-4"></v-switch>
      <v-switch v-model="reverse" label="Toggle reverse" class="mx-4"></v-switch>
      <v-switch v-model="left" label="Toggle left" class="mx-4"></v-switch>
      <v-switch v-model="right" label="Toggle right" class="mx-4"></v-switch>
      <v-switch v-model="small" label="Toggle small" class="mx-4"></v-switch>
    </v-radio-group>

    <v-timeline :align-top="alignTop" :dense="dense" :reverse="reverse">
      <v-timeline-item
        v-for="n in 3"
        :key="n"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :icon="icon ? 'mdi-star' : ''"
        :icon-color="iconColor ? 'deep-orange' : ''"
        :left="left"
        :right="right"
        :small="small"
      >
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="http://i.pravatar.cc/64" />
          </v-avatar>
        </template>
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    alignTop: false,
    avatar: false,
    dense: false,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: false,
    reverse: false,
    right: false,
    small: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      oppositeSlot: {
        template: `<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="\`headline font-weight-bold \${year.color}--text\`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="\`headline font-weight-light mb-4 \${year.color}--text\`">
          Lorem ipsum
        </h2>
        <div>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
          sententiae.
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
`,
        script: `
<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      iconDots: {
        template: `<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
      <v-card :color="item.color" dark>
        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="white text--primary">
          <p>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </p>
          <v-btn :color="item.color" class="mx-0" outlined>
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer'
      }
    ]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      denseAlert: {
        template: `<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-title class="blue-grey white--text">
      <span class="title">Logs</span>
      <v-spacer></v-spacer>
      <v-btn :outlined="interval == null" :color="interval == null ? 'white' : 'primary'" dark depressed @click="interval == null ? start() : stop()">
        Realtime Logging
      </v-btn>
    </v-card-title>
    <v-card-text class="py-0">
      <v-timeline dense>
        <v-slide-x-reverse-transition group hide-on-leave>
          <v-timeline-item v-for="item in items" :key="item.id" :color="item.color" small fill-dot>
            <v-alert :value="true" :color="item.color" :icon="item.icon" class="white--text">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
              voluptatibus, vix an salutandi sententiae.
            </v-alert>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
`,
        script: `<script>
const COLORS = ['info', 'warning', 'error', 'success'];
const ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle'
};

export default {
  data: () => ({
    interval: null,
    items: [
      {
        id: 1,
        color: 'info',
        icon: ICONS['info']
      }
    ],
    nonce: 2
  }),

  beforeDestroy() {
    this.stop();
  },

  methods: {
    addEvent() {
      let { color, icon } = this.genAlert();

      const previousColor = this.items[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.items.unshift({
        id: this.nonce++,
        color,
        icon
      });

      if (this.nonce > 6) {
        this.items.pop();
      }
    },
    genAlert() {
      const color = this.genColor();

      return {
        color,
        icon: this.genIcon(color)
      };
    },
    genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon(color) {
      return ICONS[color];
    },
    start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      coloredDots: {
        template: `<template>
  <v-card class="mx-auto" max-width="400">
    <v-card dark flat>
      <v-btn absolute bottom color="pink" right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-card-title class="pa-2 purple lighten-3">
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <h3 class="title font-weight-light text-center grow">Timeline</h3>
        <v-avatar>
          <v-img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-avatar>
      </v-card-title>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/forest.jpg" gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)">
        <v-container class="fill-height">
          <v-row align="center">
            <strong class="display-4 font-weight-regular mr-6">8</strong>
            <v-row justify="end">
              <div class="headline font-weight-light">Monday</div>
              <div class="text-uppercase font-weight-light">February 2015</div>
            </v-row>
          </v-row>
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>5pm</strong>
            </v-col>
            <v-col>
              <strong>New Icon</strong>
              <div class="caption">Mobile App</div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>3-4pm</strong>
            </v-col>
            <v-col>
              <strong>Design Stand Up</strong>
              <div class="caption mb-2">Hangouts</div>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>12pm</strong>
            </v-col>
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>9-11am</strong>
            </v-col>
            <v-col>
              <strong>Finish Home Screen</strong>
              <div class="caption">Web App</div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
`,
        showCode: false
      },
      avatarDots: {
        template: `<template>
  <v-timeline>
    <v-timeline-item v-for="n in 4" :key="n" large>
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64" />
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Lorem ipsum</v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus,
          vix an salutandi sententiae.</v-card-text
        >
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
`,
        showCode: false
      },
      advanced: {
        template: `<template>
  <v-container style="max-width: 600px;">
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="white--text mb-12" color="orange" large>
        <template v-slot:icon>
          <span>JL</span>
        </template>
        <v-text-field v-model="input" hide-details flat label="Leave a comment..." solo @keydown.enter="comment">
          <template v-slot:append>
            <v-btn class="mx-0" depressed @click="comment">
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="pink" small>
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item class="mb-6" hide-dot>
        <span>TODAY</span>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
        <v-row justify="space-between">
          <v-col cols="7">This order was archived.</v-col>
          <v-col class="text-right" cols="5">15:26 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" small>
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip class="white--text ml-0" color="purple" label small>
              APP
            </v-chip>
            Digital Downloads fulfilled 1 item.
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            Order confirmation email was sent to John Leider (john@vuetifyjs.com).
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-4" hide-dot>
        <v-btn class="mx-0" color="white">
          Resend Email
        </v-btn>
      </v-timeline-item>

      <v-timeline-item class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            A $15.00 USD payment was processed on PayPal Express Checkout
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item color="grey" small>
        <v-row justify="space-between">
          <v-col cols="7">
            John Leider placed this order on Online Store (checkout #1937432132572).
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\\d{2}\\sGMT-\\d{4}\\s\\((.*)\\)/, (match, contents, offset) => {
          return \` \${contents
            .split(' ')
            .map((v) => v.charAt(0))
            .join('')}\`;
        })
      });

      this.input = null;
    }
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
