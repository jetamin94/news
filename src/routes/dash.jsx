import Dashboard from 'views/Dashboard/Dashboard';
import RegularTables from 'views/Tables/RegularTables.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Charts from 'views/Charts/Charts.jsx';
import UserPage from 'views/Pages/UserPage.jsx';
import pagesRoutes from './pages.jsx';

var pages = [{ path: "/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { collapse: true, path: "/tables", name: "Tables", state: "openTables", icon: "pe-7s-news-paper", views:
        [{ path: "/tables/regular-tables", name: "Regular Tables", mini: "RT", component: RegularTables },
        { path: "/tables/extended-tables", name: "Extended Tables", mini: "ET", component: ExtendedTables },
        { path: "/tables/data-tables", name: "Data Tables", mini: "DT", component: DataTables }]
    },
    { path: "/charts", name: "Charts", icon: "pe-7s-graph1", component: Charts },
    { collapse: true, path: "/pages", name: "Pages", state: "openPages", icon:"pe-7s-gift", views:
        pages
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
