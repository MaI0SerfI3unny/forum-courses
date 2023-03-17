import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Button, Flex, Paper, Box, RatingRange, Text } from '@/ui'
import { FormattedMessage } from 'react-intl'

const PaperTooltip = styled(Box)(
  css({
    position: 'absolute',
    left: 0,
    top: 'calc(100% + 1rem)',
    zIndex: 2,
  }),
)

const RangeTooltip = ({ onClick, value, label }) => {
  let initial = typeof value === 'undefined' ? 0 : value
  const [ratingValue, setRatingValue] = useState(initial)
  return (
    <PaperTooltip>
      <Paper
        shadow="tooltip"
        variant="border"
        px="1.25rem"
        py="1.25rem"
        width="22.125rem"
      >
        <Flex
          alignItems="baseline"
          justifyContent="space-between"
          pt="0.375rem"
        >
          <Flex flexDirection="column" alignItems="center">
            <RatingRange value={ratingValue} onChange={setRatingValue} />
            <Text variant="body14m">
              <FormattedMessage id={label} />
            </Text>
          </Flex>
          <Button variant="secondarySmall" onClick={() => onClick(ratingValue)}>
            <FormattedMessage id="save" />
          </Button>
        </Flex>
      </Paper>
    </PaperTooltip>
  )
}

RangeTooltip.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  result: PropTypes.object,
}

export default RangeTooltip
