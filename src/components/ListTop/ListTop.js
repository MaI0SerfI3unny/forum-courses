import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, FormattedPlural } from 'react-intl'
import { Paper, Row, Flex, Text, SortSelect, Option } from '@/ui'
import { ButtonRecommendCourse } from '@/components'

const sortData = ['Top rated', 'Top rated2']

export default function ListTop({ listData }) {
  const [sortValue, setSortValue] = useState('Top rated')
  const handleSort = (value) => {
    setSortValue(value)
  }

  return (
    <Paper py="xxs" pr="xxs" pl="lg" radius="r1">
      <Row gap="md" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="md">
          <Flex alignItems="center" gap="xs">
            <Text variant="button">{listData.length}</Text>
            <Text variant="body12r" color="text.grayDark">
              <FormattedPlural
                value={listData.length}
                one={<FormattedMessage id="course_found" />}
                few={<FormattedMessage id="courses_found" />}
                other={<FormattedMessage id="courses_found" />}
              />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap="lg">
          <Flex alignItems="center" gap="md">
            <Text variant="body12r" color="text.grayDark">
              <FormattedMessage id="sort" />
            </Text>
            <SortSelect
              name="sort-select"
              value={sortValue}
              onChange={handleSort}
            >
              {sortData.map((element, idx) => (
                <Option key={idx} value={element}>
                  {element}
                </Option>
              ))}
            </SortSelect>
            <ButtonRecommendCourse size="32" />
          </Flex>
        </Flex>
      </Row>
    </Paper>
  )
}

ListTop.propTypes = {
  sortData: PropTypes.array,
  listData: PropTypes.array,
}
