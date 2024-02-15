<template>
  <div class="d-flex bg-white my-2 p-2 shadow border rounded">
    <img
      :src="userInfo?.picture?.thumbnail"
      :alt="userFullName"
      class="rounded"
    >
    <div class="d-flex flex-column mx-2">
      <p class="mb-0">
        <strong>
          {{ userFullName }}
        </strong>
      </p>
      <p class="mb-0 text-muted">
        {{ userAddress }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileCard',
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userFullName() {
      const userName = this.userInfo?.name;
      return `${userName?.first} ${userName?.last}`;
    },
    userAddress() {
      const userLocation = this.userInfo?.location;
      return `${userLocation?.country}, ${userLocation?.city}`;
    },
  },
};
</script>
