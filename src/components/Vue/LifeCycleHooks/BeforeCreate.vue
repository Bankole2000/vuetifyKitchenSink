<template>
  <v-container>
    <v-card>
      <v-card-text>
        <p>
          The <code>beforeCreate</code> LifeCycle Hook is executed before the
          component is created.
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
          <v-subheader>Use Cases & Examples</v-subheader>

          <v-list-item
            v-for="(item, i) in examples"
            :key="i"
            style="min-height: 30px !important;"
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
          canDo: false
        },
        {
          Text: 'Fetch Data from external source, api, or file',
          subtitle: 'Fetch data',
          canDo: false
        },
        {
          Text: 'Access and edit Virtual and/or Real DOM',
          subtitle: 'Can access the DOM',
          canDo: false
        }
      ],
      examples: [
        {
          desc: `Can be used to add hard coded data to a failed fetch request in the <code>created</code> hook`,
          code: `    beforeCreate: ()=> {
        // define hard coded data object
        this.hardData = {
            n: 21,
            mess: 'hard coded data is used'
        };
    },
    // create hook
    created: function () {
        var self = this;
        // fetch data
        fetch('/data')
        .then((res)=> {
            return res.json();
        })
        .then((data)=> {
            // if all goes well use that
            self.$data.n = data.n;
            self.$data.mess = 'Got data from back end';
        })
        .catch ((e)=> {
            // else use hard data
            self.$data.n = self.hardData.n;
            self.$data.mess = self.hardData.mess + ' : ' + e.message;
        });
    }`
        }
      ]
    };
  }
};
</script>

<style></style>
