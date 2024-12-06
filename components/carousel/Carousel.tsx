'use client'

import React, { useState, useEffect, useRef } from 'react'

interface CarouselProps {
    images: string[]
    speed: number // Velocidad en píxeles por segundo
}

export default function Carousel({ images, speed = 50 }: CarouselProps) {
    const [translateX, setTranslateX] = useState(0)
    const [direction, setDirection] = useState(1) // 1 para derecha a izquierda, -1 para izquierda a derecha
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const imageWidth = 350 // Ancho de cada imagen
        const totalWidth = images.length * imageWidth

        const animate = () => {
            setTranslateX(prev => {
                const newTranslateX = prev - (speed / 60) * direction
                if (direction === 1 && newTranslateX <= -totalWidth + container.clientWidth) {
                    // Cambiar dirección cuando llegue al final
                    setDirection(-1)
                    return -totalWidth + container.clientWidth
                } else if (direction === -1 && newTranslateX >= 0) {
                    // Cambiar dirección cuando llegue al inicio
                    setDirection(1)
                    return 0
                }
                return newTranslateX
            })
        }

        const intervalId = setInterval(animate, 1000 / 60) // 60 FPS

        return () => clearInterval(intervalId)
    }, [images.length, speed, direction])

    return (
        <div className="relative h-[200px] lg:h-[380px] overflow-hidden">
            {/* Capa izquierda con blur */}
            <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent w-28 h-full pointer-events-none" style={{ backdropFilter: 'blur(0px)' }} />
            
            {/* Capa derecha con blur */}
            <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-white to-transparent w-28 h-full pointer-events-none" style={{ backdropFilter: 'blur(0px)' }} />
            
            <div
                ref={containerRef}
                className="flex transition-transform duration-100 ease-linear"
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 p-2 w-[170px] lg:w-[350px]">
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="rounded-[15px] w-[160px] lg:w-[350px] h-[160px] lg:h-[350px] object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}