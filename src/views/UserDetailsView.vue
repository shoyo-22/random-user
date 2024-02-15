<template>
  <div>
    user id - {{ loginId }}
  </div>
</template>

<script>
export default {
  name: 'UserDetailsView',
  props: {
    id: {
      type: [Number, String],
      default: '',
    },
  },
  computed: {
    loginId() {
      return this.id;
    },
  },
};
</script>
