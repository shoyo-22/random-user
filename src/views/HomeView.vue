<template>
  <div class="container">
    <div class="row my-2">
      <kanban-column
        title="Registered"
        :users="tasks.registered"
        :is-loading="isLoading"
        is-first-column
      />
      <kanban-column
        title="Moderation"
        :users="tasks.moderation"
      />
      <kanban-column
        title="Approved"
        :users="tasks.approved"
      />
    </div>
  </div>
</template>

<script>
import KanbanColumn from '@/components/kanban/KanbanColumn.vue';

export default {
  name: 'HomeView',
  components: {
    KanbanColumn,
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
