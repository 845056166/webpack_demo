import main from './view/main.vue';
import Photos from './view/photos.vue';
const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
  },
];
export default routes;