import PropTypes from 'prop-types'
import Flex from '../Flex'
import Text from '../Text'
import {
  GreenCircle,
  RangeDot,
  RangeInput,
  SelectedValue,
  SliderRange,
} from './RatingRange.styled'

const ONE_HUNDRED_PERCENTS = 100

const RatingRange = ({ min, max, value: initValue, onChange }) => {
  const value = parseInt(initValue)

  const dots = [...Array(max - min + 1)].map((dot, idx) => {
    return (
      <RangeDot
        key={idx}
        leftPosition={`${(ONE_HUNDRED_PERCENTS / max) * idx}%`}
      />
    )
  })

  return (
    <Flex width="15rem">
      <Text color="text.red" mr="xs">
        {min}
      </Text>
      <Flex position="relative" alignItems="center" flexGrow="1">
        <RangeInput
          type="range"
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={(e) => onChange?.(parseInt(e.target.value))}
        />
        <SliderRange>
          {dots}
          <GreenCircle
            leftPosition={`${(ONE_HUNDRED_PERCENTS / max) * value}%`}
          />
          <SelectedValue
            leftPosition={`${(ONE_HUNDRED_PERCENTS / max) * value}%`}
          >
            <Flex justifyContent="center">
              <Text color="text.white" variant="body14m">
                {value}
              </Text>
            </Flex>
          </SelectedValue>
        </SliderRange>
      </Flex>
      <Text color="text.green" ml="0.7rem">
        {max}
      </Text>
    </Flex>
  )
}

RatingRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}

RatingRange.defaultProps = {
  min: 0,
  max: 5,
}

export default RatingRange
