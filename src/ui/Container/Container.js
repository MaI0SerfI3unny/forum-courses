import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

const Container = styled(Box)(() =>
  css({
    width: '100%',
    maxWidth: '98.25rem',
    px: '1rem',
    mx: 'auto',
  }),
)

export default Container
