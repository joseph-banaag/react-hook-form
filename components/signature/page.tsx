"use client"

import React, { useRef, useEffect } from 'react';

function drawLine(
    context: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}



export default function Signature() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isDrawingRef = useRef(false);
    let x = 0;
    let y = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        const handleMouseDown = (e: MouseEvent) => {
            x = e.offsetX;
            y = e.offsetY;
            isDrawingRef.current = true;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDrawingRef.current) return;

            if (context) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!isDrawingRef.current) return;

            if (context) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawingRef.current = false;
            }
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                id="myPics"
                width={400}
                height={150}
                
            ></canvas>
        </div>
    )
}
