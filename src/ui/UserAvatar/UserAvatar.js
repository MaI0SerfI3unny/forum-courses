import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box, Text, Img, Flex } from '@/ui'
import { useEffect, useMemo, useState } from 'react'
import stringAvatar from '@/utils/helpers/stringAvatar'

const attrsVariants = {
  primary: {
    width: 24,
    height: 24,
  },
  secondary: {
    width: 32,
    height: 32,
  },
}

const variants = {
  primary: {
    border: '1px solid !important',
    borderColor: '#EDF1FC !important',
  },
}

const AvatarWrapper = styled(Box)(
  {
    overflow: 'hidden',
    borderRadius: '50%',
  },
  variant({
    variants,
  }),
)

const UserAvatar = ({ variant, avatar, name, bg, ...props }) => {
  const [isImgError, setIsImgError] = useState(false)

  const fullName = useMemo(() => {
    if (typeof name === 'string') {
      return name
    }
    return `${name?.firstName ?? ''} ${name?.lastName ?? ''}`
  })

  const errorHandler = () => {
    setIsImgError(true)
  }

  useEffect(() => {
    setIsImgError(false)
  }, [avatar])

  let avatarElement = null

  if ((!avatar || isImgError) && name) {
    avatarElement = (
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor={bg !== true ? 'border.background' : 'border.dark'}
        borderRadius="1rem"
        size="2rem"
      >
        <Text {...stringAvatar(name)} />
      </Flex>
    )
  }

  if (avatar && !isImgError) {
    avatarElement = (
      <Img
        width={16}
        height={16}
        title={fullName}
        src={avatar !== [] ?? '/'}
        onError={errorHandler}
        {...props}
      />
    )
  }

  const attrs = attrsVariants[variant] ?? {}
  return (
    <AvatarWrapper Box variant={variant} {...attrs} {...props}>
      {avatarElement}
    </AvatarWrapper>
  )
}

UserAvatar.propTypes = {
  variant: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  avatar: PropTypes.oneOfType([PropTypes.string]),
}

export default UserAvatar
