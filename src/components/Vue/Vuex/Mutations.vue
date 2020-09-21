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
          Sometimes we may need to compute derived state based on store state,
          for example filtering through a list of items and counting them:
        </p>
        <prism class="py-3 mt-0 mb-3" language="js">{{ firstCode }}</prism>
        <p>
          If more than one component needs to make use of this, we have to
          either duplicate the function, or extract it into a shared helper and
          import it in multiple places - both are less than ideal.
        </p>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in usingGetters" :key="i">
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
      firstCode: `computed: {
  doneTodosCount () {
    return this.$store.state.todos.filter(todo => todo.done).length
  }
}`,
      usingGetters: [
        {
          heading: `Defining Getters`,
          desc: `Vuex allows us to define "getters" in the store. You can think of them as computed properties for stores. Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/c2Be7TB" target="_blank">View Video Lesson</a>`,
          code: `const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
`,
          post: `Getters <span class="text-decoration-underline">always receive the <code>state</code> as their 1st argument</span>`
        },
        {
          heading: `Accessing <code>getters</code> as Properties`,
          desc: `<code>getters</code> are exposed on the <code>store.getters</code> object, and you access values as properties
          eg <br /><kbd>store.getters.doneTodos /* -> [{ id: 1, text: '...', done: true }]*/</kbd><br />
          Getters can also receive other getters as the 2nd argument e.g <br/> <kbd>getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}</kbd><br />We can now easily make use of it inside any component:`,
          code: `computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}`,
          post: `Note that getters accessed as properties are cached as part of Vue's reactivity system.`
        },
        {
          heading: `Accessing <code>getters</code> as Methods`,
          desc: `You can also pass arguments to <code>getters</code> by returning a function. This is particularly useful when you want to query an array in the store:`,
          code: `getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
// You can then call the getter as a method and pass in args
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }`,
          post: `Note that getters accessed via methods will run each time you call them, and the result is not cached`
        },
        {
          heading: `Using the <code>mapGetters</code> Helper`,
          desc: `The <code>mapGetters</code> helper simply maps store getters to local computed properties:`,
          code: `import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
`,
          post: `This way we can access getters just like any other local computed property`
        },
        {
          heading: `Map Getter to a different name`,
          desc: `If you want to map a getter to a different name, use an object:`,
          code: `...mapGetters({
  // map \`this.doneCount\` to \`this.$store.getters.doneTodosCount\`
  doneCount: 'doneTodosCount'
})
`,
          post: `This way you can give getters <span class="text-decoration-underline">different names</span> when mapping them as component computed properties`
        }
      ]
    };
  }
};
</script>

<style></style>
