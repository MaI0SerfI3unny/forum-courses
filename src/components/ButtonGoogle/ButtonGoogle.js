import React from 'react'
import { Button } from '@/ui'
import { Google } from '@/icons'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { GOOGLE_AUTH } from 'featureFlags'

const ButtonGoogle = ({ loginType, ...props }) => {
  if (!GOOGLE_AUTH) {
    return null
  }

  return (
    <Button {...props}>
      <Google mr="0.625rem" />
      <FormattedMessage id={`button_${loginType}_with_google`} />
    </Button>
  )
}

ButtonGoogle.propTypes = {
  flexGrow: PropTypes.number,
  variant: PropTypes.string,
  loginType: PropTypes.string,
}

ButtonGoogle.defaultProps = {
  variant: 'socialLink',
}

export default ButtonGoogle
