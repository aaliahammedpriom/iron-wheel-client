import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div className="flex items-center justify-center h-screen bg-base-200">
            <div className="text-center bg-white p-8 shadow-xl rounded-lg max-w-md">
                {/* Error Title */}
                <h1 className="text-5xl font-bold text-error mb-4">Oops!</h1>
                <p className="text-lg font-medium text-gray-700 mb-6">
                    Sorry, an unexpected error has occurred.
                </p>

                {/* Error Details */}
                <p className="text-sm text-gray-500">
                    <i>{error?.statusText || error?.message || "Unknown error"}</i>
                </p>

                {/* Go Back Button */}
                <button
                    className="mt-6 btn btn-primary w-full"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Error;
