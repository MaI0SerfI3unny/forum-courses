import React from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbPageContainer } from './BreadcrumbPage.styled'
import { NavLink, Row, Text } from '@/ui'

const BreadcrumbPage = ({ pages, textVariant, ...props }) => {
  return (
    <Row alignItems="center">
      {pages.map(({ name, url }, idx) => (
        <BreadcrumbPageContainer key={idx} {...props}>
          {url ? (
            <NavLink href={url}>
              <Text
                variant={textVariant}
                color={
                  idx === pages.length - 1 ? 'text.grayDark' : 'text.blueLight'
                }
              >
                {name}
              </Text>
            </NavLink>
          ) : (
            <Text
              variant={textVariant}
              color={
                idx === pages.length - 1 ? 'text.grayDark' : 'text.blueLight'
              }
            >
              {name}
            </Text>
          )}
        </BreadcrumbPageContainer>
      ))}
    </Row>
  )
}

export default BreadcrumbPage

BreadcrumbPage.propTypes = {
  pages: PropTypes.array,
  textVariant: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
BreadcrumbPage.defaultProps = {
  textVariant: 'body12r',
}
