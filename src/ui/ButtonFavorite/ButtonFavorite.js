import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@/ui'
import { Favorite, FavoriteLight } from '@/icons'

const ButtonFavorite = ({ liked, ...props }) => {
  const [isFavorite, setIsFavorite] = useState(liked)
  return (
    <IconButton
      variant="isFavorite"
      height="2rem"
      width="2rem"
      isFavorite={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
      {...props}
    >
      {isFavorite ? <Favorite color="icon.green" /> : <FavoriteLight />}
    </IconButton>
  )
}

ButtonFavorite.propTypes = {
  onClick: PropTypes.func,
  liked: PropTypes.bool,
}
export default ButtonFavorite
