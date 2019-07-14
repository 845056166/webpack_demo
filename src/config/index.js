import header from '../components/header.vue';
import page1 from '../components/page1.vue';
import mybody from '../components/mybody.vue';
const routes = [
  {
    path: '/',
    name: 'page1',
    component: page1,
  },
  {
    path: '/body',
    name: 'mybody',
    component: mybody,
  },
];
export default routes;