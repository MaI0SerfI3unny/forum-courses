import React from 'react'
import { Container, Flex, BreadcrumbPage } from '@/ui'
import { ProductInfo, DescriptionItem, CommentRegistration } from '@/blocks'
import { dataPages, dataProduct } from '@/mock'
import { PageLayout } from '@/layouts'

export default function Product() {
  return (
    <PageLayout>
      <Container>
        <Flex mb="3.125rem">
          <BreadcrumbPage pages={dataPages} />
        </Flex>
        <Flex gap="md" flexDirection="column">
          <Flex gap="md" flexDirection="column">
            <ProductInfo {...dataProduct} />
          </Flex>
          <Flex gap="xl" justifyContent="space-between">
            <Flex gap="md" flexDirection="column" maxWidth="74.25rem">
              <DescriptionItem {...dataProduct} />
              <CommentRegistration {...dataProduct} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </PageLayout>
  )
}
