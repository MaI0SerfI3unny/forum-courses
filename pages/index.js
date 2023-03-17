import { Container, Flex, Text, NavLink, Logo, Box } from '@/ui'
import { CategoriesSearch } from '@/blocks'
import { useDisplay } from '@/theme'
import { MainLayout } from '@/layouts'
import css from '@styled-system/css'
import styled from 'styled-components'
import { ButtonAddQuestion } from '@/components'

const FixedElement = styled(Box)(
  css({
    position: 'fixed',
    left: '50%',
    bottom: '4.75rem',
    zIndex: '5',
    transform: 'translateX(-50%)',
    width: '100%',
    px: '1rem',
    display: 'inline-grid',
  }),
)

export default function Home() {
  const { displayLessThan } = useDisplay()
  const isMobile = displayLessThan('mobile')

  return (
    <MainLayout>
      <Flex alignItems="center" maxWidth="63.125rem" width="100%">
        <Container>
          <Flex variant="columnCenter">
            {isMobile && (
              <NavLink href="/" mb="3.75rem">
                <Logo width={108} height={23} />
              </NavLink>
            )}
            <Text
              mb="2.188rem"
              variant={['introMobile', 'intro']}
              textAlign="center"
            >
              Find{' '}
              <Text
                variant={['introMobile', 'intro']}
                as="span"
                color={['blue', 'blue']}
                fontWeight="bold"
              >
                answers
              </Text>{' '}
              for any question
            </Text>
            <CategoriesSearch mb="1.875rem" withTags={true} />
          </Flex>
        </Container>
      </Flex>

      {isMobile && (
        <FixedElement>
          <ButtonAddQuestion />
        </FixedElement>
      )}
    </MainLayout>
  )
}
