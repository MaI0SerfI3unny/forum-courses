import { Back } from '@/icons'
import { Text, ButtonIcon } from '@/ui'
import { FormattedMessage } from 'react-intl'

const ButtonBack = (props) => {
  return (
    <ButtonIcon {...props}>
      <Back color="icon.dark" />
      <Text variant="body12r" color="text.grayDark">
        <FormattedMessage id="back" />
      </Text>
    </ButtonIcon>
  )
}
export default ButtonBack
