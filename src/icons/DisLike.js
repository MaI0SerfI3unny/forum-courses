import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function DisLike({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Path
        fill={color}
        d="M8.50972 14.7253L5.53415 11.2956C5.33543 11.0665 5.22263 10.7508 5.22263 10.4227V4.23815C5.22263 3.55717 5.70603 3 6.29684 3H11.1308C11.5605 3 11.9472 3.29716 12.1191 3.74908L13.87 8.46024C14.3212 9.68601 13.5424 11.048 12.3876 11.048H9.35297L9.86323 13.8833C9.91694 14.1929 9.83637 14.5086 9.64301 14.7315C9.32612 15.0905 8.82124 15.0905 8.50972 14.7253ZM3.07421 3C3.66503 3 4.14842 3.55717 4.14842 4.23815V9.19075C4.14842 9.87173 3.66503 10.4289 3.07421 10.4289C2.48339 10.4289 2 9.87173 2 9.19075V4.23815C2 3.55717 2.48339 3 3.07421 3Z"
      />
    </IconBase>
  )
}

export default DisLike

DisLike.propTypes = {
  color: PropTypes.string,
}
DisLike.defaultProps = {
  color: 'icon.grayDark',
}
