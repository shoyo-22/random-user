<template>
  <div class="col mx-2 px-2 py-3 bg-light border rounded">
    <h6>{{ title }}</h6>
    <base-loader v-if="isLoading && isFirstColumn" />
    <draggable
      v-else
      class="draggable-list"
      :list="users"
      group="users"
    >
      <div
        v-for="user in users"
        :key="user?.login?.uuid"
      >
        <router-link :to="{name:'user-details', params: {id: user?.login?.uuid}}">
          <user-profile-card
            :user-info="user"
          />
        </router-link>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import UserProfileCard from '@/components/UserProfileCard.vue';
import BaseLoader from '@/components/BaseLoader.vue';

export default {
  name: 'KanbanColumn',
  components: {
    draggable,
    UserProfileCard,
    BaseLoader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isFirstColumn: {
      type: Boolean,
      default: false,
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
