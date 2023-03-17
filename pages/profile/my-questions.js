import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout'
import { QuestionCard } from '@/blocks'
import { Flex, Box, Heading } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useGetMyQuestions } from '@/queries/questions'

export default function MyQuestions() {
  const { data: questionsData } = useGetMyQuestions()
  return (
    <ProfileLayout>
      <Box>
        <Heading variant="h2" mt="0.375rem">
          <FormattedMessage id="my_questions" />
        </Heading>
        <Flex flexDirection="column" gap="0.438rem" mt="2rem">
          {questionsData?.map?.((question) => {
            return <QuestionCard key={question?.id} isProfile {...question} />
          })}
        </Flex>
      </Box>
    </ProfileLayout>
  )
}
