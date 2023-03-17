import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Star({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 12 12" {...props}>
      <Path
        fill={color}
        d="M7.85035 4.19534L6.731 0.538348C6.51018 -0.179449 5.48982 -0.179449 5.27661 0.538348L4.14965 4.19534H0.761154C0.0225372 4.19534 -0.282047 5.13981 0.319507 5.56293L3.09122 7.52743L2.00233 11.0106C1.78151 11.7133 2.60389 12.28 3.19021 11.8342L6 9.7186L8.80979 11.8418C9.39611 12.2876 10.2185 11.7209 9.99767 11.0182L8.90878 7.53498L11.6805 5.57049C12.282 5.13981 11.9775 4.20289 11.2388 4.20289H7.85035V4.19534Z"
      />
    </IconBase>
  )
}

export default Star

Star.propTypes = {
  color: PropTypes.string,
}
Star.defaultProps = {
  color: 'icon.grayDark',
}
