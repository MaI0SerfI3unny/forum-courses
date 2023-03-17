import React from 'react'
import { Container, Flex, BreadcrumbPage } from '@/ui'
import {
  CourseInfo,
  DescriptionItem,
  CourseContent,
  ProgramItems,
  CommentRegistration,
} from '@/blocks'
import { dataPages, dataCourse } from '@/mock'
import { PageLayout } from '@/layouts'

export default function Course() {
  return (
    <PageLayout>
      <Container>
        <Flex mb="3.125rem">
          <BreadcrumbPage pages={dataPages} />
        </Flex>
        <Flex gap="md" flexDirection="column">
          <CourseInfo {...dataCourse} />
          <Flex gap="xl" justifyContent="space-between">
            <Flex gap="md" flexDirection="column" maxWidth="74.25rem">
              <DescriptionItem {...dataCourse} />
              <CourseContent {...dataCourse} />
              <CommentRegistration {...dataCourse} />
            </Flex>
            <ProgramItems {...dataCourse} minWidth="19.625rem" />
          </Flex>
        </Flex>
      </Container>
    </PageLayout>
  )
}
