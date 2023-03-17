import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { Flex, Text } from '@/ui'
import { Like, DisLike } from '@/icons'

const LikesWrap = styled(Flex)(
  css({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'bg.white',
    padding: '0.188rem 0.5rem',
    border: '1px solid',
    borderRadius: 1,
    borderColor: 'border.stroke',
    gap: '0.313rem',
    cursor: 'pointer',
    userSelect: 'none',
  }),
)

const ButtonLikes = ({ variant, active, number, onClick }) => {
  let color = 'text.grayDark'
  if (variant === 'like' && active) {
    color = 'text.green'
  }
  if (variant === 'disLike' && active) {
    color = 'text.red'
  }
  let Icon = Like
  if (variant === 'disLike') {
    Icon = DisLike
  }

  return (
    <LikesWrap variant={variant} onClick={onClick}>
      <Icon width={16} color="icon.grayDark" />
      <Text variant="body12m" color={color}>
        {number}
      </Text>
    </LikesWrap>
  )
}

ButtonLikes.propTypes = {
  variant: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ButtonLikes
