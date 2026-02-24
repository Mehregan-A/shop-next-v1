import React from 'react';

const Page = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            {id}
        </div>
    );
};

export default Page;