import { FormikInput, ProfileSettingsButtons } from '@/components'
import { useSnackbar, useUser } from '@/context'
import useUpdateUserInfo from '@/mutations/useUpdateUserInfo'
import { Flex, Box } from '@/ui'
import { Form, Formik } from 'formik'

const ProfilePersonalInformation = () => {
  const { mutateAsync: setUpdateUserInfo } = useUpdateUserInfo()
  const { onToast } = useSnackbar()
  const { userData } = useUser()

  const handleSave = async (values) => {
    const result = await setUpdateUserInfo(values)
    if (result) {
      onToast('You successfully update your info', 'success')
    }
  }
  return (
    <Formik initialValues={userData} onSubmit={handleSave}>
      <Form>
        <Flex width="33.75rem" flexDirection="column" gap="1rem">
          <FormikInput name="name" placeholder="login.name" />
          <FormikInput name="email" placeholder="login.email" />
          <FormikInput name="phone" placeholder="login.phone" />
          <FormikInput name="country" placeholder="login.country" />
          <Box mt="26.5rem">
            <ProfileSettingsButtons />
          </Box>
        </Flex>
      </Form>
    </Formik>
  )
}
export default ProfilePersonalInformation
