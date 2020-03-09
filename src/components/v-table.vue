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
          v-for="row in paginatedUsers"
          :key="row.id"
        ></vTableRow>
      </div>
      <div class="v-table__pagination">
        <div class="v-table__pagination-page"
             v-for="(page, i) in pages"
             :key="i"
             @click="pageClick(page)"
             :class="{'v-table__pagination-page_active': pageNumber === page}"
        >
          {{ page }}
        </div>
      </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row.vue';

export default {
  name: 'v-table',
  data() {
    return {
      usersPerPage: 10,
      pageNumber: 1,
    };
  },
  components: {
    vTableRow,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },
    paginatedUsers() {
      const from = (this.pageNumber - 1) * this.usersPerPage;
      const to = from + this.usersPerPage;
      return this.users.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
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
    &__pagination {
      display: flex;
      flex-direction: row;
      justify-content: center;
      &-page {
        padding: 5px;
        border: 1px solid black;
        &_active {
          background: black;
          color: white;
        }
      }
    }
  }
</style>
