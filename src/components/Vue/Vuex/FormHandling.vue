<template>
  <v-container>
    <v-card>
      <v-card-title
        >Form Handling with Vuex
        <v-spacer></v-spacer>
        <v-btn
          class="primary white--text"
          href="https://scrimba.com/p/pnyzgAP/cqKRgEC9"
          target="_blank"
          ><span>View Video Lesson</span><v-icon right>mdi-play</v-icon></v-btn
        >
      </v-card-title>
      <v-card-text>
        <p>
          When using Vuex in strict mode, it could be a bit tricky to use
          <code>v-model</code> on a piece of state that belongs to Vuex:
        </p>
        <prism class="py-3 mt-0 mb-3" language="html">{{ firstCode }}</prism>
        <p>
          Assuming <code>obj</code> is a computed property that returns an
          Object from the store, the <code>v-model</code> here will attempt to
          directly mutate <code>obj.message</code>
          when the user types in the input. In strict mode, this will result in
          an error because the mutation is not performed inside an explicit Vuex
          mutation handler. The "Vuex way" to deal with it is binding the
          <code>&lt;input&gt;</code>'s value and call a method on the
          <code>input</code> or <code>change</code> event:
        </p>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in vuexFormHandling" :key="i">
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
      firstCode: `<input v-model="obj.message">
`,
      vuexFormHandling: [
        {
          heading: `Databinding with Vuex`,
          desc: `The "Vuex way" to deal with it is binding the <code>&lt;input&gt;</code>'s value and call a method on the input or change event:. <br/><br/> <a class=" text-decoration-none primary white--text py-2 px-3" href="https://scrimba.com/p/pnyzgAP/cqKRgEC9" target="_blank">View Video Lesson</a>`,
          code: `// in component Template
<input :value="message" @input="updateMessage">

// ... in component Script
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}

// And here's the mutation handler:
// ... in vuex store.js file 
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}

`,
          post: ``
        },
        {
          heading: `Two-way Computed Properties`,
          desc: `Admittedly, the above is quite a bit more verbose than <code>v-model</code> + local state, and we lose some of the useful features from <code>v-model</code> as well. An alternative approach is using a two-way computed property with a setter:`,
          code: `// ... in component template
<input v-model="message">

// ...in component script
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
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
