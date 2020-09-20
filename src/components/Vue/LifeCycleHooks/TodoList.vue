<template>
  <v-container style="max-width: 500px">
    <v-text-field
      v-model="task"
      label="What are you working on?"
      solo
      @keydown.enter="create"
    >
      <v-fade-transition v-slot:append>
        <v-icon v-if="task" @click="create">
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="(task.done && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.done && 'grey--text') || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
            <v-btn icon color="error" @click="deleteTask(i)"
              ><v-icon>mdi-trash-can</v-icon></v-btn
            >
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: [
    'beforeUpdate',
    'beforeCreate',
    'beforeMounted',
    'beforeDestroy',
    'updated',
    'created',
    'mounted',
    'destroyed'
  ],
  data: () => ({
    tasks: [
      {
        done: false,
        text: 'Foobar'
      },
      {
        done: false,
        text: 'Fizzbuzz'
      }
    ],
    task: null
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    },
    deleteTask(i) {
      console.log(i);
      this.tasks.splice(i, 1);
    }
  },
  beforeCreate() {
    console.log('TodoList Component - Before Create');
    let that = this;
    console.log(that);
    console.log(this.$vuetify, this.$router, this.$route);
  },

  created() {
    if (this.created) {
      console.log('TodoList Component - Created\nComponent data is');
      let props = {};
      props.beforeUpdate = this.beforeUpdate;
      props.beforeCreate = this.beforeCreate;
      props.beforeMounted = this.beforeMounted;
      props.beforeDestroy = this.beforeDestroy;
      props.updated = this.updated;
      props.created = this.created;
      props.mounted = this.mounted;
      props.destroyed = this.destroyed;
      console.table({ props });
    }
  },

  beforeMount() {
    if (this.beforeMounted) {
      console.log('TodoList - Before Mount');
    }
  },

  mounted() {
    if (this.mounted) {
      console.log('TodoList - Mounted');
      let el = this.$el;
      console.log(el);
    }
  },

  beforeUpdate() {
    if (this.beforeUpdate) {
      console.log('TodoList - Before Update');
    }
  },

  updated() {
    if (this.updated) {
      console.log('TodoList - Updated');
    }
  },

  beforeDestroy() {
    if (this.beforeDestroy) {
      console.log('TodoList - Before Destroy');
    }
  },

  destroyed() {
    if (this.destroyed) {
      console.log('TodoList - Destroyed');
    }
  }
};
</script>
