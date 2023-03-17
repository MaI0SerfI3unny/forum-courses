import React, { useState } from 'react'
import { CommentsContainer } from './Comments.styled'
import { CommentCard } from '@/blocks'
import PropTypes from 'prop-types'
import { Flex, TabSubject, Box } from '@/ui'
import { CourseCardTabs } from './comments-definition'

const Comments = ({ dataComment, pros, cons, exp }) => {
  const [tabId, setTabId] = useState('all')

  const allTabsItem = pros + cons + exp

  const countTabsItem = [allTabsItem, pros, cons, exp]

  const filteredElement =
    tabId === 'all'
      ? dataComment
      : dataComment.filter((e) => e.commentType === tabId)

  return (
    <Box>
      <Flex gap="2.5rem" mb="xl">
        {CourseCardTabs.map(({ id, label }, idx) => (
          <TabSubject
            key={idx}
            id={id}
            count={countTabsItem[idx]}
            label={label}
            isActive={tabId === id}
            onClick={() => {
              setTabId(id)
            }}
          />
        ))}
      </Flex>
      <CommentsContainer gap="xl" height="32rem">
        {filteredElement.map(({ ...props }, idx) => (
          <CommentCard key={idx} {...props} />
        ))}
      </CommentsContainer>
    </Box>
  )
}

Comments.propTypes = {
  dataComment: PropTypes.array,
  pros: PropTypes.number,
  cons: PropTypes.number,
  exp: PropTypes.number,
}

export default Comments
