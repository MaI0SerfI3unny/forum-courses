import { FormikCheckbox, ProfileSettingsButtons } from '@/components'
import { Box, Flex, Paper, Text } from '@/ui'
import { Form, Formik } from 'formik'
import { FormattedMessage } from 'react-intl'
import { profileNotificationDefinitions } from './profile_notification-definitions'

const ProfileNotificationSettings = () => {
  return (
    <Box>
      <Box>
        <Text variant="body14m">
          <FormattedMessage id="delicata_laboramus" />
          <FormattedMessage id="pro_ea_movet" />
          <br />
          <FormattedMessage id="pro_consul" />
        </Text>
      </Box>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        <Form>
          <Flex flexDirection="column" gap="1rem" mt="1.938rem">
            {profileNotificationDefinitions.map(({ id, title }) => (
              <Paper variant="primary" p="1rem" pb="2rem" key={id}>
                <Flex justifyContent="space-between">
                  <Flex flexDirection="column">
                    <Text variant="H3m">
                      <FormattedMessage id={title} />
                    </Text>
                    <Text color="text.grayDark" variant="body12m">
                      <FormattedMessage id="pro_ea_movet" />
                      <br />
                      <FormattedMessage id="pro_consul" />
                    </Text>
                  </Flex>
                  <Flex
                    flexDirection="column"
                    alignSelf="flex-end"
                    gap="0.5rem"
                  >
                    <FormikCheckbox name="push" variant="toggle" />
                    <FormikCheckbox name="email" variant="toggle" />
                  </Flex>
                </Flex>
              </Paper>
            ))}
            <Box mt="12.75rem">
              <ProfileSettingsButtons />
            </Box>
          </Flex>
        </Form>
      </Formik>
    </Box>
  )
}

export default ProfileNotificationSettings
