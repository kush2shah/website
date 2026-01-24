import React from 'react';
import PhotoGallery from './PhotoGallery';

type GroupedPhotos = {
    title: string;
    description?: string;
    photos: Array<{
        url: string;
        title: string;
        camera?: string;
        lens?: string;
        location?: string;
        description?: string;
    }>;
};

type GroupedPhotoGalleryProps = {
    groups: GroupedPhotos[];
    defaultCamera?: string;
    defaultLens?: string;
};

const GroupedPhotoGallery = ({
                                 groups,
                                 defaultCamera = "",
                                 defaultLens = ""
                             }: GroupedPhotoGalleryProps) => {
    return (
        <div className="space-y-12">
            {groups.map((group, index) => (
                <section key={index} className="space-y-4">
                    <div className="px-4">
                        <h2 className="text-2xl font-semibold" style={{ color: '#4B9CD3' }}>{group.title}</h2>
                        {group.description && (
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{group.description}</p>
                        )}
                    </div>

                    <PhotoGallery
                        photos={group.photos.map(photo => ({
                            ...photo,
                            camera: photo.camera || defaultCamera,
                            lens: photo.lens || defaultLens
                        }))}
                    />
                </section>
            ))}
        </div>
    );
};

export default GroupedPhotoGallery;