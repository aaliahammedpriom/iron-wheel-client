import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <progress className="progress progress-info w-56"></progress>
            <p className="mt-4 text-info">Loading, please wait...</p>
        </div>

    );
};

export default Loading;