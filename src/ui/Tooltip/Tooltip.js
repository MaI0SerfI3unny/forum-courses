import PropTypes from 'prop-types'
import { Paper, Text, Button } from '@/ui'
import { Popover, PopoverTrigger } from '@/components'

const Tooltip = ({ text, textButton }) => {
  return (
    <PopoverTrigger
      trigger="click"
      placement="top-end"
      rootClose
      overlay={
        <Popover>
          <Paper p="sm" width="11.5rem" shadow="tooltip" radius="r1">
            <Text variant="caption10r">{text}</Text>
          </Paper>
        </Popover>
      }
    >
      <Button>{textButton}</Button>
    </PopoverTrigger>
  )
}
Tooltip.propTypes = {
  text: PropTypes.string,
  textButton: PropTypes.string,
}

export default Tooltip
