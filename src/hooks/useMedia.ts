'use client';
import { useEffect, useState } from 'react'
import config from '../../tailwind.config'

type Breakpoint = keyof typeof config.theme.extend.screens

export default function useMedia(breakpoint: Breakpoint) {
  const [value, setValue] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function getInnerWidth() {
        const breakpointValue = parseInt(config.theme.extend.screens[breakpoint])
        setValue(window.innerWidth < breakpointValue)
      }

      getInnerWidth()
      window.addEventListener('resize', getInnerWidth)
      return () => {
        window.removeEventListener('resize', getInnerWidth)
      }
    }
  }, [breakpoint])

  return value
}
