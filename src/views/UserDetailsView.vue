<template>
  <main class="container">
    <section class="my-2">
      <div class="row justify-content-center">
        <div class="col">
          <img
            class="rounded"
            :src="avatar"
            :alt="fullName"
          >
        </div>
        <div class="col">
          <p class="display-6">
            <strong>
              {{ fullName }}
            </strong>
          </p>
          <p>
            {{ ageAndGender }}
          </p>
        </div>
      </div>
    </section>
    <section class="my-2">
      <h6 class="display-6">
        Contacts
      </h6>
      <div class="row">
        <div class="col">
          <p>
            <strong>Email:</strong> {{ email }}
          </p>
          <p>
            <strong>Phone:</strong> {{ phone }}
          </p>
          <p>
            <strong>Cell:</strong> {{ cell }}
          </p>
          <p>
            <strong>Address:</strong> {{ address }}
          </p>
        </div>
      </div>
    </section>
  </main>
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
    filteredUserData() {
      return this.$store.getters.getFilteredUserData(this.loginId);
    },
    avatar() {
      return this.filteredUserData?.picture?.large;
    },
    fullName() {
      const name = this.filteredUserData?.name;
      return `${name?.first} ${name?.last}`;
    },
    ageAndGender() {
      const gender = this.filteredUserData?.gender.toUpperCase();
      const age = this.filteredUserData?.dob?.age;

      return `${gender}, ${age} years`;
    },
    email() {
      return this.filteredUserData?.email;
    },
    phone() {
      return this.filteredUserData?.phone;
    },
    cell() {
      return this.filteredUserData?.cell;
    },
    address() {
      const location = this.filteredUserData?.location;

      const country = location?.country;
      const state = location?.state;
      const city = location?.city;
      const streetName = location?.street?.name;
      const streetNumber = location?.street?.number;

      return `${country}, ${state}, ${city}, ${streetName}, ${streetNumber}`;
    },
  },
};
</script>
