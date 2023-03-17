import { useRouter } from 'next/router'
import React from 'react'

const withRouter = (Component) => {
  return function ComponentWithRouter(props) {
    let location = useRouter()
    return <Component {...props} router={{ location }} />
  }
}

export default withRouter
