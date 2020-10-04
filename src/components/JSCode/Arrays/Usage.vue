<template>
  <v-container>
    <v-card>
      <v-card-title>
        Intro to Array methods & Array properties
      </v-card-title>
      <v-card-text>
        <p>
          Arrays are list-like objects whose prototype has methods to perform
          traversal and mutation operations. Neither the length of a JavaScript
          array nor the types of its elements are fixed. Since an array's length
          can change at any time, and data can be stored at non-contiguous
          locations in the array.
        </p>
        <prism class="py-3 mt-0 mb-3" language="js">{{ firstCode }}</prism>
        <p></p>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel v-for="(item, i) in basicArrayUsage" :key="i">
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
      firstCode: `// Creating an array
let fruits = ['Apple', 'Banana']
console.log(fruits.length) // 2 - no of elements in the array
`,
      basicArrayUsage: [
        {
          heading: `Creating Arrays`,
          desc: `There are multiple ways of creating arrays. The most common ways are <ul><li>Initializing a variable with an empty array e.g.<kbd>myArr = []</kbd></li><li>Initializing an array with a specified length e.g. <kbd>myArr = Array(&lt;length&gt;).fill('element')</kbd></li><li>Using <code>Array.from(iterable)</code> on an array-like or iterable object or string e.g. <kbd>myArr = Array.from('foo')</kbd></li><li>Desctructuring an object/collection into square brackets e.g. <kbd>myArr = [...document.querySelectorAll('p')]</kbd></li></ul>`,
          code: `// Creating an empty array
myArr = []

// Array with specified length
myArr = Array(4).fill(Array(4)) // A 2d array 4x4 array

// Using Array.from 
myArr = Array.from('foo') // = ['f','o','o']`,
          post: ``
        }
      ]
    };
  }
};
</script>

<style></style>
