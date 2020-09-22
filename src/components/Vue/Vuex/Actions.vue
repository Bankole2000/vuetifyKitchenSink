<template>
  <v-container>
    <v-card>
      <v-card-title
        >All about <code class="ml-2">Actions</code>.
        <v-spacer></v-spacer>
        <v-btn
          class="primary white--text"
          href="https://scrimba.com/p/pnyzgAP/c6ggR3cG"
          target="_blank"
          ><span>View Video Lesson</span><v-icon right>mdi-play</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <p class="mb-0">
          Actions are very similar to Mutations, the differences being that:
        </p>
        <ol>
          <li>Instead of mutating state, Actions commit mutations.</li>
          <li>Actions can contain arbitrary asynchronous operations.</li>
        </ol>
        Here's an example:
        <prism class="py-3 mt-0 mb-3" language="js">{{ firstCode }}</prism>
        <p>
          Action handlers receive a context object which exposes the same set of
          methods/properties on the store instance, so you can call
          <code>context.commit</code> to commit a mutation, or access the state
          and getters via <code>context.state</code> and
          <code>context.getters</code>. We can even call other actions with
          <code>context.dispatch</code>. We will see why this context object is
          not the store instance itself when we introduce Modules later.
          <br />
          In practice, we often use ES2015 argument destructuring to simplify
          the code a bit (especially when we need to call commit multiple
          times):
        </p>
        <prism class="py-3 mt-0 mb-3" language="js">{{ secondCode }}</prism>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in usingActions" :key="i">
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
      usingActions: [
        {
          heading: `Dispatching Actions`,
          desc: `Actions are triggered with the <code>store.dispatch</code> method. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/c6ggR3cG" target="_blank">View Video Lesson</a>`,
          code: `// basic dispatching of action action
store.dispatch('increment')

// We Can Perform Async operations in an action
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment') // ✅  Good! will work perfectly and can be traced
    }, 1000)
  }
}

/* *** Actions support the same payload format and object-style dispatch: *** */
// dispatch with a payload
store.dispatch('incrementAsync', {
  amount: 10
})

// dispatch with an object
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

/*
  A practical real-world example of applying actions:
  An action to checkout a shopping cart, which involves calling 
  an async API and committing multiple mutations:
 */

actions: {
  checkout ({ commit, state }, products) {
    // save the items currently in the cart
    const savedCartItems = [...state.cart.added]
    // send out checkout request, and optimistically
    // clear the cart
    commit(types.CHECKOUT_REQUEST)
    // the shop API accepts a success callback and a failure callback
    shop.buyProducts(
      products,
      // handle success
      () => commit(types.CHECKOUT_SUCCESS),
      // handle failure
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }
}
`,
          post: `Note we are performing a flow of asynchronous operations, and recording the side effects (state mutations) of the action by committing them.`
        },
        {
          heading: `Dispatching Actions in Components`,
          desc: `You can dispatch actions in components with <code>this.$store.dispatch('xxx')</code>, or use the mapActions helper which maps component methods to <code>store.dispatch</code> calls (requires root <code>store</code> injection):`,
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
          heading: `Composing Actions`,
          desc: `Actions are often asynchronous, so how do we know when an action is done? And more importantly, how can we compose multiple actions together to handle more complex async flows?

The first thing to know is that <code>store.dispatch</code> can handle Promise returned by the triggered action handler and it also returns Promise:`,
          code: `actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}

// Now we can add a '.then()' to the dispatch
store.dispatch('actionA').then(() => {
  // ...run some more code here
})

// Using the action in Another Action
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
`,
          post: ``
        },
        {
          heading: `Actions with Async/Await`,
          desc: `SFinally, if we make use of async / await , we can compose our actions like this:`,
          code: `// assuming \`getData()\` and \`getOtherData()\` return Promises

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for \`actionA\` to finish
    commit('gotOtherData', await getOtherData())
  }
}
`,
          post: `This way we can use Actions with Async/await. It's possible for a store.dispatch to trigger multiple action handlers in different modules. In such a case the returned value will be a Promise that resolves when all triggered handlers have been resolved.`
        }
      ]
    };
  }
};
</script>

<style></style>
