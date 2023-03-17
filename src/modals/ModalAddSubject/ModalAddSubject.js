import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Paper,
  Flex,
  Heading,
  Text,
  Select,
  Button,
  ButtonClose,
  PopupBlur,
  Option,
  Input,
  AddNewOption,
} from '@/ui'
import PropType from 'prop-types'
import {
  subjectList,
  subjectTypesList,
  prerequisitesData,
} from './subject-definition'

const ModalAddSubject = ({ open, onClose }) => {
  const { formatMessage } = useIntl()
  const [subjectName, setSubjectName] = useState('Web development')
  const [subjectType, setSubjectType] = useState('General Subject')
  const [subjectText, setSubjectText] = useState('CSS Compiler')
  const [options, setOptions] = useState([''])
  const [optionsSelect, setOptionsSelect] = useState([''])
  return (
    <PopupBlur open={open}>
      <Paper
        py="2.5rem"
        px="1.813rem"
        width="37.5rem"
        radius="r3"
        shadow="popup"
      >
        <ButtonClose
          onClick={onClose}
          top="1.25rem"
          right="lg"
          position="absolute"
        />
        <Flex variant="columnCenter" gap="xl">
          <Flex gap="lg" flexDirection="column">
            <Heading variant="h2">
              <FormattedMessage id="add_subject" />
            </Heading>
          </Flex>
          <Flex gap="md" flexDirection="column" width="100%">
            <Select value={subjectName} onChange={setSubjectName}>
              {subjectList.map((option, idx) => (
                <Option key={idx} value={option}>
                  {option}
                </Option>
              ))}
            </Select>

            <Select value={subjectType} onChange={setSubjectType}>
              {subjectTypesList.map((option, idx) => (
                <Option key={idx} value={option}>
                  {option}
                </Option>
              ))}
            </Select>

            <Input
              value={subjectText}
              onChange={(e) => setSubjectText(e.target.value)}
            />
          </Flex>

          {subjectType === 'General Subject' && (
            <Flex flexDirection="column" gap="0.625rem" width="100%">
              <Text variant="button">
                <FormattedMessage id="add_option" />
              </Text>
              <AddNewOption
                label={formatMessage({ id: 'add_php_framework_option' })}
                options={options}
                setOptions={setOptions}
              />
            </Flex>
          )}

          <Flex flexDirection="column" gap="0.625rem" width="100%">
            <Text variant="button">
              <FormattedMessage id="prerequisites" />
            </Text>
            <AddNewOption
              label={formatMessage({ id: 'prerequisites' })}
              options={optionsSelect}
              setOptions={setOptionsSelect}
              selectData={prerequisitesData}
            />
          </Flex>

          <Button>
            <FormattedMessage id="add_question" />
          </Button>
        </Flex>
      </Paper>
    </PopupBlur>
  )
}

ModalAddSubject.propTypes = {
  open: PropType.bool,
  onClose: PropType.func,
}
export default ModalAddSubject
