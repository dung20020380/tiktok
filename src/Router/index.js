import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Live from '~/pages/Live';
import Popular from '~/pages/Popular';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', compornent: Home },
    { path: '/following', compornent: Following },
    { path: '/live', compornent: Live },
    { path: '/popular', compornent: Popular },
    { path: '/profile', compornent: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
