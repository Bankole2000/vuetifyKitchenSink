<template>
  <v-container>
    <v-card>
      <v-card-title
        >All about <code class="ml-2">Modules</code>.
        <v-spacer></v-spacer>
        <v-btn
          class="primary white--text"
          href="https://scrimba.com/p/pnyzgAP/cqKK4psq"
          target="_blank"
          ><span>View Video Lesson</span><v-icon right>mdi-play</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <p class="mb-0">
          Due to using a single state tree, all states of our application are
          contained inside one big object. However, as our application grows in
          scale, the store can get really bloated. To help with that, Vuex
          allows us to divide our store into modules.
        </p>

        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in usingModules" :key="i">
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
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
`,
      secondCode: `actions: {
  increment ({ commit }) {
    commit('increment')
  }
}`,
      usingModules: [
        {
          heading: `Creating Modules`,
          desc: `Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/cqKK4psq" target="_blank">View Video Lesson</a>`,
          code: `const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> \`moduleA\`'s state
store.state.b // -> \`moduleB\`'s state
`,
          post: `Note. Vuex Modules can even have their own modules nested within them.`
        },
        {
          heading: `Modules - Local State`,
          desc: `Inside a module's mutations and getters, the first argument received will be the module's local state.`,
          code: `
// Using global $store 
  methods: {
    methodName(){
      this.$store.dispatch('mutationName', payload);
    }
  }
// Using mapActions
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // map \`this.increment()\` to \`this.$store.dispatch('increment')\`

      // \`mapActions\` also supports payloads:
      'incrementBy' // map \`this.incrementBy(amount)\` to \`this.$store.dispatch('incrementBy', amount)\`
    ]),
    ...mapActions({
      add: 'increment' // map \`this.add()\` to \`this.$store.dispatch('increment')\`
    })
  }
}
`,
          post: `This enables us to map several actions to a components methods`
        },
        {
          heading: `Modules Actions - Root State`,
          desc: `Similarly, inside module actions, <code>context.state</code> will expose the local state, and root state will be exposed as <code>context.rootState</code> :`,
          code: `const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
`,
          post: ``
        },
        {
          heading: `Module Getters - Root State`,
          desc: `Also, inside module getters, the root state will be exposed as their 3rd argument:`,
          code: `const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
`,
          post: ``
        },
        {
          heading: `Namespacing Modules`,
          desc: `By default, actions, mutations and getters inside modules are still registered under the global namespace - this allows multiple modules to react to the same mutation/action type.

If you want your modules to be more self-contained or reusable, you can mark it as namespaced with <code>namespaced: true</code>. When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at. For example:`,
          code: `const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      // module assets
      state: () => ({ ... }), // module state is already nested and not affected by namespace option
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // nested modules
      modules: {
        // inherits the namespace from parent module
        myPage: {
          state: () => ({ ... }),
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // further nest the namespace
        posts: {
          namespaced: true,

          state: () => ({ ... }),
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})
`,
          post: `Namespaced getters and actions will receive localized <code>getters</code>, <code>dispatch</code> and <code>commit</code>. In other words, you can use the module assets without writing prefix in the same module. Toggling between namespaced or not does not affect the code inside the module`
        },
        {
          heading: `Accessing global assets in Namespaced modules`,
          desc: `If you want to use global state and getters, <code>rootState</code> and <code>rootGetters</code> are passed as the 3rd and 4th arguments to getter functions, and also exposed as properties on the <code>context</code> object passed to action functions <br /> To dispatch actions or commit mutations in the global namespace, pass <code>{ root: true }</code> as the 3rd argument to <code>dispatch</code> and <code>commit</code>.`,
          code: `modules: {
  foo: {
    namespaced: true,

    getters: {
      // \`getters\` is localized to this module's getters
      // you can use rootGetters via 4th argument of getters
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
        rootGetters['bar/someOtherGetter'] // -> 'bar/someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      // dispatch and commit are also localized for this module
      // they will accept \`root\` option for the root dispatch/commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'
        rootGetters['bar/someGetter'] // -> 'bar/someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}`,
          post: `To dispatch actions or commit mutations in the global namespace, pass <code>{ root: true }</code> as the 3rd argument to <code>dispatch</code> and <code>commit</code>.`
        },
        {
          heading: `Register Global Action in Namespaced Modules`,
          desc: `If you want to register global actions in namespaced modules, you can mark it with <code>root: true</code> and place the action definition to function <code>handler</code>. For example:`,
          code: `{
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true,
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
    }
  }
}
`,
          post: ``
        },
        {
          heading: `Binding Helpers with namespaces`,
          desc: `When binding a namespaced module to components with the <code>mapState</code>, <code>mapGetters</code>, <code>mapActions</code> and <code>mapMutations</code> helpers, it can get a bit verbose:`,
          code: `computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  }),
  ...mapGetters([
    'some/nested/module/someGetter', // -> this['some/nested/module/someGetter']
    'some/nested/module/someOtherGetter', // -> this['some/nested/module/someOtherGetter']
  ])
},
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ])
}

/* 
  In such cases, you can pass the module namespace string as the first 
  argument to the helpers so that all bindings are done using that 
  module as the context. The above can be simplified to:
*/

computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  }),
  ...mapGetters('some/nested/module', [
    'someGetter', // -> this.someGetter
    'someOtherGetter', // -> this.someOtherGetter
  ])
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
`,
          post: `In such cases, you can pass the module namespace string as the first argument to the helpers so that all bindings are done using that module as the context.`
        },
        {
          heading: `Creating helpers using <code>createNamespacedHelpers</code>`,
          desc: `you can create namespaced helpers by using <code>createNamespacedHelpers</code>. It returns an object having new component binding helpers that are bound with the given namespace value:`,
          code: `import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // look up in \`some/nested/module\`
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // look up in \`some/nested/module\`
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
`,
          post: ``
        },
        {
          heading: `Caveat for Plugin Developers`,
          desc: `You may care about unpredictable namespacing for your modules when you create a plugin that provides the modules and let users add them to a Vuex store. Your modules will be also namespaced if the plugin users add your modules under a namespaced module. To adapt this situation, you may need to receive a namespace value via your plugin option`,
          code: `// get namespace value via plugin option
// and returns Vuex plugin function
export function createPlugin (options = {}) {
  return function (store) {
    // add namespace to plugin module's types
    const namespace = options.namespace || ''
    store.dispatch(namespace + 'pluginAction')
  }
}
`,
          post: ``
        },
        {
          heading: `Dynamic module Registration`,
          desc: `You can register a module after the store has been created with the <code>store.registerModule</code> method:`,
          code: `import Vuex from 'vuex'

const store = new Vuex.Store({ /* options */ })

// register a module \`myModule\`
store.registerModule('myModule', {
  // ...
})

// register a nested module \`nested/myModule\`
store.registerModule(['nested', 'myModule'], {
  // ...
})
`,
          post: `The module's state will be exposed as <code>store.state.myModule</code> and <code>store.state.nested.myModule</code>.

Dynamic module registration makes it possible for other Vue plugins to also leverage Vuex for state management by attaching a module to the application's store. For example, the <kbd>vuex-router-sync</kbd>

library integrates vue-router with vuex by managing the application's route state in a dynamically attached module.

You can also remove a dynamically registered module with <code>store.unregisterModule(moduleName)</code>. Note you cannot remove static modules (declared at store creation) with this method.

Note that you may check if the module is already registered to the store or not via <code>store.hasModule(moduleName)</code> method`
        },
        {
          heading: `Preserving Module State`,
          desc: `It may be likely that you want to preserve the previous state when registering a new module, such as preserving state from a Server Side Rendered app. You can achieve this with <code>preserveState</code> option: `,
          code: `store.registerModule('a', module, { preserveState: true })`,
          post: `When you set <code>preserveState: true</code>, the module is registered, actions, mutations and getters are added to the store, but the state is not. It's assumed that your store state already contains state for that module and you don't want to overwrite it`
        },
        {
          heading: `Module Reuse`,
          desc: `Sometimes we may need to create multiple instances of a module, for example:
    <ul><li>
    Creating multiple stores that use the same module (e.g. To avoid stateful singletons in the SSR
    
    when the <code>runInNewContext</code> option is <code>false</code> or <code>'once'</code>);</li>
    <li>Register the same module multiple times in the same store.</li></ul>

If we use a plain object to declare the state of the module, then that state object will be shared by reference and cause cross store/module state pollution when it's mutated.

This is actually the exact same problem with <code>data</code> inside Vue components. So the solution is also the same - use a function for declaring module state (supported in 2.3.0+):`,
          code: `

const MyReusableModule = {
  state: () => ({
    foo: 'bar'
  }),
  // mutations, actions, getters...
}
`,
          post: ``
        }
      ]
    };
  }
};
</script>

<style></style>
