// add 'use client' if you want to use this hook in a your component

import { useEffect, useState, useCallback } from 'react'
import tailwindConfig from '../../tailwind.config'

type Breakpoint = keyof typeof tailwindConfig.theme.extend.screens

export default function useMedia(breakpoint: Breakpoint) {
  const [value, setValue] = useState(true)

  const getInnerWidth = useCallback(() => {
    const breakpointValue = parseInt(tailwindConfig.theme.extend.screens[breakpoint])
    setValue(window.innerWidth < breakpointValue)
  }, [breakpoint])

  useEffect(() => {
    if (typeof window !== undefined) {
      getInnerWidth()
      window.addEventListener('resize', getInnerWidth)
      return () => {
        window.removeEventListener('resize', getInnerWidth)
      }
    }
  }, [getInnerWidth])

  return value
}
