<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <p class="text-h5">LifeCycle Hooks Playground</p>
        </v-row>

        <v-row justify="space-around">
          <v-checkbox
            v-model="beforeCreate"
            class="mx-2"
            label="BeforeCreate"
            disabled
          ></v-checkbox>
          <v-checkbox
            v-model="created"
            class="mx-2"
            label="Created"
          ></v-checkbox>
          <v-checkbox
            v-model="beforeMount"
            class="mx-2"
            label="BeforeMount"
          ></v-checkbox>
          <v-checkbox
            v-model="mounted"
            class="mx-2"
            label="Mounted"
          ></v-checkbox>
          <v-checkbox
            v-model="beforeUpdate"
            class="mx-2"
            label="BeforeUpdate"
          ></v-checkbox>
          <v-checkbox
            v-model="updated"
            class="mx-2"
            label="Updated"
          ></v-checkbox>
          <v-checkbox
            v-model="beforeDestroy"
            class="mx-2"
            label="BeforeDestroy"
          ></v-checkbox>
          <v-checkbox
            v-model="destroyed"
            class="mx-2"
            label="Destroyed"
          ></v-checkbox>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <p>
              Enable the life Cycle Hooks and refresh the todo list to view them
              in action - Results can be viewed in the browser console
            </p>
            <v-btn block color="primary" class="ma-2" @click="refreshTodoList"
              >Refresh TodoList</v-btn
            >
            <!-- <v-btn block color="warning" class="ma-2">Reset Options</v-btn>
            <v-btn block color="info" class="ma-2">Test with Snackbar</v-btn> -->
          </v-col>
          <v-col cols="12" sm="6">
            <v-card>
              <TodoList
                :beforeCreate="beforeCreate"
                :beforeMounted="beforeMount"
                :beforeUpdate="beforeUpdate"
                :beforeDestroy="beforeDestroy"
                :created="created"
                :mounted="mounted"
                :updated="updated"
                :destroyed="destroyed"
                :key="todoListKey"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoList from './TodoList';
export default {
  components: {
    TodoList
  },
  data() {
    return {
      beforeCreate: true,
      beforeDestroy: false,
      beforeMount: false,
      beforeUpdate: false,
      created: false,
      mounted: false,
      updated: false,
      destroyed: false,
      todoListKey: 0
    };
  },
  methods: {
    refreshTodoList() {
      this.todoListKey += 1;
    }
  }
};
</script>

<style></style>
