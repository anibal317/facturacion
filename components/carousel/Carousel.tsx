'use client'

import React, { useState, useEffect, useRef } from 'react'

interface Client {
    id: number;
    img: string;
    name: string;
    link: string;
    active: boolean;
    ordering: number;
}

interface CarouselProps {
    images: Client[]
    speed: number // Velocidad en píxeles por segundo
}

export default function Carousel({ images, speed = 50 }: CarouselProps) {
    const [translateX, setTranslateX] = useState(0)
    const [direction, setDirection] = useState(1) // 1 para derecha a izquierda, -1 para izquierda a derecha
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Función para determinar el ancho de imagen según el viewport
        const getImageWidth = () => {
            return window.innerWidth < 1024 ? 170 : 350 // 1024px es el breakpoint de lg en Tailwind
        }

        // Función para calcular el ancho total
        const calculateTotalWidth = () => {
            const imageWidth = getImageWidth()
            return images.length * imageWidth
        }

        let totalWidth = calculateTotalWidth()

        // Manejador de resize para recalcular el ancho total
        const handleResize = () => {
            totalWidth = calculateTotalWidth()
        }

        // Agregar listener para resize
        window.addEventListener('resize', handleResize)

        const animate = () => {
            setTranslateX(prev => {
                const newTranslateX = prev - (speed / 60) * direction
                if (direction === 1 && newTranslateX <= -totalWidth + container.clientWidth) {
                    setDirection(-1)
                    return -totalWidth + container.clientWidth
                } else if (direction === -1 && newTranslateX >= 0) {
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
                className="flex items-center transition-transform duration-100 ease-linear"
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="flex flex-shrink-0 justify-center items-center p-2 w-[170px] lg:w-[350px] h-[150px] lg:h-[300px]">
                        <a href={src.link} target={src.link !== '#' ? '_blank' : '_self'}>
                            <div className="relative w-full h-full">
                                <img
                                    src={src.img}
                                    alt={src.name}
                                    className="rounded-[15px] w-full h-full object-cover"
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}