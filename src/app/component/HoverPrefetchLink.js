'use client'
import React from 'react';
import Link from "next/link";

function HoverPrefetchLink ({children,href}) {
    const [active, setActive] = React.useState(false);
    return (
        <Link
            prefetch={active?null :false}
            onMouseEnter={() => setActive(true)}
            ontouchstart={() => setActive(true)}
            href={href}
        >
            {children}
        </Link>
    )
};

export default HoverPrefetchLink;