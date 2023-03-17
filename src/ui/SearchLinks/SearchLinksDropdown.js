import { useFindQuestion } from '@/queries/questions'
import { Text, SelectDropdown, Spinner, NavLink, Box, Flex } from '@/ui'
import { useSearchInput, useDebounceValue } from '@/utils'
import { FIND_QUESTION } from '@/utils/routerPaths'
import PropTypes from 'prop-types'

const SearchLinksDropdown = ({ searchInput, onClose, width }) => {
  const searchDebounce = useDebounceValue(searchInput, 1000)
  const { data: foundQuestions, isLoading } = useFindQuestion(searchDebounce)
  const { dataList } = useSearchInput(searchInput, foundQuestions ?? [])

  if (dataList?.length === 0 && !isLoading) {
    return null
  }

  return (
    <Box width={width}>
      <SelectDropdown
        variant="primary"
        shadow="tooltip"
        radius="r1"
        border="primary"
        maxHeight="12rem"
        overflow="auto"
      >
        {isLoading ? (
          <Flex p="md" variant="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          dataList?.map(({ title, id }) => {
            return (
              <NavLink key={id} href={FIND_QUESTION.replace(':id', id)}>
                <Text
                  onClick={onClose}
                  cursor="pointer"
                  variant="body14m"
                  p="xxs"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></Text>
              </NavLink>
            )
          })
        )}
      </SelectDropdown>
    </Box>
  )
}

export default SearchLinksDropdown

SearchLinksDropdown.propTypes = {
  searchInput: PropTypes.string,
  onClose: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
