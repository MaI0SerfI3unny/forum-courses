import { Paper } from '@/ui'
import styled from 'styled-components'
import css from '@styled-system/css'

const SelectDropdown = styled(Paper)(
  css({
    position: 'absolute',
    left: 0,
    top: 'calc(100% + 0.5rem)',
    zIndex: '2',
    padding: 'sm',
    width: '100%',
  }),
)

export default SelectDropdown
