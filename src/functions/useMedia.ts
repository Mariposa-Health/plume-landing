import { useEffect, useState } from 'react'

type Breakpoint = keyof typeof tailwindConfig.theme.extend.screens

export default function useMedia(breakpoint: Breakpoint) {
  const [value, setValue] = useState(true)

  function getInnerWidth() {
    const breakpointValue = parseInt(tailwindConfig.theme.extend.screens[breakpoint])
    setValue(window.innerWidth < breakpointValue)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      getInnerWidth()
      window.addEventListener('resize', getInnerWidth)
      return () => {
        window.removeEventListener('resize', getInnerWidth)
      }
    }
  }, [breakpoint])

  return value
}
