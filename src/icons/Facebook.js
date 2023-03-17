import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Facebook({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 20 20" {...props}>
      <Path
        d="M14.9991 0.00416134L12.4055 0C9.49178 0 7.60877 1.9319 7.60877 4.92203V7.19141H5.00107C4.77574 7.19141 4.59326 7.37409 4.59326 7.59943V10.8875C4.59326 11.1128 4.77594 11.2953 5.00107 11.2953H7.60877V19.5922C7.60877 19.8175 7.79125 20 8.01658 20H11.4189C11.6442 20 11.8267 19.8173 11.8267 19.5922V11.2953H14.8757C15.1011 11.2953 15.2835 11.1128 15.2835 10.8875L15.2848 7.59943C15.2848 7.49123 15.2417 7.38762 15.1653 7.31105C15.089 7.23448 14.985 7.19141 14.8768 7.19141H11.8267V5.26763C11.8267 4.34298 12.047 3.87358 13.2515 3.87358L14.9987 3.87295C15.2238 3.87295 15.4063 3.69027 15.4063 3.46514V0.411972C15.4063 0.187052 15.224 0.00457747 14.9991 0.00416134Z"
        fill={color}
      />
    </IconBase>
  )
}

export default Facebook

Facebook.propTypes = {
  color: PropTypes.string,
}
Facebook.defaultProps = {
  color: 'icon.blueDark',
}
