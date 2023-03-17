import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

export const CustomRadioItem = styled(Flex)(({ active }) =>
  css({
    flexGrow: 1,
    cursor: 'pointer',
    fontSize: 'xxs',
    fontWeight: 'normal',
    minHeight: '2.5rem',
    px: '0.75rem',
    border: active ? '2px solid' : '1px solid',
    borderRadius: '0.5rem',
    borderColor: active ? 'border.green' : 'border.low',
    transition: '0.2s',
  }),
)
