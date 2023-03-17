import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Like({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Path
        fill={color}
        d="M8.50972 1.27472L5.53415 4.7044C5.33543 4.93345 5.22263 5.24918 5.22263 5.57729V11.7619C5.22263 12.4428 5.70603 13 6.29684 13H11.1308C11.5605 13 11.9472 12.7028 12.1191 12.2509L13.87 7.53976C14.3212 6.31399 13.5424 4.95202 12.3876 4.95202H9.35297L9.86323 2.11666C9.91694 1.80712 9.83637 1.4914 9.64301 1.26853C9.32612 0.909465 8.82124 0.909465 8.50972 1.27472ZM3.07421 13C3.66503 13 4.14842 12.4428 4.14842 11.7619V6.80925C4.14842 6.12827 3.66503 5.5711 3.07421 5.5711C2.48339 5.5711 2 6.12827 2 6.80925V11.7619C2 12.4428 2.48339 13 3.07421 13Z"
      />
    </IconBase>
  )
}

export default Like

Like.propTypes = {
  color: PropTypes.string,
}
Like.defaultProps = {
  color: 'icon.grayDark',
}
