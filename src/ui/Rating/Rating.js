import { useState } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { Flex, Text, Box } from '@/ui'
import { Star } from '@/icons'
import { RangeTooltip } from '@/components'
import useSetRating from '@/mutations/useSetRating'

const RatingWrap = styled(Flex)(
  css({
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    py: 'xxs',
    px: 'xs',
    border: '1px solid',
    borderRadius: 1,
    borderColor: 'border.grayLight',
    gap: 'xs',
    position: 'relative',
  }),
)
const Rating = ({ number, label }) => {
  const [showRange, setShowRange] = useState(false)
  const { mutate: setRating, data: result } = useSetRating()

  function handleSave(value) {
    setShowRange(!showRange)
    setRating({ rating: value, type: 'subject' })
  }

  return (
    <Box position="relative">
      <RatingWrap onClick={() => setShowRange(!showRange)}>
        <Star color="icon.yellow" width={12} />
        <Text variant="body14m" color="text.blueLight">
          {number}
        </Text>
      </RatingWrap>
      <Box position="absolute">
        {showRange && (
          <RangeTooltip
            onClick={handleSave}
            value={result?.rating}
            label={label}
          />
        )}
      </Box>
    </Box>
  )
}

Rating.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
}
export default Rating
