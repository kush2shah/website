import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GalleryPageProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

// Gallery wrapper with a breadcrumb back-to-Photography header.
const GalleryPage: React.FC<GalleryPageProps> = ({ title, subtitle, children }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="gallery-header">
                <button className="gallery-back" onClick={() => navigate('/photography')}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Photography
                </button>
                <h1 className="gallery-title">{title}</h1>
                {subtitle && <p className="gallery-subtitle">{subtitle}</p>}
            </div>
            {children}
        </div>
    );
};

export default GalleryPage;
