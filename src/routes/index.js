//pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';

//layouts
import { HeaderOnly } from '../components/Layout'

//public routes
const publicRoutes = [
    {
        path: '/',
        commponent: Home
    },
    {
        path: '/following',
        commponent: Following
    },
    {
        path: '/upload',
        commponent: Upload,
        layout: HeaderOnly
    }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
