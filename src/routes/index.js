// Layouts

// Pages
import DashBoard from '../pages/Dashboard';
import HistoricalData from '../pages/HistoricalData';
import Manager from '../pages/Manager';
import SensorData from '../pages/SensorData';
import Settings from '../pages/Settings';

// Public Routes
const publicRoutes = [
    { path: '/', component: DashBoard },
    { path: '/historicaldata', component: HistoricalData },
    { path: '/manager', component: Manager },
    { path: '/sensordata', component: SensorData },
    { path: '/settings', component: Settings },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
