import React from 'react';

const DynamicPage = ({params}) => {
    return (
        <div>
            <h1>this is DynamicPage: {params.id}</h1>
        </div>
    );
};

export default DynamicPage;