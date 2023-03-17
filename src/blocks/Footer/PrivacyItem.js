import styled from 'styled-components'
import css from '@styled-system/css'
import Link from 'next/link'
import {
  color,
  space,
  border,
  layout,
  compose,
  typography,
} from 'styled-system'
import PropTypes from 'prop-types'

const styleProps = compose(color, space, border, layout, typography)

const TextLink = styled(Link)(
  css({
    boxSizing: 'border-box',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'relative',
    color: 'text.blueLight',
    transition: '0.2s linear',
    fontWeight: 'light',
    fontSize: 'xxs',
    lineHeight: 'sm',
    ':hover': {
      color: 'text.dark',
    },
  }),

  styleProps,
  ({ sx }) => sx,
)

function HeaderItem({ href, title, ...props }) {
  return (
    <TextLink {...props} href={href}>
      {title}
    </TextLink>
  )
}

HeaderItem.propTypes = {
  variant: PropTypes.oneOf(['default']).isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
}

HeaderItem.defaultProps = {
  variant: 'default',
}

export default HeaderItem
