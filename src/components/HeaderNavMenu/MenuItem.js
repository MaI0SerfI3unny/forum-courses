import PropTypes from 'prop-types'
import { MenuItem } from './navMenu.styled'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

function HeaderItem({ href, title, ...props }) {
  const { asPath } = useRouter()

  const parentPath = asPath.split('/')[1]

  const isActive = href === `/${parentPath}`

  return (
    <MenuItem isActive={isActive} href={href} {...props}>
      <FormattedMessage id={title} />
    </MenuItem>
  )
}

HeaderItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
}

export default HeaderItem
