import { Paper, Flex, Text, Heading, Tag, Row, NavLink } from '@/ui'
import { ALL_QUESTIONS } from '@/utils/routerPaths'
import PropTypes from 'prop-types'

const QuestionCard = ({
  id,
  title,
  subjects,
  subjectAdd,
  recommendation,
  recommendationAdd,
  isProfile,
  tags,
}) => {
  return (
    <NavLink href={`${ALL_QUESTIONS}/${id}`}>
      <Paper py="1.375rem" px="lg">
        <Flex
          gap={isProfile ? 'md' : 'xs'}
          flexDirection={!isProfile ? 'column' : undefined}
          justifyContent={isProfile && 'space-between'}
        >
          <Heading variant="h3sb">{title}</Heading>
          <Flex
            gap="md"
            justifyContent={!isProfile ? 'space-between' : undefined}
          >
            {tags && (
              <Row gap="0.625rem">
                {tags?.map(({ name, id }, idx) => (
                  <Tag key={id ?? idx}>{name}</Tag>
                ))}
              </Row>
            )}
            <Tag
              color={isProfile && 'text.dark'}
              variant={!isProfile ? 'numberSyllabus' : undefined}
            >
              {!isProfile
                ? `${subjects?.length} Subjects`
                : `subjects • ${subjects === undefined ? 0 : subjects?.length}`}
              {subjectAdd && (
                <Text as="span" variant="body11m" color="text.green" ml="xs">
                  {subjectAdd}
                </Text>
              )}
            </Tag>
            {recommendation && (
              <Tag color="text.dark">
                recommendations • {recommendation}
                {recommendationAdd && (
                  <Text as="span" variant="body11m" color="text.green" ml="xs">
                    {recommendationAdd}
                  </Text>
                )}
              </Tag>
            )}
          </Flex>
        </Flex>
      </Paper>
    </NavLink>
  )
}

QuestionCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  subjects: PropTypes.array,
  subjectAdd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  recommendation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  recommendationAdd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isProfile: PropTypes.bool,
  tags: PropTypes.array,
}

export default QuestionCard
