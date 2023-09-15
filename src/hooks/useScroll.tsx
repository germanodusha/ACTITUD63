'use client'
import { useEffect, useState } from 'react'

interface ScrollContextType {
  scroll: number
}

const useScroll = (): ScrollContextType => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = (): void => {
    setScroll(window.scrollY)
  }
  useEffect(() => {
    const hash = window.location.hash
    if (hash !== '') {
      const element = document.querySelector(hash) as HTMLElement
      if (element !== null) {
        const elementPosition = element.offsetTop
        setScroll(elementPosition)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return { scroll }
}
export { useScroll }
