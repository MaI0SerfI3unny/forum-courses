import React from 'react'
import { ButtonCategories, Flex, SearchInput, Text } from '@/ui'
import { CategoryDropdown, QuestionsTags } from '@/components'
import { CategoriesSearchWrap } from '@/blocks/CategoriesSearch/CategoriesSearch.styled'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'
import { ALL_QUESTIONS } from '@/utils/routerPaths'

const QuestionsSearch = ({ withTags, active, setActive, ...props }) => {
  const { values } = useFormikContext()
  const { question, tags, categories } = values
  const { push } = useRouter()
  const handleClick = () => {
    if (Object.keys(values).length === 0) {
      push(ALL_QUESTIONS)
    } else {
      push({
        pathname: ALL_QUESTIONS,
        query: {
          tag: tags ?? [],
          category: categories ?? [],
          title: question ?? '',
        },
      })
    }
  }
  return (
    <>
      <CategoriesSearchWrap {...props}>
        <ButtonCategories active={active} setActive={setActive} />
        <SearchInput
          placeholder="what_to_learn"
          name="question"
          maxWidth="100%"
          isBorderAppear={false}
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        />
        {active && <CategoryDropdown />}
      </CategoriesSearchWrap>
      {withTags && (
        <Flex gap="0.875rem" variant="columnCenter">
          <Text variant="body14m">
            <FormattedMessage id="suggested_tags" />
          </Text>
          <QuestionsTags />
        </Flex>
      )}
    </>
  )
}

export default QuestionsSearch

QuestionsSearch.propTypes = {
  withTags: PropTypes.bool,
  active: PropTypes.bool,
  setActive: PropTypes.func,
}
