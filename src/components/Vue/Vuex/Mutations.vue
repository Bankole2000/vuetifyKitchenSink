<template>
  <v-container>
    <v-card>
      <v-card-title
        >All about <code class="ml-2">Mutations</code>.
        <v-spacer></v-spacer>
        <v-btn
          class="primary white--text"
          href="https://scrimba.com/p/pnyzgAP/ckMZp4HN"
          target="_blank"
          ><span>View Video Lesson</span><v-icon right>mdi-play</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <p>
          The only way to actually change state in a Vuex store is by committing
          a mutation. Vuex mutations are very similar to events: each mutation
          has a string type and a handler. The handler function is where we
          perform actual state modifications, and it will receive the state as
          the first argument:
        </p>
        <prism class="py-3 mt-0 mb-3" language="js">{{ firstCode }}</prism>
        <p>
          You cannot directly call a mutation handler. Think of it more like
          event registration:
          <span class="font-italic"
            >"When a mutation with type <code>increment</code> is triggered,
            call this handler."</span
          >
          To invoke a mutation handler, you need to call
          <code>store.commit</code> with its type:
        </p>
        <prism class="py-3 mt-0 mb-3" language="js">{{ secondCode }}</prism>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in usingMutations" :key="i">
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
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstCode: `const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // mutate state
      state.count++
    }
  }
})
`,
      secondCode: `store.commit('increment')`,
      usingMutations: [
        {
          heading: `Commit with Payload (single variable)`,
          desc: `You can pass an additional argument to <code>store.commit</code>, which is called the <em>payload</em> for the mutation. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/ckMZp4HN" target="_blank">View Video Lesson</a>`,
          code: `// ...
mutations: {
  increment (state, n) {
    state.count += n
  }
}
// Invoking the mutation would look something this (variable as payload)
store.commit('increment', 10)
`,
          post: ``
        },
        {
          heading: `Commit with Payload (object)`,
          desc: `In most cases, the payload should be an object so that it can contain multiple fields, and the recorded mutation will also be more descriptive:`,
          code: `// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
// Invoking the mutation would look like this (object as payload)
store.commit('increment', {
  amount: 10
})
`,
          post: `This enables us to send a lot more data to the store`
        },
        {
          heading: `Object-Style Commit`,
          desc: `An alternative way to commit a mutation is by directly using an object that has a <code>type</code> property:`,
          code: `store.commit({
  type: 'increment',
  amount: 10
})
// The mutation can still remain the same when using object-style commit
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}`,
          post: `When using object-style commit, the entire object will be passed as the payload to mutation handlers, so the handler remains the same`
        },
        {
          heading: `Mutations follow Vue's Reactivity Rules`,
          desc: `Since a Vuex store's state is made reactive by Vue, when we mutate the state, Vue components observing the state will update automatically. This also means Vuex mutations are subject to the same reactivity caveats when working with plain Vue:
          <ol><li>Prefer initializing your store's initial state with all desired fields upfront.</li><li>When adding new properties to an Object, you should either: <br/><ul><li>Use <kbd>Vue.set(obj, 'newProp', 123)</kbd>, or</li><li>Replace that Object with a fresh one. For example, using the object spread syntax we can write it like this:</li><ul></li></ol>`,
          code: `state.obj = { ...state.obj, newProp: 123 }
`,
          post: `This way we can ensure Mutations follow Vue's Reactivity Rules`
        },
        {
          heading: `Mutations must be Synchronous`,
          desc: `One important rule to remember is that <span class="text-decoration-underline">mutation handler functions must be synchronous</span>. Why? Consider the following example:`,
          code: `.mutations: {
  someBadMutation (state) { 
    api.callAsyncMethod(() => {
      state.count++ // ❌ Bad Mutation 
      // Why? Because the callback will not be called yet when the mutation is committed, 
      // and there's no way know when the callback will actually be called.
    })
  }, 
}
// ✅ For Asynchronous changes to state, use "actions" NOT "mutations".
`,
          post: `<span class="text-decoration-underline">Use "actions" to commit changes to state asynchronously, and <span class="error--text">DO NOT</span> run async code in "mutations"</span>`
        },
        {
          heading: `Commiting Mutations in Components`,
          desc: `You can commit mutations in components with <code>this.$store.commit('xxx')</code>, or use the <code>mapMutations</code> helper which maps component methods to <code>store.commit</code> calls (requires root <code>store</code> injection):`,
          code: `import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // map \`this.increment()\` to \`this.$store.commit('increment')\`

      // \`mapMutations\` also supports payloads:
      'incrementBy' // map \`this.incrementBy(amount)\` to \`this.$store.commit('incrementBy', amount)\`
    ]),
    ...mapMutations({
      add: 'increment' // map \`this.add()\` to \`this.$store.commit('increment')\`
    })
  }
}
`,
          post: `You can commit mutations in components with <kbd>this.$store.commit('xxx')</kbd>`
        },
        {
          heading: `The Need for Vuex Actions`,
          desc: `Asynchronicity combined with state mutation can make your program very hard to reason about. For example, when you call two methods both with async callbacks that mutate the state, how do you know when they are called and which callback was called first? This is exactly why we want to separate the two concepts. In Vuex, mutations are synchronous transactions:`,
          code: `store.commit('increment')
// any state change that the "increment" mutation may cause
// should be done at this moment.`,
          post: `To handle asynchronous operations, Vuex introduces Actions.`
        }
      ]
    };
  }
};
</script>

<style></style>
