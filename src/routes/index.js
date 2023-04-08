// Layouts

// Pages
import DashBoard from '../pages/Dashboard';
import HistoricalData from '../pages/HistoricalData';
import Manager from '../pages/Manager';
import SensorData from '../pages/SensorData';
import Settings from '../pages/Settings';
import Fan from '~/pages/Manager/Fan';
import TempChart from '~/pages/HistoricalData/TempChart';

// Public Routes
const publicRoutes = [
    { path: '/', component: DashBoard },
    { path: '/historicaldata', component: HistoricalData },
    { path: '/historicaldata/tempchart', component: TempChart },
    { path: '/manager', component: Manager },
    { path: '/manager/fan', component: Fan },
    { path: '/sensordata', component: SensorData },
    { path: '/settings', component: Settings },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
