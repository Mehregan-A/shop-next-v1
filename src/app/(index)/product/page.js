import React from 'react';
import Link from "next/link";
import HoverPrefetchLink from "@/app/component/HoverPrefetchLink";

const getData=async () => {
    const data = await fetch('https://api.vercel.app/blog')
    return await data.json();
}

const Page = async () => {
    const result = await getData();
    console.log(result);
    return (
        <div>
            <div>
                <HoverPrefetchLink href="/about">about</HoverPrefetchLink>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    {result && result.length>0 && result?.map((item, index) => (
                        <HoverPrefetchLink href={"/product/"+item.id} key={index}>{item.title}</HoverPrefetchLink>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Page;