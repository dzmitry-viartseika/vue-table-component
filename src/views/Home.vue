<template>
  <div class="home">
    <vTable :users="users"></vTable>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTable from '../components/v-table.vue';

export default {
  name: 'Home',
  components: {
    vTable,
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['GET_USERS_FROM_API']),
  },
  beforeMount() {
    this.GET_USERS_FROM_API();
  },
};
</script>
