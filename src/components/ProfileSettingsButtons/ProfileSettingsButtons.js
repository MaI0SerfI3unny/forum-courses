import { Button, Flex } from '@/ui'
import { FormattedMessage } from 'react-intl'

export default function ProfileSettingsButtons() {
  return (
    <Flex gap="lg">
      <Button variant="primary" type="submit">
        <FormattedMessage id="save_changes" />
      </Button>
      <Button variant="secondary" type="reset">
        <FormattedMessage id="cancel" />
      </Button>
    </Flex>
  )
}
