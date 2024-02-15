<template>
  <div class="container">
    <h2 class="my-2">
      Random User App
    </h2>
    <div class="row">
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Registered</h6>
        <base-loader v-if="isLoading" />
        <draggable
          v-else
          class="draggable-list"
          :list="tasks.registered"
          group="tasks"
        >
          <div
            v-for="(idea, i) in tasks.registered"
            :key="i"
          >
            <user-profile-card :user-info="idea" />
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Moderation</h6>
        <draggable
          class="draggable-list"
          :list="tasks.moderation"
          group="tasks"
        >
          <div
            v-for="(todo, i) in tasks.moderation"
            :key="i"
          >
            <user-profile-card :user-info="todo" />
          </div>
        </draggable>
      </div>
      <div class="col mx-2 px-2 py-3 bg-light border rounded">
        <h6>Approved</h6>
        <draggable
          class="draggable-list"
          :list="tasks.approved"
          group="tasks"
        >
          <div
            v-for="(task, i) in tasks.approved"
            :key="i"
          >
            <user-profile-card :user-info="task" />
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import UserProfileCard from '@/components/UserProfileCard.vue';
import BaseLoader from '@/components/BaseLoader.vue';

export default {
  name: 'HomeView',
  components: {
    draggable,
    UserProfileCard,
    BaseLoader,
  },
  data() {
    return {
      tasks: {
        registered: [],
        moderation: [],
        approved: [],
      },
      isLoading: false,
    };
  },
  watch: {
    // eslint-disable-next-line func-names
    'tasks.registered': function (newArray) {
      if (!newArray.length) {
        this.fetchRandomUser();
      }
    },
  },
  mounted() {
    this.fetchRandomUser();
  },
  methods: {
    async fetchRandomUser() {
      try {
        this.isLoading = true;
        const response = await fetch('https://randomuser.me/api');
        const randomUserData = await response.json();
        this.tasks.registered = [...randomUserData.results];
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
h6 {
  font-weight: 700;
}
.col {
  height: 90vh;
  overflow: auto;
}
.draggable-list {
  min-height: 10vh;
}
.draggable-list > div {
  cursor: pointer;
}
</style>
