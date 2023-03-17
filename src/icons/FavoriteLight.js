import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function FavoriteLight({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Path
        stroke={color}
        d="M2.96711 9.27213L7.60218 13.6263C7.65402 13.675 7.67995 13.6993 7.70463 13.7174C7.88049 13.8462 8.11949 13.8462 8.29535 13.7174C8.32003 13.6993 8.34595 13.675 8.3978 13.6263L13.0329 9.27213C14.337 8.04705 14.4954 6.03106 13.3985 4.61737L13.1923 4.35155C11.8802 2.66038 9.24641 2.944 8.32443 4.87576C8.1942 5.14863 7.80578 5.14863 7.67555 4.87576C6.75357 2.944 4.11981 2.66038 2.80769 4.35155L2.60145 4.61737C1.50462 6.03106 1.66299 8.04705 2.96711 9.27213Z"
      />
    </IconBase>
  )
}

export default FavoriteLight

FavoriteLight.propTypes = {
  color: PropTypes.string,
}
FavoriteLight.defaultProps = {
  color: 'icon.grayDark',
  height: 16,
  width: 16,
}
