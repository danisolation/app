import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

function Data(lastTemp, lastLight, lastHumid, lastFan) {
    this.lastTemp = lastTemp;
    this.lastLight = lastLight;
    this.lastHumid = lastHumid;
    this.lastFan = lastFan;
}

const AIO_KEY = 'aio_YAxT08ymi3BwsNsMvmmoPCd0n6Gd';
const AIO_USERNAME = 'Danny0943777525';

const createStore = () => {
    const StateContext = createContext();
    const StoreProvider = ({ children }) => {
        let data = new Data();

        const [state, setState] = useState(data);
        const [temp, setTemp] = useState();
        const [light, setLight] = useState();
        const [humid, setHumid] = useState();
        const [fan, setFan] = useState();

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const LIGHT = 'light';
                    const resultLight = await axios(
                        `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${LIGHT}/data/last`,
                        {
                            headers: {
                                'X-AIO-Key': AIO_KEY,
                            },
                        },
                    );

                    setLight(resultLight.data.value);
                };
                fetchData();
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const TEMP = 'temp';
                    const resultTemp = await axios(
                        `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${TEMP}/data/last`,
                        {
                            headers: {
                                'X-AIO-Key': AIO_KEY,
                            },
                        },
                    );
                    setTemp(resultTemp.data.value);
                };
                fetchData();
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const HUMID = 'humidity';
                    const resultHumid = await axios(
                        `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${HUMID}/data/last`,
                        {
                            headers: {
                                'X-AIO-Key': AIO_KEY,
                            },
                        },
                    );

                    setHumid(resultHumid.data.value);
                };
                fetchData();
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const FAN = 'fan';
                    const resultFan = await axios(
                        `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FAN}/data/last`,
                        {
                            headers: {
                                'X-AIO-Key': AIO_KEY,
                            },
                        },
                    );

                    setFan(resultFan.data.value);
                };
                fetchData();
            }, 1000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const data1 = {
                ...data,
                lastLight: light,
                lastTemp: temp,
                lastFan: fan,
                lastHumid: humid,
            };
            setState(data1);
        }, [temp, light, fan, humid]);

        return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
    };
    const useStore = () => useContext(StateContext);

    return { StoreProvider, useStore };
};
const AppStore = createStore();
export const AppProvider = AppStore.StoreProvider;
export const useStore = AppStore.useStore;
