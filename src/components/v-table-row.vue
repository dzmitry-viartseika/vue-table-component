<template>
    <div class="v-table-row">
      <div class="v-table-row__item">{{ row.name }}</div>
      <div class="v-table-row__item">{{ row.points_earned }}</div>
      <div class="v-table-row__item">{{ row.points_spent }}</div>
      <div class="v-table-row__item">{{ row.registration_date }}</div>
    </div>
</template>

<script>
export default {
  name: 'v-table-row',
  props: {
    row: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
  .v-table-row {
    display: flex;
    justify-content: space-around;
    &__item {
      flex-basis: 25%;
      text-align: left;
      padding: 8px 16px;
    }
  }
</style>
