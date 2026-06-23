import React, { useEffect } from 'react';

interface GalleryModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ src, alt, onClose }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <img className="modal-img" src={src} alt={alt} onClick={e => e.stopPropagation()} />
            <button className="modal-close" onClick={onClose} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
};

export default GalleryModal;
