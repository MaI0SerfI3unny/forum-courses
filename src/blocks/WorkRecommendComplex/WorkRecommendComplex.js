import PropTypes from 'prop-types'
import { Paper, Flex, Heading, Text, CheckBox } from '@/ui'

const WorkRecommendComplex = ({ title, text }) => {
  return (
    <Paper pt="1.25rem" pb="1.75rem" px="lg">
      <Flex gap="md" justifyContent="space-between" alignItems="flex-end">
        <Flex gap="xs" flexDirection="column" maxWidth="28rem">
          <Heading variant="h3m">{title}</Heading>
          <Text variant="body12m" color="text.grayDark">
            {text}
          </Text>
        </Flex>
        <Flex gap="0.625rem" flexDirection="column">
          <Flex gap="xs" alignItems="center">
            <CheckBox variant="toggle" />
            <Text variant="body12m">Push</Text>
          </Flex>
          <Flex gap="xs" alignItems="center">
            <CheckBox variant="toggle" />
            <Text variant="body12m">Email</Text>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  )
}

WorkRecommendComplex.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}
export default WorkRecommendComplex
