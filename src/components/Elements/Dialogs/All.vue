<template>
  <v-container>
    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Basic Usage - Dialogs / Modals
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
        Dialogs - Forms
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="form.showCode = !form.showCode"
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
        <v-sheet v-if="form.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="form.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="form.window = 1"
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
                  @click="copy(form.template + form.script)"
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
            <v-window v-model="form.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  form.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{ form.script }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <ModalForm />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Fullscreen
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="fullscreen.showCode = !fullscreen.showCode"
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
        <v-sheet v-if="fullscreen.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="fullscreen.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="fullscreen.window = 1"
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
                  @click="copy(fullscreen.template + fullscreen.script)"
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
            <v-window v-model="fullscreen.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  fullscreen.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  fullscreen.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Fullscreen />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Loader
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="loader.showCode = !loader.showCode"
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
        <v-sheet v-if="loader.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="loader.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="loader.window = 1"
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
                  @click="copy(loader.template + loader.script)"
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
            <v-window v-model="loader.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  loader.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  loader.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Loader />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Modals
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="modal.showCode = !modal.showCode"
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
        <v-sheet v-if="modal.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="modal.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="modal.window = 1"
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
                  @click="copy(modal.template + modal.script)"
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
            <v-window v-model="modal.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  modal.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  modal.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Modal />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Nested
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="nested.showCode = !nested.showCode"
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
        <v-sheet v-if="nested.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="nested.window = 0"
              >Template</v-btn
            >
            <v-btn text class="white--text" rounded @click="nested.window = 1"
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
                  @click="copy(nested.template + nested.script)"
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
            <v-window v-model="nested.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  nested.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  nested.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Nested />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Overflowed
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="overflowed.showCode = !overflowed.showCode"
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
        <v-sheet v-if="overflowed.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="overflowed.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="overflowed.window = 1"
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
                  @click="copy(overflowed.template + overflowed.script)"
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
            <v-window v-model="overflowed.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  overflowed.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  overflowed.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Overflowed />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Scrollable
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="scrollable.showCode = !scrollable.showCode"
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
        <v-sheet v-if="scrollable.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="scrollable.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="scrollable.window = 1"
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
                  @click="copy(scrollable.template + scrollable.script)"
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
            <v-window v-model="scrollable.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  scrollable.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  scrollable.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <Scrollable />
      </v-container>
    </v-card>

    <v-card class="mx-auto my-6" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Dialogs - Without Activator
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="withoutActivator.showCode = !withoutActivator.showCode"
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
        <v-sheet v-if="withoutActivator.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="withoutActivator.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="withoutActivator.window = 1"
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
                    copy(withoutActivator.template + withoutActivator.script)
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
            <v-window v-model="withoutActivator.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  withoutActivator.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  withoutActivator.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <WithoutActivator />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import ModalForm from './Form';
import Fullscreen from './Fullscreen';
import Loader from './Loader';
import Modal from './Modal';
import Nested from './Nested';
import Overflowed from './Overflowed';
import Scrollable from './Scrollable';
import Usage from './Usage';
import WithoutActivator from './WithoutActivator';

export default {
  components: {
    ModalForm,
    Fullscreen,
    Loader,
    Modal,
    Nested,
    Overflowed,
    Scrollable,
    Usage,
    WithoutActivator
  },
  data() {
    return {
      form: {
        template: `<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump'
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data: () => ({
    dialog: false
  })
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      fullscreen: {
        template: `<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle
                >Set the content filtering level to restrict apps that can be
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle
                >Require password for purchase or use password to restrict
                purchase</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle
                >Notify me about updates to apps or games that I
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle
                >Auto-update apps at any time. Data charges may
                apply</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle
                >Automatically add home screen widgets</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      loader: {
        template: `<template>
  <div class="text-center">
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading
    </v-btn>
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false
    };
  },

  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    }
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      modal: {
        template: `<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="dialog = false"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      nested: {
        template: `<template>
  <div>
    <v-row justify="center">
      <v-btn color="primary" class="ma-2" dark @click="dialog = true">
        Open Dialog 1
      </v-btn>
      <v-btn color="primary" class="ma-2" dark @click="dialog2 = true">
        Open Dialog 2
      </v-btn>
      <v-btn color="primary" class="ma-2" dark @click="dialog3 = true">
        Open Dialog 3
      </v-btn>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2" v-bind="attrs" v-on="on">A Menu</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">
                Save
              </v-btn>
            </v-toolbar-items>
            <v-menu bottom right offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-card-text>
            <v-btn
              color="primary"
              dark
              class="ma-2"
              @click="dialog2 = !dialog2"
            >
              Open Dialog 2
            </v-btn>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-2" v-bind="attrs" v-on="on"
                  >Tool Tip Activator</v-btn
                >
              </template>
              Tool Tip
            </v-tooltip>
            <v-list three-line subheader>
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle
                    >Set the content filtering level to restrict apps that can
                    be downloaded</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle
                    >Require password for purchase or use password to restrict
                    purchase</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle
                    >Notify me about updates to apps or games that I
                    downloaded</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle
                    >Auto-update apps at any time. Data charges may
                    apply</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle
                    >Automatically add home screen widgets</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" dark @click="dialog3 = !dialog3">
              Open Dialog 3
            </v-btn>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog3 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me"
        },
        {
          title: "Click Me 2"
        }
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" }
      ]
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      overflowed: {
        template: `<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Use Google's location service?</span>
        </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.
          Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris
          cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo,
          augue in, duis erat proin condimentum in a eget, sed fermentum sed
          vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor.
          Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi
          ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut
          mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus
          luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla
          aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus
          magna neque pellentesque, nulla vel erat. Justo ex quisque nulla
          accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce
          aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede
          placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet
          viverra scelerisque quis quis et tortor, curabitur morbi a. Enim
          tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent
          nunc. Praesent vestibulum integer maxime felis. Neque aenean quia
          vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer
          libero vestibulum, quis blandit scelerisque mattis fermentum nulla,
          tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo
          phasellus aliquam curabitur metus a, nulla justo mattis duis interdum
          vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo
          sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac
          egestas. Et vitae, nulla gravida erat scelerisque nullam nunc
          pellentesque, a dictumst cras augue, purus imperdiet non. Varius
          montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel
          consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor,
          sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac
          quis. Luctus vulputate aut est sem magna, placerat accumsan nunc
          vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor,
          doloribus varius sem tortor vestibulum mollis, eleifend tortor felis
          tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc
          euismod, tortor porta ridiculus potenti, massa tristique nam magna, et
          wisi placerat et erat ante. Eget pede erat in facilisis, fermentum
          venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus
          malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur
          dui pede purus dolor, integer aenean risus taciti nulla eleifend
          accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a.
          Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum
          consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque
          magna mauris, commodo quisque, praesent semper suscipit lobortis nam.
          Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis
          nunc, montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed
          vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
          integer nec nullam class cursus mi, purus arcu lectus. Vel ante
          suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat,
          lectus morbi lobortis at assumenda. Consequat neque purus ipsum
          voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec
          enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est,
          erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et
          faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum
          vestibulum aenean leo ante ultricies, nam cras quis sed penatibus
          amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum
          ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus
          pretium venenatis. Cras pellentesque vel sodales accumsan aenean.
          Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate
          massa. Consequat ipsum luctus quisque adipiscing libero. Wisi
          sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et,
          aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed
          id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus,
          quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede
          justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed
          etiam hendrerit dapibus, quis metus suspendisse nibh. Fringilla tempor
          felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras
          sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam
          nulla justo egestas venenatis, elementum duis vel porta eros, massa
          vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem
          praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam
          reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed
          ultrices. Amet dignissim justo urna feugiat mauris litora, etiam
          accumsan, lobortis a orci suspendisse. Semper ac mauris, varius
          bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer
          quam, at feugiat egestas duis. Urna ligula ante. Leo elementum
          nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id
          potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor,
          ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
          Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus
          tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam,
          eleifend quis integer curabitur sit scelerisque ac, mauris consequat
          luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus.
          Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer,
          dignissim id pede sodales quis, felis dolorem id mauris orci, orci
          tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent
          placerat tincidunt interdum, ac dignissim metus nonummy hendrerit
          wisi, etiam ut. Semper praesent integer fusce, tortor suspendisse,
          augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed,
          mi vestibulum mus nam, morbi mauris neque vitae aliquam proin
          senectus. Ac amet arcu mollis ante congue elementum, inceptos eget
          optio quam pellentesque quis lobortis, sollicitudin sed vestibulum
          sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At
          tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est
          purus magna augue, non etiam et in wisi id. Non commodo, metus lorem
          facilisi lobortis ac velit, montes neque sed risus consectetuer
          fringilla dolor. Quam justo et integer aliquam, cursus nulla enim
          orci, nam cursus adipiscing, integer torquent non, fringilla per
          maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat
          erat donec ut. Dolor enim erat massa faucibus ultrices in, ante
          ultricies orci lacus, libero consectetuer mauris magna feugiat neque
          dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra
          ligula. Augue curabitur duis dui volutpat, tempus sed ut pede donec.
          Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate
          ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing
          augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi
          placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac
          vivamus amet non aliquam venenatis lectus, sociosqu adipiscing
          consequat nec arcu odio. Blandit orci nec nec, posuere in pretium,
          enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula
          massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet
          non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum
          sem libero iaculis bibendum et eros, eget maecenas non nunc, ad
          pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus
          lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa
          vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
          sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi
          ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam,
          vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
          vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam
          libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
          feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus
          ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut
          vestibulum integer, purus sed lorem pulvinar habitasse turpis.
          +</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Disagree</v-btn
          >
          <v-btn color="green darken-1" text @click="dialog = false"
            >Agree</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      scrollable: {
        template: `<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
            <v-radio label="Bahrain" value="bahrain"></v-radio>
            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
            <v-radio label="Barbados" value="barbados"></v-radio>
            <v-radio label="Belarus" value="belarus"></v-radio>
            <v-radio label="Belgium" value="belgium"></v-radio>
            <v-radio label="Belize" value="belize"></v-radio>
            <v-radio label="Benin" value="benin"></v-radio>
            <v-radio label="Bhutan" value="bhutan"></v-radio>
            <v-radio label="Bolivia" value="bolivia"></v-radio>
            <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
            <v-radio label="Botswana" value="botswana"></v-radio>
            <v-radio label="Brazil" value="brazil"></v-radio>
            <v-radio label="Brunei" value="brunei"></v-radio>
            <v-radio label="Bulgaria" value="bulgaria"></v-radio>
            <v-radio label="Burkina Faso" value="burkina"></v-radio>
            <v-radio label="Burma" value="burma"></v-radio>
            <v-radio label="Burundi" value="burundi"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialogm1: "",
      dialog: false
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
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</scrpt>
`,
        window: 0,
        showCode: false
      },
      withoutActivator: {
        template: `<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      dialog: false
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
