import Detail from '../views/pages/detail';
import Explore from '../views/pages/explore';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Explore,
  '/explore': Explore,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;