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
        Dynamic Forms (Create, Add & Delete Entire Form)
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="createDelForm.showCode = !createDelForm.showCode"
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
        <v-sheet v-if="createDelForm.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="createDelForm.window = 0"
              >Template</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="createDelForm.window = 1"
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
                  @click="copy(createDelForm.template + createDelForm.script)"
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
            <v-window v-model="createDelForm.window">
              <v-window-item>
                <prism language="html" class="py-3 my-0">{{
                  createDelForm.template
                }}</prism>
              </v-window-item>
              <v-window-item>
                <prism language="js" class="py-3 my-0">{{
                  createDelForm.script
                }}</prism>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <CreateDelForm />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import CreateDelForm from './CreateDelForm';

export default {
  components: {
    CreateDelForm
  },
  data() {
    return {
      createDelForm: {
        template: `<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center"
            >Add Passenger Details <v-spacer></v-spacer>
            <v-btn
              @click="savePassengerData"
              :loading="loading"
              class="primary white--text"
              ><v-icon left>mdi-content-save</v-icon>Save All Passenger
              Data</v-btn
            >
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-slide-y-transition group>
              <v-card
                class="mx-auto mt-4"
                v-for="(passenger, i) in passengers"
                :key="i"
              >
                <v-card-title class="primary white--text"
                  >Passenger No {{ i + 1 }} &nbsp;
                  <span class="caption"> (index: {{ i }})</span>
                  <v-spacer></v-spacer>
                  <v-btn @click="deletePassenger(i)" fab small color="error"
                    ><v-icon>mdi-window-close</v-icon></v-btn
                  >
                </v-card-title>
                <v-card-text>
                  <v-form :ref="i">
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="passenger.firstname"
                          :rules="nameRules"
                          :counter="10"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="passenger.lastname"
                          :rules="nameRules"
                          :counter="10"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="passenger.email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions
                  ><v-btn text @click="resetPassengerData(i)" color="warning"
                    >Reset</v-btn
                  ></v-card-actions
                >
              </v-card>
            </v-slide-y-transition>
          </v-card-text>
          <v-card-text style="position: relative">
            <v-btn
              @click="addPassenger"
              color="primary"
              dark
              absolute
              top
              right
              fab
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="resetAllPassengerData"
              :loading="loading"
              large
              text
              color="green accent-2"
              ><v-icon left>mdi-restore</v-icon>Reset All</v-btn
            >
            <v-btn
              @click="savePassengerData"
              :loading="loading"
              large
              color="primary accent-2"
              ><v-icon left>mdi-content-save</v-icon>Save All Passenger
              Data</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
`,
        script: `<script>
export default {
  data() {
    return {
      valid: false,
      loading: false,
      passengers: [
        {
          firstname: '',
          lastname: '',
          email: '',
        }
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => !v || v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    };
  },
  methods: {
    addPassenger() {
      this.passengers.push({
        firstname: '',
        lastname: '',
        email: '',
      });
    },
    deletePassenger(i) {
      this.passengers.splice(i, 1);
    },
    resetPassengerData(i) {
      this.$refs[i][0].reset();
    },
    resetAllPassengerData() {
      console.log(this.$refs);
      Object.entries(this.$refs).forEach((element) => {
        element[1][0].reset();
        console.log(element[1][0]);
      });
      console.log(Object.entries(this.$refs));
      // for (item in this.$refs) {
      //   console.log(item);
      // }
    },
    showForm(i) {
      this.$refs[i][0].reset();
      console.log(this.$refs[i][0]);
    },
    savePassengerData() {
      this.loading = true;

      console.log(this.passengers);
      setTimeout(() => {
        this.loading = false;
        this.passengers = [
          {
            firstname: '',
            lastname: '',
            email: ''
          }
        ];
        this.showForm(0);
      }, 2000);
    }
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
