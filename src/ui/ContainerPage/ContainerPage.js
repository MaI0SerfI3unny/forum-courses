import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

const ContainerPage = styled(Box)(() =>
  css({
    width: '100%',
    maxWidth: '81.375rem',
    px: '1rem',
    mx: 'auto',
  }),
)

export default ContainerPage
