import { Text, ButtonIcon } from '@/ui'
import { Plus } from '@/icons'
import { FormattedMessage } from 'react-intl'

const AddAnotherOption = (props) => {
  return (
    <ButtonIcon {...props}>
      <Plus width="20" color="icon.blueLight" />
      <Text variant="body14m" color="text.blueLight">
        <FormattedMessage id="add_another_option" />
      </Text>
    </ButtonIcon>
  )
}
export default AddAnotherOption
