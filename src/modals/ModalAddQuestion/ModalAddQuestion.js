import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Paper,
  Flex,
  Heading,
  Text,
  Button,
  ButtonClose,
  PopupBlur,
  Option,
  SearchLinks,
  Spinner,
} from '@/ui'
import PropType from 'prop-types'
import { dataQuestionList } from '@/mock'
import useCreateQuestion from '@/mutations/useCreateQuestion'
import {
  CreatedQuestionToastLink,
  FormikMultiSelect,
  FormikSelect,
} from '@/components'
import { Form, Formik } from 'formik'
import { useGetCategories, useGetTags } from '@/queries/questions'
import { useSnackbar } from '@/context'

const ModalAddQuestion = ({ open, onClose }) => {
  const { mutateAsync: setQuestion } = useCreateQuestion()
  const { formatMessage } = useIntl()
  const { data: dataCategoryList, isLoading } = useGetCategories()
  const { data: dataTagsList } = useGetTags()
  const { onToast } = useSnackbar()

  const handleSave = async (values) => {
    const result = await setQuestion(values)
    const toast = (
      <CreatedQuestionToastLink title={result?.title} id={result?.id} />
    )
    if (result) {
      onToast(toast, 'success')
      onClose()
    }
  }
  return (
    <PopupBlur open={open}>
      <Formik initialValues={{}} onSubmit={handleSave}>
        <Form>
          <Paper
            py="2.5rem"
            px="1.813rem"
            width="37.5rem"
            radius="r3"
            shadow="popup"
          >
            <ButtonClose
              top="1.25rem"
              right="lg"
              position="absolute"
              onClick={onClose}
            />
            <Flex variant="columnCenter" gap="xl">
              <Flex gap="lg" variant="columnCenter">
                <Heading variant="h2">
                  <FormattedMessage id="text.add_question" />
                </Heading>
                <Text variant="body14m" textAlign="center">
                  <FormattedMessage id="add_question_modal.description_text" />
                </Text>
              </Flex>

              {isLoading ? (
                <Spinner />
              ) : (
                <Flex gap="md" flexDirection="column">
                  <SearchLinks
                    questionList={dataQuestionList}
                    onClose={onClose}
                  />
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <FormikSelect
                      name="categoryId"
                      label="category"
                      list={dataCategoryList}
                    >
                      {dataCategoryList?.map(({ id, name }) => (
                        <Option key={id} value={id}>
                          {name}
                        </Option>
                      ))}
                    </FormikSelect>
                  )}
                  <FormikMultiSelect
                    name="tags"
                    label={formatMessage({ id: 'tags' })}
                    options={dataTagsList}
                  />
                </Flex>
              )}

              <Button type="submit">
                <FormattedMessage id="add_question" />
              </Button>
            </Flex>
          </Paper>
        </Form>
      </Formik>
    </PopupBlur>
  )
}

ModalAddQuestion.propTypes = {
  open: PropType.bool,
  onClose: PropType.func,
}
export default ModalAddQuestion
