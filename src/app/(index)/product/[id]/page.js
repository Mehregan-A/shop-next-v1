import React from 'react';

const getData=async (input) => {
    const data = await fetch(`https://api.vercel.app/blog/${input}`,{cache:"force-cache"})
    return await data.json();
}

const Page = async ({params}) => {
    const {id} =await params;
    const result = await getData(id);
    console.log(result);
    return (
        <div>
            {result.title}
            {result.category}
        </div>
    );
};

export default Page;