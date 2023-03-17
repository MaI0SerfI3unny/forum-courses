import { FormikInput, ProfileSettingsButtons } from '@/components'
import { useSnackbar } from '@/context'
import useChangeUserPassword from '@/mutations/useChangeUserPassword'
import { Flex, Box } from '@/ui'
import { Form, Formik } from 'formik'

const ProfileSecurity = () => {
  const { mutateAsync: setChangeUserPassword } = useChangeUserPassword()
  const { onToast } = useSnackbar()

  const handleSave = async (values) => {
    const result = await setChangeUserPassword(values)
    if (result) {
      onToast(result, 'success')
    }
  }

  return (
    <Formik initialValues={{}} onSubmit={handleSave}>
      <Form>
        <Flex width="33.75rem" flexDirection="column" gap="1rem">
          <FormikInput
            name="currentPass"
            type="password"
            placeholder="current_password"
          />
          <FormikInput
            name="newPass"
            type="password"
            placeholder="new_password"
          />
          <FormikInput
            name="repeatNewPass"
            type="password"
            placeholder="new_password_confirmation"
          />
          <Box mt="30.5rem">
            <ProfileSettingsButtons />
          </Box>
        </Flex>
      </Form>
    </Formik>
  )
}

export default ProfileSecurity
