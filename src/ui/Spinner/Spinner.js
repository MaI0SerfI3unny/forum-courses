import React from 'react'
import PropTypes from 'prop-types'

import { Circle } from '@/components/IconBase'

import StyledSpinner from './Spinner.styled'

const Spinner = ({ color, ...props }) => (
  <StyledSpinner viewBox="0 0 50 50" {...props}>
    <Circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
      stroke={color}
    />
  </StyledSpinner>
)

Spinner.propTypes = {
  color: PropTypes.string,
}

Spinner.defaultProps = {
  color: 'border.blue',
  size: 'lg',
}

export default Spinner
