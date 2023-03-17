import { useGetTags } from '@/queries/questions'
import { Spinner, Row, Tag } from '@/ui'
import { useField } from 'formik'

const QuestionsTags = () => {
  const { data: tagsData, isLoading } = useGetTags()
  const [, meta, helpers] = useField('tags')
  const { setValue } = helpers
  const { value } = meta

  function handleChange(id) {
    if (!Array.isArray(value)) {
      return setValue([id])
    }
    if (value.includes(id)) {
      return setValue(value.filter((tagId) => tagId !== id))
    }
    return setValue([...value, id])
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Row justifyContent="center" gap="0.625rem">
          {tagsData?.map(({ id, name }) => (
            <Tag
              backgroundColor={value?.includes(id) ? 'bg.blueLight' : ''}
              color={value?.includes(id) ? 'text.white' : ''}
              key={id}
              onClick={() => handleChange(id)}
            >
              {name}
            </Tag>
          ))}
        </Row>
      )}
    </>
  )
}

export default QuestionsTags
