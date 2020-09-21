<template>
  <v-container>
    <v-card>
      <v-card-title>Different ways of using Vuex State</v-card-title>
      <v-card-text>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in usingState" :key="i">
            <v-expansion-panel-header
              ><span
                class="font-weight-light text-h6"
                v-html="item.heading"
              ></span
            ></v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-divider class="mb-4"></v-divider>
              <p v-html="item.desc"></p>
              <prism language="js" class="py-3 mt-0 mb-3">{{
                item.code
              }}</prism>
              <p v-html="item.post"></p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <blockquote class="blockquote">
          <span
            class="red accent-2 font-weight-regular rounded white--text px-3"
            >&nbsp; Note:</span
          >
          Using Vuex doesn't mean you should put all the state in Vuex. Although
          putting more state into Vuex makes your state mutations more explicit
          and debuggable, sometimes it could also make the code more verbose and
          indirect. If a piece of state strictly belongs to a single component,
          it could be just fine leaving it as local state. You should weigh the
          trade-offs and make decisions that fit the development needs of your
          app.
        </blockquote>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      usingState: [
        {
          heading: `Getting Vuex State into Vue Components`,
          desc: `By providing the <code>store</code> option to the root instance (i.e. in the <kbd>main.js</kbd> file), the store will be injected into all child components of the root and will be available on them as <code>this.$store</code> <br />Since Vuex stores are reactive, the simplest way to "retrieve" state from it is simply returning some store state from within a computed property. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/cWw3Zhb" target="_blank">View Video Lesson</a>`,
          code: `const Counter = {
  template: \`<div>{{ count }}</div>\`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
`,
          post: `Whenever <code>store.state.count</code> changes, it will cause the computed property to re-evaluate, and trigger associated DOM updates.`
        },
        {
          heading: `Using the <kbd>mapState</kbd> helper`,
          desc: `When a component needs to make use of multiple store state properties or getters, declaring all these computed properties can get repetitive and verbose. To deal with this we can make use of the <code>mapState</code> helper which generates computed getter functions for us, saving us some keystrokes. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/c8Pz7BSK" target="_blank">View Video Lesson</a>`,
          code: `// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,

    // passing the string value 'count' is same as \`state => state.count\`
    countAlias: 'count',

    // to access local state with \`this\`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
`,
          post: `We can also pass a string array to <code>mapState</code> when the name of a mapped computed property is the same as a state sub tree name. i.e. <br/><kbd>computed: mapState([
  /* map this.count to store.state.count */
  'count'
])</kbd>`
        },
        {
          heading: `Using <code>mapState</code> with Object Spread Operator`,
          desc: `Because <code>mapState</code> returns an object, we can easily use it in combination with other local computed properties.`,
          code: `computed: {
  localComputed () { /* ... */ },
  // mix this into the outer object with the object spread operator
  ...mapState({
    // ...
  })
}`,
          post: `Normally, we'd have to use a utility to merge multiple objects into one so that we can pass the final object to computed. However with the object spread operator, we can greatly simplify the syntax`
        }
      ]
    };
  }
};
</script>

<style></style>
