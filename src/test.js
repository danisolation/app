import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f8f8f8',
            borderRadius: '10px',
            padding: '20px',
            border: 'none',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
            maxWidth: '600px',
            width: '100%',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                <p>Cảnh báo có người!</p>
                <button onClick={closeModal}>Xác nhận</button>
            </Modal>
        </div>
    );
}

export default App;
