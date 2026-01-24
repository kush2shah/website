import React, { useState, useRef, useEffect } from 'react';
import { Info, Camera, MapPin, X } from 'lucide-react';

type Photo = {
    url: string;
    title: string;
    camera?: string;
    lens?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
    location?: string;
    description?: string;
};

type PhotoGalleryProps = {
    photos?: Photo[];
};

const PhotoGallery = ({ photos = [] }: PhotoGalleryProps) => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [showInfo, setShowInfo] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPhoto]);

    if (!photos.length) {
        return (
            <div className="w-full h-64 flex items-center justify-center text-gray-500">
                No photos to display
            </div>
        );
    }

    const handleModalClick = (e: React.MouseEvent) => {
        if (modalRef.current && e.target === modalRef.current) {
            setSelectedPhoto(null);
            setShowInfo(false);
        }
    };

    return (
        <div className="w-full">
            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
                        onClick={() => setSelectedPhoto(photo)}
                    >
                        <img
                            src={photo.url}
                            alt={photo.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <h3 className="text-lg font-medium text-white">{photo.title}</h3>
                            {(photo.camera || photo.location) && (
                                <div className="mt-1 flex items-center gap-2 text-sm text-white/90">
                                    {photo.camera && (
                                        <div className="flex items-center gap-1">
                                            <Camera className="h-4 w-4" />
                                            <span>{photo.camera}</span>
                                        </div>
                                    )}
                                    {photo.location && (
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{photo.location}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPhoto && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 z-50 overflow-hidden bg-black/95"
                    onClick={handleModalClick}
                >
                    <div className="relative h-full w-full">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute left-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Main image container */}
                        <div className="flex h-full w-full items-center justify-center p-4">
                            <img
                                src={selectedPhoto.url}
                                alt={selectedPhoto.title}
                                className="max-h-full max-w-full object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        {/* Info Panel */}
                        <div
                            className={`absolute bottom-0 right-0 top-0 w-80 overflow-y-auto bg-black/80 p-6 transform transition-transform duration-300 ${
                                showInfo ? 'translate-x-0' : 'translate-x-full'
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="text-white">
                                <h2 className="text-xl font-semibold mb-4">{selectedPhoto.title}</h2>

                                {(selectedPhoto.camera || selectedPhoto.lens || selectedPhoto.aperture) && (
                                    <div className="mb-6">
                                        <h3 className="font-medium mb-2">Camera Settings</h3>
                                        <div className="space-y-1 text-sm text-white/80">
                                            {selectedPhoto.camera && <p>{selectedPhoto.camera}</p>}
                                            {selectedPhoto.lens && <p>{selectedPhoto.lens}</p>}
                                            {(selectedPhoto.aperture || selectedPhoto.shutterSpeed || selectedPhoto.iso) && (
                                                <p>
                                                    {selectedPhoto.aperture && `f/${selectedPhoto.aperture}`}
                                                    {selectedPhoto.shutterSpeed && ` • ${selectedPhoto.shutterSpeed}s`}
                                                    {selectedPhoto.iso && ` • ISO ${selectedPhoto.iso}`}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {selectedPhoto.location && (
                                    <div className="mb-6">
                                        <h3 className="font-medium mb-2">Location</h3>
                                        <p className="text-sm text-white/80">{selectedPhoto.location}</p>
                                    </div>
                                )}

                                {selectedPhoto.description && (
                                    <div className="mb-6">
                                        <h3 className="font-medium mb-2">About</h3>
                                        <p className="text-sm text-white/80">{selectedPhoto.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info Toggle Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowInfo(!showInfo);
                            }}
                            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                        >
                            <Info className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;