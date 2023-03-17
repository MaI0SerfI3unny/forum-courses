import React from 'react'
import { ContainerPage, Flex, BreadcrumbPage, Heading } from '@/ui'
import { ListTop } from '@/components'
import { CourseCard } from '@/blocks'
import { dataPages, dataCourseCard } from '@/mock'
import { PageLayout } from '@/layouts'
import { FormattedMessage } from 'react-intl'

export default function SpecificCourses() {
  return (
    <PageLayout>
      <ContainerPage>
        <Flex gap="lg" flexDirection="column">
          <Flex gap="xl" flexDirection="column">
            <Flex gap="xl" flexDirection="column" alignItems="center">
              <BreadcrumbPage pages={dataPages} />
              <Heading variant="h1">
                <FormattedMessage id="specific_courses" />
              </Heading>
            </Flex>
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
