import React from 'react'
import { ButtonBack } from '@/components'
import { ContainerTitle, Flex, Box, Heading } from '@/ui'
import PropTypes from 'prop-types'

const TitlePage = ({ text }) => {
  return (
    <ContainerTitle>
      <Flex justifyContent="space-between">
        <ButtonBack />
        <Heading variant="h1" textAlign="center">
          {text}
        </Heading>
        <Box width="4.168rem" />
      </Flex>
    </ContainerTitle>
  )
}

TitlePage.propTypes = {
  text: PropTypes.string,
}
export default TitlePage
