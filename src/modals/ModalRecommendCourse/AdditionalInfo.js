import React, { useState } from 'react'
import {
  Heading,
  Text,
  Textarea,
  Input,
  Select,
  Option,
  CheckBox,
  Flex,
} from '@/ui'
import {
  dataLanguageList,
  dataFileTypesList,
  dataToolsList,
  dataCoursesList,
} from '@/mock'
import { FormattedMessage, useIntl } from 'react-intl'
import { ToolsSelector, CoursesList } from '@/components'

const AdditionalInfo = () => {
  const [descriptionText, setDescriptionText] = useState('')
  const [transitTime, setTransitTime] = useState('')
  const [language, setLanguage] = useState('')
  const [checkedItems, setCheckedItems] = useState([])
  const [selectedTools, setSelectedTools] = useState([])
  const { formatMessage } = useIntl()

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <Flex flexDirection="column" gap="md" width="100%">
      <Heading
        variant="h3m"
        color="text.grayNormal"
        textTransform="uppercase"
        mb="1.5rem"
        textAlign="center"
      >
        <FormattedMessage id="additional_information" />
      </Heading>

      <Textarea
        placeholder={`${formatMessage({
          id: 'description',
        })}`}
        width="100%"
        height="15rem"
        value={descriptionText}
        onChange={setDescriptionText}
      />
      <Flex gap="1.25rem">
        <Input
          width="9rem"
          placeholder={`${formatMessage({ id: 'transit_time' })}`}
          value={transitTime}
          onChange={setTransitTime}
        />
        <Select
          name="select"
          label={`${formatMessage({ id: 'languages' })}`}
          value={language}
          onChange={setLanguage}
          width="22.25rem"
        >
          {dataLanguageList.map((lan, idx) => (
            <Option key={idx} value={lan}>
              {lan}
            </Option>
          ))}
        </Select>
      </Flex>
      <Flex gap="3rem" mt="0.5rem">
        {dataFileTypesList.map((name, idx) => {
          return (
            <Flex key={idx} gap="sm" alignItems="center">
              <CheckBox checked={checkedItems[name]} onChange={handleChange} />
              <Text variant="body14m">{name}</Text>
            </Flex>
          )
        })}
      </Flex>

      <Flex flexDirection="column" gap="1.25rem" width="100%">
        <Text variant="body16sb">
          <FormattedMessage id="tools" />/
          <FormattedMessage id="programs_required_for_the_course" />
        </Text>
        <ToolsSelector
          {...{ dataToolsList, selectedTools, setSelectedTools }}
        />
      </Flex>

      <Flex flexDirection="column" gap="1.25rem" width="100%">
        <Text variant="body16sb">
          <FormattedMessage id="content_of_the_course" />
        </Text>
        <CoursesList dataCoursesList={dataCoursesList} />
      </Flex>
    </Flex>
  )
}

export default AdditionalInfo
