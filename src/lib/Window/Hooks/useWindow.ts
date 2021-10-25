import { useState, useCallback } from "react";

interface UseWindowProps {
    key: String;
};

export default function useWindow( props: UseWindowProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [isPinned, setIsPinned] = useState(false);

    const toggleOpen = useCallback(()=>{
        if( !isPinned) {
            setIsOpen(!isOpen);
        }
    },[isOpen, isPinned]);

    const togglePinned = useCallback(() => {
        setIsPinned(!isPinned);
    }, [isPinned]);

    return {isOpen, isPinned, toggleOpen, togglePinned};
}