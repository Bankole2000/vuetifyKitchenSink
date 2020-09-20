<template>
  <v-container>
    <v-card>
      <v-card-text>
        <p>
          The beforeUpdate hook runs after data changes on your component and
          the update cycle begins, right before the DOM is patched and
          re-rendered.

          <span class="text-decoration-underline">
            Use <code>beforeUpdate</code> if you need to get the new state of
            any reactive data on your component before it actually gets
            rendered:
          </span>
        </p>

        <v-divider></v-divider>
        <v-list dense>
          <v-subheader>Attributes and Capabilites</v-subheader>

          <v-list-item
            v-for="(item, i) in attrs"
            :key="i"
            style="min-height: 30px !important;"
          >
            <v-list-item-icon>
              <v-icon v-if="item.canDo" color="success">mdi-check-bold</v-icon>
              <v-icon v-else color="error">mdi-window-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="py-0 my-n1">
              <!-- <span class="success--text" >CAN - </span>
              <span class="error--text" v-else>CANNOT - </span> -->
              <v-list-item-title
                v-if="item.canDo"
                v-html="
                  `<span class='success--text'>CAN - </span> ${item.Text}`
                "
              ></v-list-item-title>
              <v-list-item-title
                v-else
                v-html="
                  `<span class='error--text' >CANNOT - </span> ${item.Text}`
                "
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list dense>
          <v-subheader>Recommended Use Cases & Examples</v-subheader>

          <v-list-item
            v-for="(item, i) in examples"
            :key="i"
            style="min-height: 30px !important;"
            class="mt-3"
          >
            <v-list-item-content class="py-0 my-n1">
              <p class="text-h6" v-html="`${i + 1} - ${item.desc}`"></p>
              <v-spacer></v-spacer>
              <v-btn @click="showCode = !showCode">
                <v-icon left> mdi-xml</v-icon>
                <span
                  ><span v-if="showCode">Hide</span
                  ><span v-else>Show</span> Code</span
                >
              </v-btn>
              <v-expand-transition>
                <div v-if="showCode">
                  <prism language="js" class="py-3 my-0">{{ item.code }}</prism>
                </div>
              </v-expand-transition>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showCode: false,
      attrs: [
        {
          Text:
            'Run <strong>regular js code</strong> without Component Data/methods/properties',
          subtitle: 'Run regular code',
          canDo: true
        },
        {
          Text:
            'Access Global Objects like <code>$vuetify</code>, <code>$router</code>, and <code>$store</code>',
          subtitle: 'Access Global Objects',
          canDo: true
        },
        {
          Text:
            "Access Components' reactive data, methods, and computed properties",
          subtitle: 'Access Component Reactive Data',
          canDo: true
        },
        {
          Text: 'Fetch Data from external source, api, or file',
          subtitle: 'Fetch data',
          canDo: true
        },
        {
          Text: 'Access and edit Virtual and/or Real DOM',
          subtitle: 'Can access the DOM',
          canDo: true
        }
      ],
      examples: [
        {
          desc: `Checking the value of reactive data before rendering to the DOM`,
          code: `<template>
  <div ref="example-element">{{counter}}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },

  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },

  beforeUpdate() {
    console.log(\`At this point, Virtual DOM has not re-rendered or patched yet.\`)
    // Logs the counter value every second, before the DOM updates.
    console.log(this.counter);
  }
}
</scrpt>`
        },
        {
          desc: `<span class='success--text'>CAN</span> be used to access the DOM`,
          code: `<template>
  <div ref="example-element">Example component.</div>
</template>

<script>
export default {
  // when our Vue app is mounted, try to access a DOM element
  beforeUpdate() {     
      console.log(this.$el); // Will return the Component Element  
      console.log(this.$el.textContent) // Example component. 
  }
}
</scrpt>`
        }
      ]
    };
  }
};
</script>

<style></style>
