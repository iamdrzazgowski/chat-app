import { useEffect, useRef } from 'react';

export default function useOutsideClick(
    handler: () => void,
    listenerCapturing = true
) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        };

        document.addEventListener('click', handleClick, listenerCapturing);

        return () =>
            document.removeEventListener(
                'click',
                handleClick,
                listenerCapturing
            );
    }, [handler, listenerCapturing]);

    return ref;
}
