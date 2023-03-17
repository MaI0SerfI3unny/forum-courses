import React from 'react'
import { Container, Flex } from '@/ui'
import { HeadLine } from '@/components'
import { MainLayout } from '@/layouts'

export default function GeneralKnowledge() {
  return (
    <MainLayout>
      <Flex alignItems="center" maxWidth="75rem" width="100%">
        <Container>
          <Flex gap="1rem" flexDirection="column">
            <HeadLine />
          </Flex>
        </Container>
      </Flex>
    </MainLayout>
  )
}
