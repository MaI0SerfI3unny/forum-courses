import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconBase, Path } from '@/components'

const directions = {
  left: 90,
  right: 270,
  up: 180,
  down: 360,
}

const ArrowBox = styled(IconBase)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  svg {
    transition: 0.3s;
    transform: rotate(${(props) => directions?.[props?.direction] ?? 0}deg);
  }
`

function Arrow({ color, height, direction, width, ...props }) {
  return (
    <ArrowBox
      viewBox="0 0 24 24"
      height={height}
      width={width}
      direction={direction}
      {...props}
    >
      <Path
        fill={color}
        d="M8.46458 10.4812C8.7263 10.2163 9.15394 10.2161 9.41594 10.4807L12 13.0904L14.5841 10.4807C14.8461 10.2161 15.2737 10.2163 15.5354 10.4812C15.7929 10.7418 15.7929 11.161 15.5354 11.4216L12.7114 14.28C12.3199 14.6762 11.6801 14.6762 11.2886 14.28L8.46458 11.4216C8.2071 11.161 8.2071 10.7418 8.46458 10.4812Z"
      />
    </ArrowBox>
  )
}

Arrow.propTypes = {
  variant: PropTypes.string,
  direction: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Arrow.defaultProps = {
  variant: null,
  direction: 'down',
  color: 'icon.grayDark',
}

export default Arrow
