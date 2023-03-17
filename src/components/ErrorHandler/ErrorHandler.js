import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Flex, Heading, Text } from '@/ui'
import withRouter from '@/utils/helpers/withRouter'
import { Wrapper } from './ErrorHandler.styled'

class ErrorHandler extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false, errorInfo: null, hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    })
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.hasError &&
      prevProps?.router?.location?.pathname !==
        this.props?.router?.location?.pathname
    ) {
      this.setState({ hasError: false })
    }
  }

  onTryAgain() {
    this.setState({ hasError: false })
    this.props.onTryAgain?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper
          as={this.props.ErrorWrapper ?? Flex}
          height={this.props.height}
        >
          <Heading>Something went wrong.</Heading>
          <Text>{this.state?.error?.name?.toString()}</Text>
          <Text>{this.state.error?.message}</Text>
          <Button onClick={() => this.onTryAgain()}>Try again</Button>
        </Wrapper>
      )
    }
    return this.props.children
  }
}

export default withRouter(ErrorHandler)

ErrorHandler.propTypes = {
  children: PropTypes.any,
  router: PropTypes.object,
  ErrorWrapper: PropTypes.any,
  onTryAgain: PropTypes.func,
  height: PropTypes.string,
}

ErrorHandler.defaultProps = {
  children: null,
  height: '100%',
}
