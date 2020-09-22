<template>
  <v-container>
    <v-card>
      <v-card-title>
        Using Vuex - Installation
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in installation" :key="i">
            <v-expansion-panel-header
              ><span class="font-weight-light text-h6">{{
                item.method
              }}</span></v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-divider class="mb-4"></v-divider>
              <p v-html="item.desc"></p>
              <prism :language="item.language" class="py-3 my-0">{{
                item.code
              }}</prism>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      <v-card-title
        >Getting Started <v-spacer></v-spacer>
        <v-btn
          class="primary white--text"
          href="https://scrimba.com/p/pnyzgAP/cMPa2Uk"
          target="_blank"
          ><span>View Video Lesson</span><v-icon right>mdi-play</v-icon></v-btn
        ></v-card-title
      >
      <v-card-text>
        <span class="font-weight-light subtitle-1"
          >At the center of every Vuex application is the store. A "store" is
          basically a container that holds your application state. There are two
          things that make a Vuex store different from a plain global
          object:</span
        >
        <ol>
          <li>
            Vuex stores are reactive. When Vue components retrieve state from
            it, they will reactively and efficiently update if the store's state
            changes.
          </li>
          <li>
            You cannot directly mutate the store's state. The only way to change
            a store's state is by explicitly committing mutations. This ensures
            every state change leaves a track-able record, and enables tooling
            that helps us better understand our applications.
          </li>
        </ol>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in started" :key="i">
            <v-expansion-panel-header
              ><span
                class="font-weight-light text-h6"
                v-html="item.heading"
              ></span
            ></v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-divider class="mb-4"></v-divider>
              <p v-html="item.desc"></p>
              <prism language="js" class="py-3 my-0">{{ item.code }}</prism>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import 'prismjs/components/prism-bash';

export default {
  data() {
    return {
      installation: [
        {
          method: `Installing with HTML (cdn)`,
          desc: `Download the latest version of <code>Vue</code> from <a href="https://vuejs.org/js/vue.js" target="_blank">This link</a> and <code>Vuex</code> from <a href="https://unpkg.com/vuex" target="_blank">This link</a> and include in the project`,
          code: `<script src="/path/to/vue.js"></scrpt>
<script src="/path/to/vuex.js"></scrpt>
`,
          language: `html`
        },
        {
          method: `Installing with NPM`,
          desc: `Run the following commands in the console in the project folder`,
          code: `npm install vuex --save

# If using Vue 3.0 + Vuex 4.0:
npm install vuex@next --save
`,
          language: `bash`
        },
        {
          method: `Installing with Vue 2`,
          desc: `Add the following code in the <kbd>main.js</kbd> file`,
          code: `import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
`,
          language: `js`
        },
        {
          method: `Installing with Vue 3`,
          desc: `Add the following code in the <kbd>main.js</kbd> file`,
          code: `import { createApp } from 'vue'
import { createStore } from 'vuex'

const app = createApp({ ... })
const store = createStore({ ... })

app.use(store)
`,
          language: `js`
        }
      ],
      started: [
        {
          heading: `Creating a store in <code>Vuex 3.x</code> (for <code>Vue 2</code>)`,
          desc: `Add the following code to the <kbd>main.js</kbd> file.<br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/cMPa2Uk" target="_blank">View Video Lesson</a>`,
          code: `import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
`
        },
        {
          heading: `Creating a store in <code>Vuex 4.x</code> (for <code>Vue 3</code>)`,
          desc: `Add the following code to the <kbd>main.js</kbd> file`,
          code: `import { createStore } from 'vuex'
import { createApp } from 'vue'

const store = createStore({
  state () {
    return {
      count: 1
    }
  }
})

const app = createApp({ /* your root component */ })
app.use(store)
`
        },
        {
          heading: `Triggering a <kbd>state</kbd> Change`,
          desc: `Now, you can access the state object as <code>store.state</code>, and trigger a state change with the <code>store.commit</code> method:`,
          code: `store.commit('increment') // Invoke the increment mutation and changes the state

console.log(store.state.count) // -> 1`
        },
        {
          heading: `Making the store globally accessible`,
          desc: `In order to have an access to <code>this.$store</code> property in your Vue components, you need to provide the created store to Vue instance. Vuex has a mechanism to "inject" the store into all child components from the root component with the <code>store</code> option:`,
          code: `new Vue({
  el: '#app',
  store
})
`
        },
        {
          heading: `Commiting a mutation from a component's method`,
          desc: `With the <code>store</code> object globally accessible, we can commit a mutation from any components method`,
          code: `methods: {
  increment() {
    this.$store.commit('increment') // will invode 'increment' mutation on store state
    console.log(this.$store.state.count)
  }
}`
        }
      ]
    };
  }
};
</script>

<style></style>
