import styled from 'styled-components'
import { Box } from '@/ui'
import css from '@styled-system/css'
import { useIsScrolledPage } from '@/utils'

export const HeaderWrapStyled = styled(Box)(
  ({ isScrolling, isShowCategoriesSearch }) =>
    css({
      bg: isScrolling || isShowCategoriesSearch ? 'white' : 'transparent',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '50',
      width: '100%',
      py: 'sm',
      transition: 'background-color 0.3s',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      '@media (max-width:1400px)': {
        bg: 'bg.white',
        borderBottom: '1px solid',
        borderColor: 'border.stroke',
      },
    }),
)

export const HeaderWrap = (props) => {
  const isScrolling = useIsScrolledPage({
    minAdditionalHeight: 72,
    shouldScroll: 72,
  })

  return <HeaderWrapStyled isScrolling={isScrolling} {...props} />
}

export const HeaderBox = styled(Box)(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'md',
    mx: 'auto',
    width: '100%',
  }),
)
export const HeaderWrapContent = styled(Box)(
  css({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    px: 'md',
    gap: '1.25rem',
    mx: 'auto',
    width: '100%',
    maxWidth: '98.25rem',
  }),
)

export const LoginAvatar = styled.img(
  css({
    borderRadius: '0.625rem',
    width: '2.25rem',
    height: '2.25rem',
    zIndex: '20',
    cursor: 'pointer',
  }),
)
