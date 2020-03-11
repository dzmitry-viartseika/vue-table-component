import Home from '../../src/views/Home.vue';
import getters from '../../src/store/index.js';

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

const users = [
  {
    id: '5c41a982ecd00502420c8eb9',
    name: 'Patti Robles',
    points_earned: 3005,
    points_spent: 4562,
    registration_date: '2017-05-05',
  },
  {
    id: '5c41a982c2060fa6059e928a',
    name: 'Janna Dickerson',
    points_earned: 2793,
    points_spent: 2956,
    registration_date: '2019-01-15',
  },
  {
    id: '5c41a9827edfe714bf673f6b',
    name: 'Annmarie Phelps',
    points_earned: 725,
    points_spent: 792,
    registration_date: '2014-05-02',
  },
];
const state = { users };

describe('users', () => {
  it('return usersList', () => {
    const actual = getters.users(state);

    expect(actual).toEqual([users[0], users[2]]);
  });
});
