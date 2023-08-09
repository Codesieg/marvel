import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";


const Loader = ({loading}) => {

    return (
        <div className="flex h-screen justify-center items-center">
            <PuffLoader
                color= "black"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;