import React from 'react'
import { Button } from '@/ui'
import { Facebook } from '@/icons'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { FACEBOOK_AUTH } from 'featureFlags'

const ButtonFacebook = ({ loginType, ...props }) => {
  if (!FACEBOOK_AUTH) {
    return null
  }
  return (
    <Button {...props}>
      <Facebook mr="0.625rem" />
      <FormattedMessage id={`button_${loginType}_with_facebook`} />
    </Button>
  )
}

ButtonFacebook.propTypes = {
  flexGrow: PropTypes.number,
  variant: PropTypes.string,
  loginType: PropTypes.string,
}

ButtonFacebook.defaultProps = {
  variant: 'socialLink',
}

export default ButtonFacebook
