<template>
    <div class="v-table">
      <div class="v-table__header">
        <p>Name</p>
        <p>Point earned</p>
        <p>Point spent</p>
        <p>Registration date</p>
      </div>
      <div class="v-table__body">
        <vTableRow
          :row="row"
          v-for="row in users"
          :key="row.id"
        ></vTableRow>
      </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row.vue';

export default {
  name: 'v-table',
  components: {
    vTableRow,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
  .v-table {
    max-width: 900px;
    margin: 0 auto;
    &__header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid black;
      & p {
        flex-basis: 25%;
        text-align: left;
      }
    }
  }
</style>
