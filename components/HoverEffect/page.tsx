"use client"
import React, { useState } from 'react';

export default function HoverEffect() {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(position)
        return (
            setPosition({ x: e.clientX, y: e.clientY })
        )

    };

    return (
        <div className='relative w-[40em] h-[40em] overflow-hidden border-2' onMouseMove={handleMouseMove}>
            <div
                className="absolute z-10 w-[4em] h-[4em] rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                style={{ left: `${position.y}px`, top: `${position.x}px` }}

            ></div>
        </div>
    )
}
