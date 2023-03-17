import React, { useContext } from 'react'
import { Accordion as RbAccordion, AccordionContext } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import { Box } from '@/ui'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

export const AccordionWrapper = styled(RbAccordion)(
  css({
    '.collapse:not(.show)': {
      display: 'none',
    },
    '.collapsing': {
      height: 0,
      overflow: 'hidden',
      transition: 'height 0.35s ease',
    },
    h2: {
      margin: 0,
    },
  }),
)

export const AccordionToggle = ({ children, eventKey, ...props }) => {
  const { activeEventKey } = useContext(AccordionContext)
  const decoratedOnClick = useAccordionButton(eventKey)

  let child = children
  let isOpen = false
  if (typeof activeEventKey === 'string') {
    isOpen = activeEventKey === eventKey
  }
  if (Array.isArray(activeEventKey)) {
    isOpen = activeEventKey.includes(eventKey)
  }

  if (typeof child === 'function') {
    child = child({ isOpen })
  }

  return (
    <Box cursor="pointer" {...props} onClick={decoratedOnClick}>
      {child}
    </Box>
  )
}
AccordionToggle.propTypes = {
  children: PropTypes.any,
  eventKey: PropTypes.any.isRequired,
}

export const AccordionCollapse = ({ eventKey, ...props }) => {
  return (
    <RbAccordion.Collapse eventKey={eventKey}>
      <Box {...props} />
    </RbAccordion.Collapse>
  )
}

AccordionCollapse.propTypes = {
  children: PropTypes.any,
  eventKey: PropTypes.any.isRequired,
}
