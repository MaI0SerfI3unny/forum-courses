import { Flex, Heading, Tag, Text, UserAvatar } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Likes } from '@/components'
import avatar from '@/assets/avatar.svg'

const CommentCard = ({
  name,
  experience,
  title,
  text,
  comment,
  likes,
  dislikes,
  commentType,
}) => {
  return (
    <Flex flexDirection="column" maxWidth="45.25rem">
      <Flex gap="xs" mb="0.563rem">
        <UserAvatar variant="primary" src={avatar} width={24} height={24} />
        <Flex gap="0.313rem" alignItems="center">
          <Heading variant="h4sb">{name}</Heading>
          <Flex gap="xs" alignItems="center">
            <Text
              variant="body14m"
              textTransform="uppercase"
              color="text.grayDark"
            >
              {commentType}
            </Text>
            {experience.map((item, idx) => (
              <Tag key={idx}>{item}</Tag>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="0.313rem" mb="md" flexDirection="column">
        <Text variant="body14sb">{title}</Text>
        <Text variant="body14m" color="text.grayDark">
          {text}
        </Text>
      </Flex>
      <Flex gap="1.25rem" alignItems="center">
        <Likes likes={likes} dislikes={dislikes} />
        <Text variant="body12m" color="text.blueLight">
          <FormattedMessage id="update" />
        </Text>
        <Flex gap="0.313rem">
          <Text variant="body12m" color="text.blueLight">
            <FormattedMessage id="comments" />
          </Text>
          <Text variant="body12m" color="text.grayDark">
            ({comment})
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

CommentCard.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string,
  comment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  commentType: PropTypes.string,
}

export default CommentCard
