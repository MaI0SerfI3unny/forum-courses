import React from 'react'
import { Flex, Text, Paper, Grid, Spinner } from '@/ui'
import { CategoryDropdownStyles } from './CategoryDropdown.styled'
import { FormattedMessage } from 'react-intl'
import { useGetCategories } from '@/queries/questions'
import { useField } from 'formik'
import FormikCheckbox from '../FormikCheckbox'

const CategoryDropdown = () => {
  const { data: dataCategoryList, isLoading } = useGetCategories()
  const [, meta, helpers] = useField('categories')
  const { setValue } = helpers
  const { value } = meta
  function changeHandler(id) {
    if (!Array.isArray(value)) {
      return setValue([id])
    }
    if (value.includes(id)) {
      return setValue(value.filter((valueId) => valueId !== id))
    }
    setValue([...value, id])
  }
  return (
    <CategoryDropdownStyles>
      <Paper p="1.5rem">
        <Text variant="body16sb">
          <FormattedMessage id="select_one_or_multiple_categories" />
        </Text>
        <Text variant="body12m" color="text.grayNormal">
          <FormattedMessage id="the_contents_of_the_selected_categories_will_be_displayed_first" />
        </Text>
        {isLoading ? (
          <Spinner />
        ) : (
          dataCategoryList && (
            <Grid
              gridTemplateColumns="1fr 1fr 1fr"
              gap="1rem"
              mt="1.75rem"
              mb="2.25rem"
            >
              {dataCategoryList.map(({ id, name, count }) => (
                <Flex
                  as="label"
                  alignItems="center"
                  gap="0.5rem"
                  width="100%"
                  key={id}
                >
                  <FormikCheckbox
                    id={id}
                    name={name}
                    label={name}
                    onChange={() => changeHandler(id)}
                  />
                  <Text as="span" variant="body12m" color="text.grayNormal">
                    {count !== undefined && `(${count})`}
                  </Text>
                </Flex>
              ))}
            </Grid>
          )
        )}
        {/* <Button onClick={() => setActive(false)}> !TODO: do we need this button for saving selected categories
              <FormattedMessage id="save" />
            </Button> */}
      </Paper>
    </CategoryDropdownStyles>
  )
}

export default CategoryDropdown
