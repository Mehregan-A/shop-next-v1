import React from 'react';

const getData=async () => {
    const data = await fetch('https://api.vercel.app/blog')
    return await data.json();
}

const Page = async () => {
    const result = await getData();
    console.log(result);
    return (
        <div>
            {result && result.length>0 && result?.map((item, index) => (
                <div key={index}>{item.title}</div>
            ))}
        </div>
    );
};

export default Page;