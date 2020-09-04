<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text - Typography
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="typography.showCode = !typography.showCode"
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
        <v-sheet v-if="typography.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="typography.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="typography.window = 1"
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
                  @click="copy(typography.template + typography.script)"
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
            <v-window v-model="typography.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  typography.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  typography.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Typography />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Wrapping And OverFlow Example 1
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                textWrappingAndOverFlow2.showCode = !textWrappingAndOverFlow2.showCode
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
        <v-sheet v-if="textWrappingAndOverFlow2.showCode" tile>
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
                  @click="copy(textWrappingAndOverFlow2.template)"
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
                  textWrappingAndOverFlow2.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextWrappingAndOverFlow2 />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text - Responsive
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="responsive.showCode = !responsive.showCode"
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
        <v-sheet v-if="responsive.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="responsive.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="responsive.window = 1"
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
                  @click="copy(responsive.template + responsive.script)"
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
            <v-window v-model="responsive.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  responsive.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  responsive.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextResponsive />
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
        Text - Captions
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="caption.showCode = !caption.showCode"
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
        <v-sheet v-if="caption.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="caption.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="caption.window = 1"
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
                  @click="copy(caption.template + caption.script)"
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
            <v-window v-model="caption.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  caption.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  caption.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextCaption />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Font Weights And Italics
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                fontWeightsAndItalics.showCode = !fontWeightsAndItalics.showCode
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
        <v-sheet v-if="fontWeightsAndItalics.showCode" tile>
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
                  @click="copy(fontWeightsAndItalics.template)"
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
                  fontWeightsAndItalics.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <FontWeightsAndItalics />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Alignment Example 1
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textAlignment.showCode = !textAlignment.showCode"
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
        <v-sheet v-if="textAlignment.showCode" tile>
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
                  @click="copy(textAlignment.template)"
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
                  textAlignment.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextAlignment />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Alignment Example 2
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textAlignment2.showCode = !textAlignment2.showCode"
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
        <v-sheet v-if="textAlignment2.showCode" tile>
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
                  @click="copy(textAlignment2.template)"
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
                  textAlignment2.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <textAlignment2 />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Decoration
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textDecoration.showCode = !textDecoration.showCode"
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
        <v-sheet v-if="textDecoration.showCode" tile>
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
                  @click="copy(textDecoration.template)"
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
                  textDecoration.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextDecoration />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Opacity
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textOpacity.showCode = !textOpacity.showCode"
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
        <v-sheet v-if="textOpacity.showCode" tile>
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
                  @click="copy(textOpacity.template)"
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
                  textOpacity.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextOpacity />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text RTL Alignment
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="rTLAlignment.showCode = !rTLAlignment.showCode"
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
        <v-sheet v-if="rTLAlignment.showCode" tile>
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
                  @click="copy(rTLAlignment.template)"
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
                  rTLAlignment.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <RTLAlignment />
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
        Text Wrapping And OverFlow Example 2
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="
                textWrappingAndOverFlow.showCode = !textWrappingAndOverFlow.showCode
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
        <v-sheet v-if="textWrappingAndOverFlow.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="textWrappingAndOverFlow.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="textWrappingAndOverFlow.window = 1"
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
                      textWrappingAndOverFlow.template +
                        textWrappingAndOverFlow.style
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
            <v-window v-model="textWrappingAndOverFlow.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  textWrappingAndOverFlow.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  textWrappingAndOverFlow.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextWrappingAndOverFlow />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Transform Example 1
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textTransform.showCode = !textTransform.showCode"
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
        <v-sheet v-if="textTransform.showCode" tile>
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
                  @click="copy(textTransform.template)"
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
                  textTransform.template
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextTransform />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Text Transform Example 2
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="textTransform2.showCode = !textTransform2.showCode"
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
        <v-sheet v-if="textTransform2.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="textTransform2.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="textTransform2.window = 1"
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
                  @click="copy(textTransform2.template + textTransform2.style)"
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
            <v-window v-model="textTransform2.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  textTransform2.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="css" class="py-3 my-0">{{
                  textTransform2.style
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <TextTransform2 />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import TextCaption from './Caption';
import FontWeightsAndItalics from './FontWeightsAndItalics';
import TextResponsive from './Responsive';
import RTLAlignment from './RTLAlignment';
import TextAlignment from './TextAlignment';
import TextAlignment2 from './TextAlignment2';
import TextDecoration from './TextDecoration';
import TextOpacity from './TextOpacity';
import TextTransform from './TextTransform';
import TextTransform2 from './TextTransform2';
import TextWrappingAndOverFlow from './TextWrappingAndOverFlow';
import TextWrappingAndOverFlow2 from './TextWrappingAndOverFlow2';
import Typography from './Typography';

export default {
  components: {
    TextCaption,
    FontWeightsAndItalics,
    TextResponsive,
    RTLAlignment,
    TextAlignment,
    TextAlignment2,
    TextDecoration,
    TextOpacity,
    TextTransform,
    TextTransform2,
    TextWrappingAndOverFlow,
    TextWrappingAndOverFlow2,
    Typography
  },
  data() {
    return {
      caption: {
        template: `<template>
  <div>
    <v-item-group v-model="model" class="pa-2 d-flex justify-center" mandatory>
      <v-item v-for="([icon, bp, size], i) in sizes" :key="i" :value="size">
        <template v-slot="{ active, toggle }">
          <v-hover v-slot:default="{ hover }">
            <div
              :class="[
                active || hover ? 'text--primary' : 'text--secondary',
                hover ? 'elevation-1' : ''
              ]"
              class="ma-3 text-center"
              style="cursor: pointer"
              @click="toggle"
            >
              <v-icon
                :color="active || hover ? 'grey darken-4' : 'grey lighten-1'"
                class="pa-1 mb-1"
                v-text="icon"
              ></v-icon>

              <div class="caption" v-text="bp"></div>
            </div>
          </v-hover>
        </template>
      </v-item>
    </v-item-group>

    <div class="text-h5 mb-6 text-center">
      <code v-text="typeClass"></code>
    </div>

    <v-card
      class="d-flex align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >
      <div :class="\`text-\${model}\`">
        Example Heading
      </div>
    </v-card>
  </div>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    model: "caption",
    sizes: [
      ["mdi-devices", "all", "caption"],
      ["mdi-cellphone-iphone", "sm", "body-2"],
      ["mdi-laptop", "md", "body-1"],
      ["mdi-monitor", "lg", "h6"],
      ["mdi-television", "xl", "h4"]
    ]
  }),

  computed: {
    typeClass() {
      const type = ["text", this.model];
      const [, breakpoint] = this.current;

      if (breakpoint !== "all") {
        type.splice(1, 0, breakpoint);
      }

      return \`.\${type.join("-")}\`;
    },
    current() {
      return this.sizes.find(size => size[2] === this.model);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      fontWeightsAndItalics: {
        template: `<template>
  <div>
    <p class="font-weight-black">Black text.</p>
    <p class="font-weight-bold">Bold text.</p>
    <p class="font-weight-medium">Medium weight text.</p>
    <p class="font-weight-regular">Normal weight text.</p>
    <p class="font-weight-light">Light weight text.</p>
    <p class="font-weight-thin">Thin weight text.</p>
    <p class="font-italic">Italic text.</p>
  </div>
</template>
`,
        showCode: false
      },
      responsive: {
        template: `<template>
  <div>
    <v-item-group
      v-model="model"
      class="pa-2 d-flex justify-center"
      mandatory
    >
      <v-item
        v-for="([icon, bp, size], i) in sizes"
        :key="i"
        :value="size"
      >
        <template v-slot="{ active, toggle }">
          <v-hover v-slot:default="{ hover }">
            <div
              :class="[(active || hover) ? 'text--primary' : 'text--secondary', hover ? 'elevation-1' : '']"
              class="ma-3 text-center"
              style="cursor: pointer"
              @click="toggle"
            >
              <v-icon
                :color="(active || hover) ? 'grey darken-4' : 'grey lighten-1'"
                class="pa-1 mb-1"
                v-text="icon"
              ></v-icon>

              <div
                class="caption"
                v-text="bp"
              ></div>
            </div>
          </v-hover>
        </template>
      </v-item>
    </v-item-group>

    <div class="text-h5 mb-6 text-center">
      <code v-text="typeClass"></code>
    </div>

    <v-card
      class="d-flex align-center justify-center pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >
      <div :class="\`text-\${model}\`">
        Example Heading
      </div>
    </v-card>
  </div>
</template>
`,
        script: `<script>
  export default {
    data: () => ({
      model: 'caption',
      sizes: [
        ['mdi-devices', 'all', 'caption'],
        ['mdi-cellphone-iphone', 'sm', 'body-2'],
        ['mdi-laptop', 'md', 'body-1'],
        ['mdi-monitor', 'lg', 'h6'],
        ['mdi-television', 'xl', 'h4'],
      ],
    }),

    computed: {
      typeClass () {
        const type = ['text', this.model]
        const [, breakpoint] = this.current

        if (breakpoint !== 'all') {
          type.splice(1, 0, breakpoint)
        }

        return \`.\${type.join('-')}\`
      },
      current () {
        return this.sizes.find(size => size[2] === this.model)
      },
    },
  }
</scrpt>
`,
        window: 0,
        showCode: false
      },
      rTLAlignment: {
        template: `<template>
  <div>
    <p class="subtitle-2 text-center">Agnostic RTL Alignment</p>

    <p class="text-sm-left">
      Left aligned text on viewports sized SM (small) or wider for rtl or ltr.
    </p>
    <p class="text-md-left">
      Left aligned text on viewports sized MD (medium) or wider for rtl or ltr.
    </p>
    <p class="text-lg-right">
      Right aligned text on viewports sized LG (large) or wider for rtl or ltr.
    </p>
    <p class="text-xl-left">
      Left aligned text on viewports sized XL (extra-large) or wider for rtl or
      ltr.
    </p>

    <p class="subtitle-2 text-center">Responsive RTL Alignment</p>

    <p class="text-start">Left aligned text on ltr and right aligned on rtl.</p>
    <p class="text-end">Right aligned text on ltr and left aligned on rtl.</p>
  </div>
</template>
`,
        showCode: false
      },
      textAlignment: {
        template: `<template>
  <p class="text-justify">
    Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non,
    euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean
    massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
    Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar
    varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit.
    Pellentesque ut neque.
  </p>
</template>
`,
        showCode: false
      },
      textAlignment2: {
        template: `<template>
  <div>
    <p class="text-left">Left aligned text on all viewport sizes.</p>
    <p class="text-center">Center aligned text on all viewport sizes.</p>
    <p class="text-right">Right aligned text on all viewport sizes.</p>

    <p class="text-sm-left">
      Left aligned text on viewports sized SM (small) or wider.
    </p>
    <p class="text-md-left">
      Left aligned text on viewports sized MD (medium) or wider.
    </p>
    <p class="text-lg-left">
      Left aligned text on viewports sized LG (large) or wider.
    </p>
    <p class="text-xl-left">
      Left aligned text on viewports sized XL (extra-large) or wider.
    </p>
  </div>
</template>
`,
        showCode: false
      },
      textDecoration: {
        template: `<template>
  <div>
    <a href="#" class="text-decoration-none">Non-underlined link</a>

    <div class="text-decoration-line-through">Line-through text</div>

    <div class="text-decoration-overline">Overline text</div>

    <div class="text-decoration-underline">Underline text</div>
  </div>
</template>
`,
        showCode: false
      },
      textOpacity: {
        template: `<template>
  <div>
    <p class="text--primary">High-emphasis has an opacity of 87%.</p>
    <p class="text--secondary">
      Medium-emphasis text and hint text have opacities of 60%.
    </p>
    <p class="text--disabled">Disabled text has an opacity of 38%.</p>
  </div>
</template>
`,
        showCode: false
      },
      textTransform: {
        template: `<template>
  <div>
    <p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>
    <p class="text-capitalize">CapiTaliZed text.</p>
  </div>
</template>
`,
        showCode: false
      },
      textTransform2: {
        template: `<template>
  <div>
    <p class="custom-transform-class text-none">Random TEXT cApitaLization</p>
    <p class="text-break" style="max-width: 4rem;">
      SUBDERMATOGLYPHIC
    </p>
  </div>
</template>`,
        style: `<style lang="sass">
.custom-transform-class
  text-transform: uppercase
</style>`,
        window: 0,
        showCode: false
      },
      textWrappingAndOverFlow: {
        template: `<template>
  <div class="text-no-wrap text-example" style="width: 8rem;">
    This text should overflow the parent.
  </div>
</template>`,
        style: `<style lang="sass">
.text-example
  background-color: rgba(86, 61, 124,.15)
  border: 1px solid rgba(86, 61, 124,.15)
</style>`,
        window: 0,
        showCode: false
      },
      textWrappingAndOverFlow2: {
        template: `<template>
  <div>
    <!-- Block level -->
    <div class="row">
      <div class="col-2 text-truncate">
        Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
        tellus.
      </div>
    </div>

    <!-- Inline level -->
    <span class="d-inline-block text-truncate" style="max-width: 150px;">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>
  </div>
</template>
`,
        showCode: false
      },
      typography: {
        template: `<template>
  <v-item-group mandatory>
    <v-sheet class="overflow-y-auto" max-height="600" tile>
      <v-item
        v-for="[c, text, size, weight, spacing, margin] in classes"
        :key="c"
      >
        <template v-slot="{ active, toggle }">
          <v-sheet
            :color="active ? 'grey lighten-4' : undefined"
            class="px-4 pt-4 pb-3"
            tile
            style="cursor: pointer;"
            @click="toggle"
          >
            <div
              :class="[\`text-\${c}\`, active && \`mb-\${margin}\`]"
              class="transition-swing"
              v-text="text"
            ></div>

            <v-expand-transition>
              <v-responsive v-if="active" max-width="350">
                <div class="d-flex justify-space-between caption">
                  <div>
                    <div class="grey--text mb-2">
                      Font
                    </div>

                    <div class="font-weight-medium">Roboto</div>
                  </div>

                  <div>
                    <div class="grey--text mb-2">
                      Weight
                    </div>

                    <div class="font-weight-medium" v-text="weight"></div>
                  </div>

                  <div>
                    <div class="grey--text mb-2">
                      Size
                    </div>

                    <div class="font-weight-medium" v-text="size"></div>
                  </div>

                  <div>
                    <div class="grey--text text-darken-1 mb-2">
                      Letter spacing
                    </div>

                    <div class="font-weight-medium" v-text="spacing"></div>
                  </div>
                </div>
              </v-responsive>
            </v-expand-transition>
          </v-sheet>
        </template>
      </v-item>
    </v-sheet>
  </v-item-group>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    model: null,
    classes: [
      ["h1", "Heading 1", "6rem", "300", "-0.09375rem", -1],
      ["h2", "Heading 2", "3.75rem", "300", "-0.03125rem", 0],
      ["h3", "Heading 3", "3rem", "400", "normal", 1],
      ["h4", "Heading 4", "2.125rem", "400", "0.015625rem", 2],
      ["h5", "Heading 5", "1.5rem", "400", "normal", 2],
      ["h6", "Heading 6", "1.25rem", "500", "0.009375rem", 3],
      ["subtitle-1", "Subtitle 1", "1rem", "400", "0.009375rem", 4],
      ["subtitle-2", "Subtitle 2", "0.875rem", "500", "0.00625rem", 4],
      ["body-1", "Body 1", "1rem", "400", "0.03125rem", 4],
      ["body-2", "Body 2", "0.875rem", "400", "0.015625rem", 4],
      ["button", "Button", "0.875rem", "500", "0.078125rem", 4],
      ["caption", "Caption", "0.75rem", "400", "0.025rem", 4],
      ["overline", "Overline", "0.75rem", "500", "0.1666666667em", 4]
    ]
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
