import { shallowMount } from '@vue/test-utils';
import vTable from '../../src/components/v-table.vue';
import Home from '../../src/views/Home.vue';

describe('Home', () => {
  test('отрисовывает компонент Child', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(vTable).exists()).toBe(true);
  });
});
