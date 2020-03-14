import { mount } from '@vue/test-utils';
import vTableRow from '../../src/components/v-table-row.vue';

describe('vTableRow', () => {
  it('renders information of row in the component', () => {
    const row = {
      name: 'test1',
      points_earned: 'test2',
      points_spent: 'test3',
      registration_date: 'test4',
    };
    const wrapper = mount(vTableRow, {
      propsData: {
        row,
      },
    });
    expect(wrapper.find('.v-table-row__item-name').text()).toBe(row.name);
    expect(wrapper.find('.v-table-row__item-earned').text()).toBe(row.points_earned);
    expect(wrapper.find('.v-table-row__item-spent').text()).toBe(row.points_spent);
    expect(wrapper.find('.v-table-row__item-date').text()).toBe(row.registration_date);
  });
});
