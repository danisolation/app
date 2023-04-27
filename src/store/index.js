import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

function Data(lastTemp, lastLight, lastHumid, lastFan, lastPump, tempChart, humidChart, pir) {
    this.lastTemp = lastTemp;
    this.lastLight = lastLight;
    this.lastHumid = lastHumid;
    this.lastFan = lastFan;
    this.lastPump = lastPump;
    this.tempChart = tempChart;
    this.humidChart = humidChart;
    this.pir = pir;
}

const createStore = () => {
    const StateContext = createContext();
    const StoreProvider = ({ children }) => {
        let data = new Data();

        const [state, setState] = useState(data);
        const [temp, setTemp] = useState();
        const [light, setLight] = useState();
        const [humid, setHumid] = useState();
        const [fan, setFan] = useState();
        const [pump, setPump] = useState();
        const [pir, setPir] = useState();
        const [tempChart, setTempChart] = useState([]);
        const [humidChart, setHumidChart] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const resLight = await axios.get(`http://localhost:8080/lastLight`);
                const resPump = await axios.get(`http://localhost:8080/lastPump`);
                const resTemp = await axios.get(`http://localhost:8080/lastTemp`);
                const resHumid = await axios.get(`http://localhost:8080/lastHumid`);
                const resFan = await axios.get(`http://localhost:8080/lastFan`);
                const resTempChart = await axios.get(`http://localhost:8080/tempChart`);
                const resHumidChart = await axios.get(`http://localhost:8080/humidChart`);
                const respir = await axios.get(`http://localhost:8080/pir`);
                setLight(resLight.data.value);
                setPump(resPump.data.value);
                setTemp(resTemp.data.value);
                setHumid(resHumid.data.value);
                setFan(resFan.data.value);
                setTempChart(resTempChart.data);
                setHumidChart(resHumidChart.data);
                setPir(respir.data.value);
            };
            fetchData();
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultLight = await axios.get(`http://localhost:8080/lastLight`);

                    setLight(resultLight.data.value);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultPump = await axios.get(`http://localhost:8080/lastPump`);

                    setPump(resultPump.data.value);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultPIR = await axios.get(`http://localhost:8080/pir`);

                    setPir(resultPIR.data.value);
                };
                fetchData();
            }, 5000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultTemp = await axios.get(`http://localhost:8080/lastTemp`);
                    setTemp(resultTemp.data.value);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultHumid = await axios.get(`http://localhost:8080/lastHumid`);

                    setHumid(resultHumid.data.value);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);
        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultFan = await axios.get(`http://localhost:8080/lastFan`);

                    setFan(resultFan.data.value);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const resultTemp = await axios.get(`http://localhost:8080/tempChart`);

                    setTempChart(resultTemp.data);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                const fetchData = async () => {
                    const res = await axios.get(`http://localhost:8080/humidChart`);

                    setHumidChart(res.data);
                };
                fetchData();
            }, 30000);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            const data1 = {
                ...data,
                lastLight: light,
                lastTemp: temp,
                lastFan: fan,
                lastHumid: humid,
                tempChart: tempChart,
                humidChart: humidChart,
                pir: pir,
                pump: pump,
            };
            setState(data1);
        }, [temp, light, fan, humid, pir, pump]);

        return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
    };
    const useStore = () => useContext(StateContext);

    return { StoreProvider, useStore };
};
const AppStore = createStore();
export const AppProvider = AppStore.StoreProvider;
export const useStore = AppStore.useStore;
