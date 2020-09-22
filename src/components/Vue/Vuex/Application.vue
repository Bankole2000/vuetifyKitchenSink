<template>
  <v-container>
    <v-card>
      <v-card-title>Application Structure. </v-card-title>
      <v-card-text>
        <p>
          Vuex doesn't really restrict how you structure your code. Rather, it
          enforces a set of high-level principles:
        </p>
        <ol>
          <li>Application level state is centralized in the store</li>
          <li>
            The only way to mutate the state by commiting mutations, which are
            synchronous transactions.
          </li>
          <li>
            Asynchronous logic should be encapsulated in, and can be composed
            with actions.
          </li>
        </ol>
        <p>
          As long as you follow these rules, it's up to you how to structure
          your project. If your store file gets too big, simply start splitting
          the actions, mutations and getters into separate files.
        </p>
        <p>
          For any non-trivial app, we will likely need to leverage modules.
          Here's an example project structure:
        </p>
        <prism class="py-3 mt-0 mb-3" language="bash">{{ firstCode }}</prism>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import 'prismjs/components/prism-bash';
export default {
  data() {
    return {
      firstCode: `├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module

`
    };
  }
};
</script>

<style></style>
