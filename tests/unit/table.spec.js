import { mount, shallowMount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';
import TableTemplate from '../../src/components/v-table.vue';

describe('Home', () => {
  it('get userlist', () => {
    let url = '';
    let body = {};

    jest.mock('axios', () => ({
      post: (_url, _body) => new Promise((resolve) => {
        url = _url;
        body = _body;
        resolve(true);
      }),
    }));
  });
});

describe('TableTemplate.vue', () => {
  it('renders userList in the component of Table', () => {
    const initialData = TableTemplate.data();
    expect(initialData.usersPerPage).toBe(10);
    expect(initialData.pageNumber).toBe(1);
  });
});
