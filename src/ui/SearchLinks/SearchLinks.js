import React, { useRef, useState } from 'react'
import { Box } from '@/ui'
import PropTypes from 'prop-types'
import { FormikInput, Popover, PopoverTrigger } from '@/components'
import { useField } from 'formik'
import SearchLinksDropdown from './SearchLinksDropdown'

const SearchLinks = ({ onClose }) => {
  const [, meta, helpers] = useField('title')
  const { setValue } = helpers
  const { value } = meta
  const [showSearchTooltip, setShowSearchTooltip] = useState(false)
  const dropDownContainerRef = useRef(null)
  const linksContainerWidth = dropDownContainerRef.current?.offsetWidth

  const onToggleShowOptions = (value) => {
    setShowSearchTooltip(value)
  }

  const popperConfig = {
    modifiers: {
      name: 'offset',
      options: {
        offset: [0, -8],
      },
    },
  }

  return (
    <PopoverTrigger
      trigger="click"
      placement="bottom"
      show={value?.length > 2 && showSearchTooltip}
      rootClose
      onToggle={onToggleShowOptions}
      popperConfig={popperConfig}
      overlay={
        <Popover width={linksContainerWidth}>
          <SearchLinksDropdown
            searchInput={value}
            onClose={onClose}
            width={linksContainerWidth}
          />
        </Popover>
      }
    >
      <Box ref={dropDownContainerRef}>
        <FormikInput
          name="title"
          placeholder="write_what_you_want_to_learn"
          value={value ?? ''}
          onChange={(e) => {
            setValue(e.target.value)
            setShowSearchTooltip(true)
          }}
        />
      </Box>
    </PopoverTrigger>
  )
}

SearchLinks.propTypes = {
  questionList: PropTypes.array,
  onClose: PropTypes.func,
}

export default SearchLinks
