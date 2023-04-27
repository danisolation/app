import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { useStore } from '~/store';
import { publicRoutes } from './routes';
import DefaultLayout from './component/Layout/DefaultLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sound from '~/assets/sound';
import ReactHowler from 'react-howler';
import Modal from 'react-modal';
import axios from 'axios';
const AIO_KEY = process.env.REACT_APP_KEY;
const AIO_USERNAME = 'Danny0943777525';

Modal.setAppElement('#root');

function App() {
    const data = useStore();
    const { lastTemp, pir } = data;
    const [status, setStatus] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const handlePirValueSubmit = async (pirValue) => {
        const FEED_NAME = 'pir';
        const newData = {
            value: pirValue,
        };
        axios
            .post(`https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data`, newData, {
                headers: {
                    'X-AIO-Key': AIO_KEY,
                },
            })
            .then((response) => {
                console.log('Data added successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    };
    const closeModal = () => {
        setIsOpen(false);
        setStatus(false);
        toast.dismiss();
        handlePirValueSubmit(String(0));
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '20px',
            border: 'none',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
            maxWidth: '600px',
            width: '100%',
            fontFamily: 'Arial',
            fontSize: '16px',
            textAlign: 'center',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    const buttonStyles = {
        backgroundColor: '#4caf50',
        border: 'none',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
    };

    const closeButtonStyles = {
        ...buttonStyles,
        backgroundColor: '#e74c3c',
    };

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

    useEffect(() => {
        if (parseInt(pir) == 1) {
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
            setIsOpen(true);
            setStatus(true);
        }
    }, [parseInt(pir)]);

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
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <p>Cảnh báo có người!</p>
                <button style={closeButtonStyles} onClick={closeModal}>
                    Xác nhận
                </button>
            </Modal>
        </Router>
    );
}

export default App;
