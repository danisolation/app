import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from '~/store';
import { publicRoutes } from './routes';
import DefaultLayout from './component/Layout/DefaultLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sound from '~/assets/sound';
import ReactHowler from 'react-howler';

function App() {
    const data = useStore();
    const { lastTemp } = data;
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (parseInt(lastTemp) > 40) {
            toast.warn('WARNING!', {
                position: 'bottom-right',
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            setStatus(true);
        } else {
            setStatus(false);
            toast.dismiss();
        }
    }, [parseInt(lastTemp)]);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <ReactHowler src={sound.warning} loop={true} playing={status} />

            <ToastContainer
                position="bottom-right"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
            />
        </Router>
    );
}

export default App;
// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// // import { Line } from 'react-chartjs-2';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// function App() {
//     const AIO_KEY = 'aio_YAxT08ymi3BwsNsMvmmoPCd0n6Gd';
//     const AIO_USERNAME = 'Danny0943777525';

//     const [DHT20Temp, setDHT20Temp] = useState();
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             const fetchData = async () => {
//                 const FEED_NAME = 'temp';
//                 const result = await axios(
//                     `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data/last`,
//                     {
//                         headers: {
//                             'X-AIO-Key': AIO_KEY,
//                         },
//                     },
//                 );
//                 setDHT20Temp(result.data.value);
//             };
//             fetchData();
//         }, 1000);
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className="App">
//             <div>
//                 {DHT20Temp ? (
//                     <p>
//                         The current temperature is <span style={{ color: 'blue', fontWeight: '600' }}>{DHT20Temp}</span>{' '}
//                         degrees Celsius.
//                     </p>
//                 ) : (
//                     <p>Loading temperature data...</p>
//                 )}
//                 {console.log(DHT20Temp)}
//             </div>
//         </div>
//     );
// }

// // import { Fragment } from 'react';
// // import { Routes, Route, Link } from 'react-router-dom'
// // import { publicRoutes } from '~/routes';
// // import { DefaultLayout } from '~/components/Layout';

// // function App() {

// //   return (
// //     <div className='app'>
// //       <nav>
// //         <ul>
// //           <li>
// //             <Link to='/'>Home</Link>
// //           </li>
// //           <li>
// //             <Link to='/report'>Report</Link>
// //           </li>
// //           <li>
// //             <Link to='/config'>Config</Link>
// //           </li>
// //         </ul>
// //       </nav>

// //       <Routes>
// //         {publicRoutes.map((route, index) => {
// //           const Page = route.component;

// //           let Layout = DefaultLayout;

// //           if (route.layout) {
// //             Layout = route.layout;
// //           } else if (route.layout === null) {
// //             Layout = Fragment;
// //           }

// //           return <Route key={index} path={route.path} element={<Layout>
// //                                                                 <Page />
// //                                                               </Layout>} />;
// //         })}
// //       </Routes>

// //     </div>
// //   )
// // }

// export default App;
