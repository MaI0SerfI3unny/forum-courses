import React, { useEffect } from 'react'
import { ContainerPage, Flex, BreadcrumbPage, TitlePage, Spinner } from '@/ui'
import { ContentLoader, HeadLine } from '@/components'
import { PageLayout } from '@/layouts'
import { useGetQuestion } from '@/queries/questions'
import { useRouter } from 'next/router'
import { GET_QUESTIONS_PATH } from '@/services'

export default function Question() {
  const { query, push } = useRouter()
  const { data, isLoading } = useGetQuestion(query.id)

  useEffect(() => {
    if (!isLoading && !data) {
      push(GET_QUESTIONS_PATH)
    }
  }, [isLoading, data, push])
  const dataPages = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: data?.category?.name,
      url: `/category/${data?.category?.id}`,
    },
  ]

  return (
    <PageLayout>
      <ContainerPage>
        <Flex gap="lg" flexDirection="column">
          <Flex gap="xl" flexDirection="column">
            <Flex justifyContent="center">
              {isLoading ? (
                <ContentLoader width="15rem" />
              ) : (
                <BreadcrumbPage pages={dataPages} />
              )}
            </Flex>
            <TitlePage text={data !== undefined ? data?.title : ''} />
          </Flex>
          {isLoading ? (
            <Spinner />
          ) : (
            <HeadLine isLoading={isLoading} subjects={data?.subjects} />
          )}
        </Flex>
      </ContainerPage>
    </PageLayout>
  )
}
