import PropTypes from 'prop-types'
import { Paper, Heading, Tag, Text, Row, Flex } from '@/ui'

const WorkRecommend = ({ title, paths, salary, professions }) => {
  return (
    <Paper p="0.938rem" width="14.375rem" shadow="main" radius="r3">
      <Flex flexDirection="column" gap="0.625rem">
        <Heading variant="h3m">{title}</Heading>
        <Flex>
          <Tag variant="numberSyllabus">{paths} paths</Tag>
        </Flex>
        <Flex flexDirection="column" gap="0.125rem">
          <Text variant="body12m">Avarage salary </Text>
          <Heading variant="h3sb">${salary}</Heading>
        </Flex>

        <Row gap="0.313rem">
          {professions.map((profession, idx) => (
            <Tag variant="small" key={idx}>
              {profession}
            </Tag>
          ))}
        </Row>
      </Flex>
    </Paper>
  )
}
WorkRecommend.propTypes = {
  title: PropTypes.string,
  paths: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  professions: PropTypes.array,
}

export default WorkRecommend
