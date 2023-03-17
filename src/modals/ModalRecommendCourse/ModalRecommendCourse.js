import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Paper,
  Flex,
  Heading,
  Text,
  Button,
  ButtonClose,
  PopupBlur,
  CustomRadio,
  Input,
  MultiSelect,
  Select,
  Box,
  Option,
} from '@/ui'
import { RadioWrapper, ImagesWrapper } from '@/components'
import {
  AccordionWrapper,
  AccordionCollapse,
  AccordionToggle,
} from '@/components'
import {
  dataTypeList,
  dataSourceList,
  workingConditionsData,
  dataImagesList,
  dataSubjectList,
  dataStatusList,
} from '@/mock'
import AdditionalInfo from './AdditionalInfo'
import PropType from 'prop-types'

const ModalRecommendCourse = ({ open, onClose }) => {
  const [chooseType, setChooseType] = useState('book_ebook_text')
  const [chooseSource, setChooseSource] = useState('udemy')
  const [courseName, setCourseName] = useState('')
  const [link, setLink] = useState('')
  const [workingCondition, setWorkingCondition] = useState('paid')
  const [defaultPrice, setDefaultPrice] = useState('199.99')
  const [newImage, setNewImage] = useState('')
  const [subjects, setSubjects] = useState([])
  const [status, setStatus] = useState('')
  const [visibleInfo, setVisibleInfo] = useState(false)
  const { formatMessage } = useIntl()
  return (
    <PopupBlur open={open}>
      <Paper
        py="2.5rem"
        px="1.813rem"
        width="55.625rem"
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
              <FormattedMessage id="recommend_course" />
            </Heading>
          </Flex>
          <Flex width="100%" flexDirection="column" gap="md">
            <Text variant="body16sb">
              <FormattedMessage id="choose_type" />
            </Text>
            <CustomRadio
              itemList={dataTypeList}
              value={chooseType}
              setValue={setChooseType}
            />
          </Flex>
          <Flex width="100%" flexDirection="column" gap="md">
            <Text variant="body16sb">
              <FormattedMessage id="choose_source" />
            </Text>
            <CustomRadio
              itemList={dataSourceList}
              value={chooseSource}
              setValue={setChooseSource}
            />
          </Flex>
          <Input
            width="100%"
            placeholder={`${formatMessage({ id: 'course_name' })}`}
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <Input
            width="100%"
            placeholder={`${formatMessage({ id: 'link' })}`}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />

          <Flex variant="rowBetween" width="100%">
            <RadioWrapper
              radioValue={workingCondition}
              setRadioValue={setWorkingCondition}
              radioData={workingConditionsData}
            />
            <Flex alignItems="center" gap="md">
              <Text variant="body14m">
                <FormattedMessage id="price" />
              </Text>
              <Input
                value={defaultPrice}
                onChange={(e) => setDefaultPrice(e.target.value)}
              />
            </Flex>
          </Flex>

          <Flex width="100%" flexDirection="column" gap="md">
            <Text variant="body16sb">
              <FormattedMessage id="images" />
            </Text>
            <ImagesWrapper
              imagesList={dataImagesList}
              newImage={newImage}
              setNewImage={setNewImage}
              isEditable={true}
            />
          </Flex>

          <Flex width="100%" flexDirection="column" gap="md">
            <Text variant="body16sb">
              <FormattedMessage id="resource_subject" />
            </Text>
            <MultiSelect
              width="51.125rem"
              label={`${formatMessage({
                id: 'add_subjects_for_this_course',
              })}`}
              value={subjects}
              options={dataSubjectList}
              onChange={(value) => {
                setSubjects(value)
              }}
            />
            <Select
              width="51.125rem"
              name="select"
              label={`${formatMessage({ id: 'beginner' })}`}
              value={status}
              onChange={setStatus}
            >
              {dataStatusList.map((option, idx) => (
                <Option key={idx} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Flex>
          <Box width="100%">
            <AccordionWrapper>
              <Flex flexDirection="column" gap="2.5rem">
                <AccordionCollapse eventKey="add-info">
                  {visibleInfo && <AdditionalInfo />}
                </AccordionCollapse>
                <Flex variant="rowBetween" width="100%">
                  <AccordionToggle eventKey="add-info">
                    <Button
                      variant="secondary"
                      onClick={() => setVisibleInfo(!visibleInfo)}
                    >
                      <FormattedMessage id="additional_info" />
                    </Button>
                  </AccordionToggle>
                  <Button onClick={onClose}>
                    <FormattedMessage id="add_question" />
                  </Button>
                </Flex>
              </Flex>
            </AccordionWrapper>
          </Box>
        </Flex>
      </Paper>
    </PopupBlur>
  )
}

ModalRecommendCourse.propTypes = {
  open: PropType.bool,
  onClose: PropType.func,
}
export default ModalRecommendCourse
