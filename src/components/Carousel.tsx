'use client'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Dot } from '@phosphor-icons/react'

interface CarouselProps {
  slides: string[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    const isFirtSlide = currentIndex === 0
    const newIndex = isFirtSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(slideIndex: number) {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="group relative m-auto h-[500px] w-full max-w-[1400px] px-4 py-16">
      <div
        style={{
          background: `url(${slides[currentIndex]}) no-repeat center / contain`,
        }}
        className="h-full w-full rounded-2xl bg-cover transition-all duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute left-5 top-1/2 hidden -translate-x-0 -translate-y-1/2 cursor-pointer bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-1/2 hidden -translate-x-0 -translate-y-1/2 cursor-pointer bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, index) => (
          <div
            className="cursor-pointer"
            onClick={() => goToSlide(index)}
            key={index}
          >
            <Dot size={44} />
          </div>
        ))}
      </div>
    </div>
  )
}
