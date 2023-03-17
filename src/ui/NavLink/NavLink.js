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

const TextLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isActive'].includes(prop) && defaultValidatorFn(prop),
})(
  css({
    boxSizing: 'border-box',
    cursor: 'pointer',
    textDecoration: 'none',
  }),

  styleProps,
  ({ sx }) => sx,
)

function NavLink({ href, ...props }) {
  return <TextLink href={href} passHref {...props} />
}

NavLink.propTypes = {
  variant: PropTypes.oneOf(['default']).isRequired,
  title: PropTypes.string,
  href: PropTypes.string,
}

NavLink.defaultProps = {
  variant: 'default',
}

export default NavLink
