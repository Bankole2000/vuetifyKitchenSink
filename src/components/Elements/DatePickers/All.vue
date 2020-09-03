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
        Basic Usage - Date Picker
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
        Date Pickers - Allowed Dates
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="allowedDates.showCode = !allowedDates.showCode"
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
        <v-sheet v-if="allowedDates.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="allowedDates.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="allowedDates.window = 1"
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
                  @click="copy(allowedDates.template + allowedDates.script)"
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
            <v-window v-model="allowedDates.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  allowedDates.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  allowedDates.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <AllowedDates />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Pickers - Colors
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
        Date Picker - Current Date Indicator
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                currentDateIndicator.showCode = !currentDateIndicator.showCode
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
        <v-sheet v-if="currentDateIndicator.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="currentDateIndicator.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="currentDateIndicator.window = 1"
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
                      currentDateIndicator.template +
                        currentDateIndicator.script
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
            <v-window v-model="currentDateIndicator.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  currentDateIndicator.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  currentDateIndicator.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CurrentDateIndicator />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - DOM Events For Years
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dOMEventsForYear.showCode = !dOMEventsForYear.showCode"
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
        <v-sheet v-if="dOMEventsForYear.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dOMEventsForYear.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dOMEventsForYear.window = 1"
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
                    copy(dOMEventsForYear.template + dOMEventsForYear.script)
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
            <v-window v-model="dOMEventsForYear.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dOMEventsForYear.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dOMEventsForYear.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DOMEventsForYear />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Birthday Picker
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dPBirthdayPicker.showCode = !dPBirthdayPicker.showCode"
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
        <v-sheet v-if="dPBirthdayPicker.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dPBirthdayPicker.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dPBirthdayPicker.window = 1"
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
                    copy(dPBirthdayPicker.template + dPBirthdayPicker.script)
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
            <v-window v-model="dPBirthdayPicker.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dPBirthdayPicker.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dPBirthdayPicker.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DPBirthdayPicker />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Events
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dPEvents.showCode = !dPEvents.showCode"
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
        <v-sheet v-if="dPEvents.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="dPEvents.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="dPEvents.window = 1"
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
                  @click="copy(dPEvents.template + dPEvents.script)"
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
            <v-window v-model="dPEvents.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dPEvents.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dPEvents.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DPEvents />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Multiple dates
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dPMultiple.showCode = !dPMultiple.showCode"
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
        <v-sheet v-if="dPMultiple.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="dPMultiple.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="dPMultiple.window = 1"
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
                  @click="copy(dPMultiple.template + dPMultiple.script)"
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
            <v-window v-model="dPMultiple.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dPMultiple.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dPMultiple.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DPMultiple />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Range
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="dPRange.showCode = !dPRange.showCode"
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
        <v-sheet v-if="dPRange.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="dPRange.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="dPRange.window = 1"
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
                  @click="copy(dPRange.template + dPRange.script)"
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
            <v-window v-model="dPRange.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  dPRange.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  dPRange.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <DPRange />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Formatting Dates
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="formattingDate.showCode = !formattingDate.showCode"
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
        <v-sheet v-if="formattingDate.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="formattingDate.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="formattingDate.window = 1"
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
                  @click="copy(formattingDate.template + formattingDate.script)"
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
            <v-window v-model="formattingDate.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  formattingDate.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  formattingDate.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <formattingDate />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Formatting Dates Using External Libraries
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                formattingDateUsingExternalLibs.showCode = !formattingDateUsingExternalLibs.showCode
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
        <v-sheet v-if="formattingDateUsingExternalLibs.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="formattingDateUsingExternalLibs.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="formattingDateUsingExternalLibs.window = 1"
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
                      formattingDateUsingExternalLibs.template +
                        formattingDateUsingExternalLibs.script
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
            <v-window v-model="formattingDateUsingExternalLibs.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  formattingDateUsingExternalLibs.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  formattingDateUsingExternalLibs.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <formattingDateUsingExternalLibs />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Pickers - Icons
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
            <v-btn text class="white--text" rounded @click="icons.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="icons.window = 1"
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
                  @click="copy(icons.template + icons.script)"
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
            <v-window v-model="icons.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  icons.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  icons.script
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
        Date Pickers - In Dialog And Menu
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="inDialogAndMenu.showCode = !inDialogAndMenu.showCode"
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
        <v-sheet v-if="inDialogAndMenu.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="inDialogAndMenu.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="inDialogAndMenu.window = 1"
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
                    copy(inDialogAndMenu.template + inDialogAndMenu.script)
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
            <v-window v-model="inDialogAndMenu.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  inDialogAndMenu.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  inDialogAndMenu.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <InDialogAndMenu />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Internationalization
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                internationalization.showCode = !internationalization.showCode
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
        <v-sheet v-if="internationalization.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="internationalization.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="internationalization.window = 1"
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
                      internationalization.template +
                        internationalization.script
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
            <v-window v-model="internationalization.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  internationalization.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  internationalization.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Internationalization />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="monthPickers.showCode = !monthPickers.showCode"
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
        <v-sheet v-if="monthPickers.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="monthPickers.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="monthPickers.window = 1"
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
                  @click="copy(monthPickers.template + monthPickers.script)"
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
            <v-window v-model="monthPickers.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  monthPickers.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  monthPickers.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MonthPickers />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Picker - Allowed Months
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPAllowedMonths.showCode = !mPAllowedMonths.showCode"
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
        <v-sheet v-if="mPAllowedMonths.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPAllowedMonths.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPAllowedMonths.window = 1"
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
                    copy(mPAllowedMonths.template + mPAllowedMonths.script)
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
            <v-window v-model="mPAllowedMonths.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPAllowedMonths.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPAllowedMonths.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPAllowedMonths />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Colors
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPColors.showCode = !mPColors.showCode"
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
        <v-sheet v-if="mPColors.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="mPColors.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="mPColors.window = 1"
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
                  @click="copy(mPColors.template + mPColors.script)"
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
            <v-window v-model="mPColors.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPColors.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPColors.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPColors />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Current Month Indicator
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                mPCurrentMonthIndicator.showCode = !mPCurrentMonthIndicator.showCode
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
        <v-sheet v-if="mPCurrentMonthIndicator.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPCurrentMonthIndicator.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPCurrentMonthIndicator.window = 1"
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
                      mPCurrentMonthIndicator.template +
                        mPCurrentMonthIndicator.script
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
            <v-window v-model="mPCurrentMonthIndicator.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPCurrentMonthIndicator.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPCurrentMonthIndicator.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPCurrentMonthIndicator />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Picker - Icons
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPIcons.showCode = !mPIcons.showCode"
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
        <v-sheet v-if="mPIcons.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="mPIcons.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="mPIcons.window = 1"
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
                  @click="copy(mPIcons.template + mPIcons.script)"
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
            <v-window v-model="mPIcons.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPIcons.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPIcons.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPIcons />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Picker - In Dialog And Menu
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPInDialogAndMenu.showCode = !mPInDialogAndMenu.showCode"
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
        <v-sheet v-if="mPInDialogAndMenu.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPInDialogAndMenu.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPInDialogAndMenu.window = 1"
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
                    copy(mPInDialogAndMenu.template + mPInDialogAndMenu.script)
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
            <v-window v-model="mPInDialogAndMenu.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPInDialogAndMenu.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPInDialogAndMenu.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPInDialogAndMenu />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Internationalization
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                mPInternationalization.showCode = !mPInternationalization.showCode
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
        <v-sheet v-if="mPInternationalization.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPInternationalization.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPInternationalization.window = 1"
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
                      mPInternationalization.template +
                        mPInternationalization.script
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
            <v-window v-model="mPInternationalization.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPInternationalization.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPInternationalization.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPInternationalization />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Multiple
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPMultiple.showCode = !mPMultiple.showCode"
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
        <v-sheet v-if="mPMultiple.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPMultiple.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPMultiple.window = 1"
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
                  @click="copy(mPMultiple.template + mPMultiple.script)"
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
            <v-window v-model="mPMultiple.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPMultiple.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPMultiple.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPMultiple />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Read Only
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="mPReadOnly.showCode = !mPReadOnly.showCode"
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
        <v-sheet v-if="mPReadOnly.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPReadOnly.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPReadOnly.window = 1"
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
                  @click="copy(mPReadOnly.template + mPReadOnly.script)"
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
            <v-window v-model="mPReadOnly.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPReadOnly.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPReadOnly.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPReadOnly />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Month Pickers - Setting Picker Width
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                mPSettingPickerWidth.showCode = !mPSettingPickerWidth.showCode
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
        <v-sheet v-if="mPSettingPickerWidth.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPSettingPickerWidth.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="mPSettingPickerWidth.window = 1"
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
                      mPSettingPickerWidth.template +
                        mPSettingPickerWidth.script
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
            <v-window v-model="mPSettingPickerWidth.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  mPSettingPickerWidth.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  mPSettingPickerWidth.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <MPSettingPickerWidth />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Elevation
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
        Reacting To Displayed Month/Year Change
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                reactToDisplayedMonthYearChange.showCode = !reactToDisplayedMonthYearChange.showCode
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
        <v-sheet v-if="reactToDisplayedMonthYearChange.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="reactToDisplayedMonthYearChange.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="reactToDisplayedMonthYearChange.window = 1"
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
                      reactToDisplayedMonthYearChange.template +
                        reactToDisplayedMonthYearChange.script
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
            <v-window v-model="reactToDisplayedMonthYearChange.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  reactToDisplayedMonthYearChange.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  reactToDisplayedMonthYearChange.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ReactToDisplayedMonthYearChange />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Date Picker - Read Only
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
        Date Picker - Setting Picker Width
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
  </v-container>
</template>

<script>
import AllowedDates from './AllowedDates';
import Colors from './Colors';
import CurrentDateIndicator from './CurrentDateIndicator';
import DOMEventsForYear from './DOMEventsForYearMonthDateButtons';
import DPBirthdayPicker from './DPBirthdayPicker';
import DPEvents from './DPEvents';
import DPMultiple from './DPMultiple';
import DPRange from './DPRange';
import FormattingDate from './FormattingDate';
import FormattingDateUsingExternalLibs from './FormattingDateUsingExternalLibs';
import Icons from './Icons';
import InDialogAndMenu from './InDialogAndMenu';
import Internationalization from './Internationalization';
import MonthPickers from './MonthPickers';
import MPAllowedMonths from './MPAllowedMonths';
import MPColors from './MPColors';
import MPCurrentMonthIndicator from './MPCurrentMonthIndicator';
import MPIcons from './MPIcons';
import MPInDialogAndMenu from './MPInDialogAndMenu';
import MPInternationalization from './MPInternationalization';
import MPMultiple from './MPMultiple';
import MPReadOnly from './MPReadOnly';
import MPSettingPickerWidth from './MPSettingPickerWidth';
import PickersElevation from './PickersElevation';
import Playground from './Playground';
import ReactToDisplayedMonthYearChange from './ReactToDisplayedMonthYearchange';
import ReadOnly from './ReadOnly';
import SettingPickerWidth from './SettingPickerWidth';
import Usage from './Usage';

export default {
  components: {
    AllowedDates,
    Colors,
    CurrentDateIndicator,
    DOMEventsForYear,
    DPBirthdayPicker,
    DPEvents,
    DPMultiple,
    DPRange,
    FormattingDate,
    FormattingDateUsingExternalLibs,
    Icons,
    InDialogAndMenu,
    Internationalization,
    MonthPickers,
    MPAllowedMonths,
    MPColors,
    MPCurrentMonthIndicator,
    MPIcons,
    MPInDialogAndMenu,
    MPInternationalization,
    MPMultiple,
    MPReadOnly,
    MPSettingPickerWidth,
    PickersElevation,
    Playground,
    ReactToDisplayedMonthYearChange,
    ReadOnly,
    SettingPickerWidth,
    Usage
  },
  data() {
    return {
      allowedDates: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-4"
      min="2016-06-15"
      max="2018-03-20"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: "2018-03-02"
  }),

  methods: {
    allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      colors: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
    <v-date-picker
      v-model="picker2"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      currentDateIndicator: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker v-model="date1" :show-current="false"></v-date-picker>
    <v-date-picker v-model="date2" show-current="2013-07-13"></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: "2013-07-29"
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dOMEventsForYear: {
        template: ``,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    done: [false, false, false],
    mouseMonth: null
  }),

  methods: {
    contextMenu(year, event) {
      this.$set(this.done, 2, true);

      event.preventDefault();

      alert(\`You have activated context menu for year \${year}\`);
    },
    dblClick(date) {
      this.$set(this.done, 0, true);

      alert(\`You have just double clicked the following date: \${date}\`);
    },
    mouseEnter(month) {
      this.$set(this.done, 1, true);
      this.mouseMonth = month;
    },
    mouseLeave() {
      this.mouseMonth = null;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dPBirthdayPicker: {
        template: `<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Birthday date"
        prepend-icon="event"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: null,
    menu: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dPEvents: {
        template: `<template>
  <v-row justify="space-between">
    <div>
      <div class="subheading">Defined by array</div>
      <v-date-picker
        v-model="date1"
        :events="arrayEvents"
        event-color="green lighten-1"
      ></v-date-picker>
    </div>
    <div>
      <div class="subheading">Defined by function</div>
      <v-date-picker
        v-model="date2"
        :event-color="date => (date[9] % 2 ? 'red' : 'yellow')"
        :events="functionEvents"
      ></v-date-picker>
    </div>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    arrayEvents: null,
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10)
  }),

  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },

  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ["red", "#00f"];
      return false;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dPMultiple: {
        template: `<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-date-picker v-model="dates" multiple></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="Multiple picker in menu"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker v-model="dates" multiple no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    dates: ["2018-09-15", "2018-09-20"],
    menu: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      dPRange: {
        template: `<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-date-picker v-model="dates" range></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="event"
        readonly
      ></v-text-field>
      model: {{ dates }}
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"]
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      formattingDate: {
        template: ``,
        script: `<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return \`\${month}/\${day}/\${year}\`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return \`\${year}-\${month.padStart(2, "0")}-\${day.padStart(2, "0")}\`;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      formattingDateUsingExternalLibs: {
        template: `<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="computedDateFormattedMomentjs"
              clearable
              label="Formatted with Moment.js"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" lg="6">
        <v-menu v-model="menu2" :close-on-content-click="false" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="computedDateFormattedDatefns"
              clearable
              label="Formatted with datefns"
              readonly
              v-bind="attrs"
              v-on="on"
              @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @change="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
import moment from "moment";
import { format, parseISO } from "date-fns";

export default {
  data: () => ({
    // https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments
    date: parseISO(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),

  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, "EEEE, MMMM do yyyy") : "";
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      icons: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      inDialogAndMenu: {
        template: `<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="6" md="4">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)"
            >OK</v-btn
          >
        </v-date-picker>
      </v-dialog>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      internationalization: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="picker"
      :first-day-of-week="0"
      locale="zh-cn"
    ></v-date-picker>
    <v-date-picker
      v-model="picker"
      :first-day-of-week="1"
      locale="sv-se"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      monthPickers: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="picker"
      type="month"
      color="green lighten-1"
    ></v-date-picker>
    <v-date-picker
      v-model="picker2"
      type="month"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 7),
      picker2: new Date().toISOString().substr(0, 7)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPAllowedMonths: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedMonths"
      type="month"
      class="mt-4"
      min="2017-06"
      max="2019-10"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      date: "2017-12"
    };
  },

  methods: {
    allowedMonths: val => parseInt(val.split("-")[1], 10) % 2 === 0
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPColors: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="picker"
      type="month"
      color="green lighten-1"
    ></v-date-picker>
    <v-date-picker
      v-model="picker2"
      type="month"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 7),
      picker2: new Date().toISOString().substr(0, 7)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPCurrentMonthIndicator: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="month1"
      :show-current="false"
      type="month"
    ></v-date-picker>
    <v-date-picker
      v-model="month2"
      type="month"
      show-current="2013-07"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      month1: new Date().toISOString().substr(0, 7),
      month2: "2013-09"
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPIcons: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker
      v-model="picker"
      type="month"
      year-icon="mdi-calendar-blank"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 7)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPInDialogAndMenu: {
        template: `<template>
  <v-row>
    <v-col cols="11" sm="5">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" type="month" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="11" sm="5">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" type="month" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)"
            >OK</v-btn
          >
        </v-date-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPInternationalization: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker v-model="picker" type="month" locale="th"></v-date-picker>
    <v-date-picker v-model="picker" type="month" locale="sv-se"></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 7)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPMultiple: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker v-model="months" type="month" multiple></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    months: ["2018-09", "2018-10"]
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPReadOnly: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker v-model="date" type="month" readonly></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 7)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      mPSettingPickerWidth: {
        template: `<template>
  <v-row justify="space-around">
    <v-date-picker
      v-model="date"
      type="month"
      width="290"
      class="mt-4"
    ></v-date-picker>
    <v-date-picker
      v-model="date"
      full-width
      :landscape="$vuetify.breakpoint.smAndUp"
      type="month"
      class="mt-4"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7)
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      pickersElevation: {
        template: `<template>
  <v-row justify="space-around" align="center">
    <v-date-picker v-model="picker" flat></v-date-picker>

    <v-date-picker v-model="picker" elevation="15"></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: null
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
  <v-row justify="space-around">
    <v-col cols="12">
      <v-row justify="space-around">
        <v-switch v-model="landscape" class="ma-4" label="Landscape"></v-switch>
        <v-switch v-model="reactive" class="ma-4" label="Reactive"></v-switch>
        <v-switch v-model="flat" class="ma-4" label="Flat"></v-switch>
        <v-switch
          v-model="fullWidth"
          class="ma-4"
          label="Full width"
        ></v-switch>
        <v-switch
          v-model="showCurrent"
          class="ma-4"
          label="Show current date"
        ></v-switch>
        <v-switch v-model="month" class="ma-4" label="Month picker"></v-switch>
        <v-switch v-model="multiple" class="ma-4" label="Multiple"></v-switch>
        <v-switch v-model="readonly" class="ma-4" label="Readonly"></v-switch>
        <v-switch v-model="disabled" class="ma-4" label="Disabled"></v-switch>
        <v-switch v-model="enableEvents" class="ma-4" label="Events"></v-switch>
      </v-row>
    </v-col>

    <v-date-picker
      v-model="picker"
      :landscape="landscape"
      :reactive="reactive"
      :flat="flat"
      :full-width="fullWidth"
      :show-current="showCurrent"
      :type="month ? 'month' : 'date'"
      :multiple="multiple"
      :readonly="readonly"
      :disabled="disabled"
      :events="enableEvents ? functionEvents : null"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: false,
      flat: false,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false
    };
  },

  computed: {
    functionEvents() {
      return this.month ? this.monthFunctionEvents : this.dateFunctionEvents;
    }
  },

  methods: {
    dateFunctionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ["red", "#00f"];
      return false;
    },
    monthFunctionEvents(date) {
      const month = parseInt(date.split("-")[1], 10);
      if ([1, 3, 7].includes(month)) return true;
      if ([2, 5, 12].includes(month))
        return ["error", "purple", "rgba(0, 128, 0, 0.5)"];
      return false;
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      reactToDisplayedMonthYearChange: {
        template: `<template>
  <v-row>
    <v-col cols="12" sm="6" class="my-2 px-1">
      <v-date-picker
        ref="picker"
        v-model="date"
        :picker-date.sync="pickerDate"
        full-width
      ></v-date-picker>
    </v-col>
    <v-col cols="12" sm="6" class="my-2 px-1">
      <div class="title">
        Month news ({{ pickerDate || "change month..." }})
      </div>
      <div class="subheading">Change month to see other news</div>
      <ul class="ma-4">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </v-col>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    pickerDate: null,
    notes: [],
    allNotes: [
      "President met with prime minister",
      "New power plant opened",
      "Rocket launch announced",
      "Global warming discussion cancelled",
      "Company changed its location"
    ]
  }),
  watch: {
    pickerDate(val) {
      this.notes = [
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)]
      ].filter((value, index, self) => self.indexOf(value) === index);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      readOnly: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker v-model="date" readonly></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      settingPickerWidth: {
        template: `<template>
  <v-row align="center">
    <v-date-picker v-model="date" width="290" class="mt-4"></v-date-picker>
    <v-date-picker
      v-model="date"
      full-width
      :landscape="$vuetify.breakpoint.smAndUp"
      class="mt-4"
    ></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10)
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      usage: {
        template: `<template>
  <v-row justify="center">
    <v-date-picker v-model="picker"></v-date-picker>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
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
