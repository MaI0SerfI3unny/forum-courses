import styled from 'styled-components'
import css from '@styled-system/css'
import { Box } from '@/ui'

export const BreadcrumbPageContainer = styled(Box)(
  css({
    position: 'relative',
    marginRight: 'xl',
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: '-1.5rem',
      top: '50%',
      width: 'md',
      height: 'md',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      transform: 'translateY(-50%)',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99998 10.6667C9.47274 10.6667 10.6666 9.47277 10.6666 8.00001C10.6666 6.52725 9.47274 5.33334 7.99998 5.33334C6.52722 5.33334 5.33331 6.52725 5.33331 8.00001C5.33331 9.47277 6.52722 10.6667 7.99998 10.6667Z' stroke='%2363AD71' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
    },
  }),
)
