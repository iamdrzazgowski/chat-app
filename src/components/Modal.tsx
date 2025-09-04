import { cloneElement, createContext, useContext, useState } from 'react';
import type { ReactElement, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import useOutsideClick from '../hooks/useOutsideClick';

const ModalContext = createContext<
    { open: () => void; close: () => void; openModal: boolean } | undefined
>(undefined);

function Modal({ children }: { children: ReactElement }) {
    const [openModal, setOpenModal] = useState(false);

    const close = () => {
        setOpenModal(false);
    };

    const open = () => {
        setOpenModal(true);
    };

    return (
        <ModalContext.Provider value={{ open, close, openModal }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({
    children,
}: {
    children: ReactElement<{ onClick?: MouseEventHandler }>;
}) {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Open must be used within a Modal');
    }
    const { open } = context;

    return cloneElement(children, { onClick: () => open() });
}

type WindowChildProps = {
    onCloseModal: () => void;
};

function Window({ children }: { children: ReactElement<WindowChildProps> }) {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('Open must be used within a Modal');
    }
    const { close, openModal } = context;
    const ref = useOutsideClick(close);

    if (!openModal) return null;

    return createPortal(
        <div className='fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm z-[1000] transition-all duration-500'>
            <div
                className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-gray-50 rounded-lg shadow-lg 
                p-8 transition-all duration-500'
                ref={ref}>
                <button
                    className='absolute top-3 right-6 p-1 rounded-sm transform translate-x-2 
                   transition-all duration-200 hover:bg-gray-100 cursor-pointer'
                    onClick={close}>
                    <HiXMark />
                </button>

                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
