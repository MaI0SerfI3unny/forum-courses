import React from 'react'
import {
  Paper,
  Flex,
  Box,
  Heading,
  Text,
  ButtonFavorite,
  Button,
  Image,
} from '@/ui'
import { Likes } from '@/components'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const ProductInfo = ({
  productImage,
  companyImage,
  title,
  subTitle,
  productInfoText,
  price,
  likes,
  dislikes,
}) => {
  return (
    <Flex gap="0.125rem">
      <Paper pt="lg" pb="2.75rem" px="xl" flexGrow="1" radius="r1">
        <Flex gap="lg">
          <Box>
            <Image src={productImage} width={48} alt="alt" />
          </Box>
          <Flex gap="2.5rem" alignItems="center">
            <Flex gap="lg" flexDirection="column">
              <Flex gap="xxs" flexDirection="column">
                <Flex alignItems="center" gap="lg">
                  <Heading variant="h1">{title}</Heading>
                </Flex>
                <Text variant="body12r" color="text.grayDark">
                  {subTitle}
                </Text>
              </Flex>
              <Text variant="body14m" color="text.grayDark">
                {productInfoText}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
      <Paper py="lg" px="xl" radius="r1" minWidth="21.875rem">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Flex justifyContent="space-between" mb="xl">
            <Flex gap="md" alignItems="center">
              <Box>
                <Image src={companyImage} maxWidth={76} height={20} alt="alt" />
              </Box>
            </Flex>
            <ButtonFavorite />
          </Flex>
          <Flex flexDirection="column">
            <Heading mb="xs" variant="h2">
              {price}
            </Heading>
            <Flex alignItems="center" justifyContent="space-between">
              <Button variant="primarySmall">
                <FormattedMessage id="get_it_here" />
              </Button>
              <Likes likes={likes} dislikes={dislikes} />
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  )
}

ProductInfo.propTypes = {
  productImage: PropTypes.object,
  companyImage: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  productInfoText: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
}
export default ProductInfo
