import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Row, Flex, Text, SortSelect, Option, TabSubject } from '@/ui'
import { ButtonAddSubject } from '@/components'
import { FormattedMessage } from 'react-intl'
import { SubjectCard } from '@/blocks'
import { tabsItems } from '@/ui/TabSubject/tab-definitions'

const sortData = ['Top rated', 'Top rated2']

export default function HeadLine({ subjects, isLoading }) {
  const [sortValue, setSortValue] = useState('Top rated')
  const handleSort = (value) => {
    setSortValue(value)
  }

  const [tabId, setTabId] = useState('all_subjects')

  const filterElement =
    tabId === 'all_subjects'
      ? subjects
      : subjects?.filter((e) => e.label === tabId)

  return (
    <>
      <Paper py="xxs" pr="xxs" pl="lg" radius="r1">
        <Row gap="md" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="xxl">
            {tabsItems.map(({ id, label }) => (
              <TabSubject
                key={id}
                isActive={tabId === id}
                onClick={() => {
                  setTabId(id)
                }}
                label={<FormattedMessage id={label} />}
              />
            ))}
          </Flex>
          <Flex alignItems="center" gap="lg">
            <Flex alignItems="center" gap="md">
              <Text variant="body12r" color="text.grayDark">
                Sort
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
              <ButtonAddSubject />
            </Flex>
          </Flex>
        </Row>
      </Paper>
      <Flex gap="xs" flexDirection="column">
        {filterElement?.map(({ ...props }, idx) => (
          <SubjectCard key={idx} isLoading={isLoading} {...props} />
        ))}
      </Flex>
    </>
  )
}

HeadLine.propTypes = {
  subjects: PropTypes.array,
  isLoading: PropTypes.bool,
}
