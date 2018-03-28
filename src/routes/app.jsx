import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';

var appRoutes = [
    { path: "/pages/lock-screen-page", name: "Pages", component: Pages },
    { path: "/", name: "Home", component: Dash }
];

export default appRoutes;
