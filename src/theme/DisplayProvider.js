import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'

const breakpoints = {
  mobile: [0, 576],
  tablet: [577, 992],
  bigTablet: [993, 1400],
  desktop: [1401],
}

const getDisplayType = (currentWidth) => {
  if (currentWidth <= breakpoints.mobile[1]) {
    return 'mobile'
  }
  if (currentWidth <= breakpoints.tablet[1]) {
    return 'tablet'
  }
  if (currentWidth <= breakpoints.bigTablet[1]) {
    return 'bigTablet'
  }
  return 'desktop'
}

const displayMoreThan = (width) => (display) => {
  return breakpoints?.[display]?.[0] ? width >= breakpoints?.[display][0] : true
}
const displayLessThan = (width) => (display) => {
  return breakpoints?.[display]?.[1] ? width <= breakpoints?.[display][1] : true
}

export const DisplayContext = createContext()

export const useDisplay = () => useContext(DisplayContext)

const initWidths = [500, 900, 1800]

export const DisplayProvider = ({ breakpoint, ...props }) => {
  const initWidth = useMemo(
    () => initWidths[breakpoint] ?? initWidths[2],
    [breakpoint],
  )
  const windowRef = useRef({})
  const currentDisplayType = getDisplayType(
    windowRef.current?.innerWidth ?? initWidth,
  )
  const [display, setDisplay] = useState(currentDisplayType)

  const handleResize = () => {
    const currentDisplayType = getDisplayType(
      windowRef.current?.innerWidth ?? initWidth,
    )
    setDisplay(currentDisplayType)
  }

  useEffect(() => {
    windowRef.current = window
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayValues = {
    display,
    displayMoreThan: displayMoreThan(
      windowRef.current?.innerWidth ?? initWidth,
    ),
    displayLessThan: displayLessThan(
      windowRef.current?.innerWidth ?? initWidth,
    ),
  }

  return <DisplayContext.Provider value={displayValues} {...props} />
}

DisplayProvider.propTypes = {
  breakpoint: PropTypes.number,
}
