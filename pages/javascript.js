import React from 'react'
import { ContainerPage, Flex, BreadcrumbPage, TitlePage } from '@/ui'
import { ListTop } from '@/components'
import { CourseCard } from '@/blocks'
import { dataPages, dataCourseCard } from '@/mock'
import { PageLayout } from '@/layouts'

export default function Javascript() {
  return (
    <PageLayout>
      <ContainerPage>
        <Flex gap="lg" flexDirection="column">
          <Flex gap="xl" flexDirection="column">
            <Flex justifyContent="center">
              <BreadcrumbPage pages={dataPages} />
            </Flex>
            <TitlePage text={'Javascript'} />
          </Flex>
          <ListTop listData={dataCourseCard} />
          <Flex gap="xs" flexDirection="column">
            {dataCourseCard.map(({ id, ...dataCourseCard }) => (
              <CourseCard key={id} {...dataCourseCard} />
            ))}
          </Flex>
        </Flex>
      </ContainerPage>
    </PageLayout>
  )
}
