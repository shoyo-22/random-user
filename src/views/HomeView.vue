<template>
  <div class="container">
    <div
      class="my-2"
      style="display: flex; overflow-x: auto;"
    >
      <kanban-column
        title="Registered"
        :users="getRegistratedUsers"
        :is-loading="getLoadingState"
        is-first-column
      />
      <kanban-column
        title="Moderated"
        :users="getModeratedUsers"
      />
      <kanban-column
        title="Approved"
        :users="getApprovedUsers"
      />
    </div>
  </div>
</template>

<script>
import KanbanColumn from '@/components/kanban/KanbanColumn.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    KanbanColumn,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'getRegistratedUsers',
      'getModeratedUsers',
      'getApprovedUsers',
      'getLoadingState',
    ]),
  },
  watch: {
    '$store.getters.isRegisteredArrayEmpty': {
      handler(newValue) {
        if (!newValue) {
          this.$store.dispatch('fetchRandomUser');
        }
      },
      immediate: true,
    },
  },
};
</script>
