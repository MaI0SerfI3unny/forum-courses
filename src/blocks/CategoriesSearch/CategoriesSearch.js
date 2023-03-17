import React, { useState } from 'react'
import { Box } from '@/ui'
import { QuestionsSearch } from '@/components'
import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'

const CategoriesSearch = ({ withTags = false, ...props }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Box width="100%">
        <Formik initialValues={{}}>
          <Form>
            <QuestionsSearch
              withTags={withTags}
              active={active}
              setActive={setActive}
              {...props}
            />
          </Form>
        </Formik>
      </Box>
    </>
  )
}

export default CategoriesSearch

CategoriesSearch.propTypes = {
  withTags: PropTypes.bool,
}
