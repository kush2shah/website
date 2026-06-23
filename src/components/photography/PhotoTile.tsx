import React, { useEffect, useRef, useState } from 'react';

interface PhotoTileProps {
    src: string;
    alt: string;
    line1?: string;
    line2?: string;
    index?: number;
    onClick?: () => void;
}

// Staged-hover photo tile: reveals on scroll, escalates none -> initial -> sustained.
const PhotoTile: React.FC<PhotoTileProps> = ({ src, alt, line1, line2, index = 0, onClick }) => {
    const [stage, setStage] = useState<'none' | 'initial' | 'sustained'>('none');
    const [visible, setVisible] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setTimeout(() => setVisible(true), index * 60);
                io.disconnect();
            }
        }, { threshold: 0.05 });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, [index]);

    const enter = () => {
        setStage('initial');
        timerRef.current = setTimeout(() => setStage('sustained'), 1000);
    };
    const leave = () => {
        setStage('none');
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const cls = `image-wrap hover-${stage} ${visible ? 'in-view' : ''}`;

    return (
        <div ref={ref} className={cls} onMouseEnter={enter} onMouseLeave={leave} onClick={onClick}>
            <img src={src} alt={alt} loading={index < 3 ? 'eager' : 'lazy'} />
            {(line1 || line2) && (
                <div className="img-overlay">
                    {line1 && <span className="cap1">{line1}</span>}
                    {line2 && <span className="cap2">{line2}</span>}
                </div>
            )}
        </div>
    );
};

export default PhotoTile;
