import React from 'react'
import { ContainerPage, Flex, Row, BreadcrumbPage, Heading, Text } from '@/ui'
import { QuestionCard, WorkRecommend } from '@/blocks'
import { dataWorkRecommend } from '@/mock'
import { FormattedMessage } from 'react-intl'
import { PageLayout } from '@/layouts'
import { useRouter } from 'next/router'
import { useSearchQuestions } from '@/queries/questions'
import { ContentLoaderBlock, ContentLoaderHeading } from '@/components'

export default function Questions() {
  const { query } = useRouter()
  const { data: searchedQuestions, isLoading } = useSearchQuestions(query)

  const questions = isLoading
    ? [...Array(5)].map((_, idx) => <ContentLoaderBlock key={idx} />)
    : searchedQuestions?.map(({ id, ...data }) => (
        <QuestionCard key={id} id={id} {...data} />
      ))

  const dataPages = [
    {
      name: 'Home',
      url: '/',
    },
  ]

  return (
    <PageLayout>
      <ContainerPage>
        <Flex gap="xl" flexDirection="column">
          <Flex gap="xl" flexDirection="column" alignItems="center">
            <BreadcrumbPage pages={dataPages} />
            <Heading variant="h1">
              {isLoading ? (
                <ContentLoaderHeading width="30rem" />
              ) : (
                searchedQuestions?.length !== 0 && query?.title
              )}
            </Heading>
          </Flex>
          <Row gap="lg">
            <Flex gap="xs" flexDirection="column" flexGrow="1">
              {searchedQuestions?.length === 0 ? (
                <Text variant="H3m">No results found.</Text>
              ) : (
                questions
              )}
            </Flex>
            <Row gap="0.625rem" flexDirection="column">
              <Heading variant="h5">
                <FormattedMessage id="recommend" />
              </Heading>
              <Row gap="0.625rem" flexDirection={['column', 'row', 'column']}>
                {dataWorkRecommend.map(({ id, ...dataWorkRecommend }) => (
                  <WorkRecommend key={id} {...dataWorkRecommend} />
                ))}
              </Row>
            </Row>
          </Row>
        </Flex>
      </ContainerPage>
    </PageLayout>
  )
}
