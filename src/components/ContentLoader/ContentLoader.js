import SkeletonBase from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Flex } from '@/ui'
import { useTheme } from 'styled-components'

const Skeleton = (props) => {
  const {
    colors: { contentLoader },
  } = useTheme()
  return (
    <Box
      as={SkeletonBase}
      baseColor={contentLoader?.base}
      highlightColor={contentLoader?.highlight}
      {...props}
    />
  )
}

export default Skeleton

export const ContentLoader = (props) => {
  return (
    <Box {...props}>
      <Skeleton />
    </Box>
  )
}

export const ContentLoaderHeading = (props) => {
  return (
    <Box {...props}>
      <Skeleton height="2.5rem" />
    </Box>
  )
}

export const ContentLoaderSubjectBlock = (props) => {
  return (
    <Flex gap="1.5rem" flexGrow="1" {...props}>
      <Box maxWidth="4rem" flexGrow="1">
        <Skeleton height="4rem" />
      </Box>
      <Box flexGrow="2">
        <Skeleton height="xxl" />
      </Box>
    </Flex>
  )
}

export const ContentLoaderBlock = (props) => {
  return (
    <Box {...props}>
      <Skeleton height="6rem" />
    </Box>
  )
}
