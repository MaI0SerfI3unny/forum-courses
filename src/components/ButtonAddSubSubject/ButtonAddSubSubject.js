import { Paper, Flex, Button, Text } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { Plus } from '@/icons'

const ButtonAddSubSubject = () => {
  return (
    <Button variant="transparent">
      <Paper
        width="calc(100%/5)"
        minWidth="18.25rem"
        height="100%"
        variant="dashed"
      >
        <Flex
          height="100%"
          variant="column"
          alignItems="center"
          justifyContent="center"
        >
          <Plus />
          <Text color="text.blueLight">
            <FormattedMessage id="add_new" />
          </Text>
        </Flex>
      </Paper>
    </Button>
  )
}

export default ButtonAddSubSubject
