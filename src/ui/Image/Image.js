import { Img, Box } from '@/ui'
import styled from 'styled-components'
import { variant } from 'styled-system'
import PropTypes from 'prop-types'

const variants = {
  primary: {},
  secondary: {
    border: '1px solid',
    borderColor: '#EDF1FC',
    borderRadius: 1,
    overflow: 'hidden',
  },
}

const ImageWrapper = styled(Box)(
  variant({
    variants,
  }),
)

const Image = ({ variant, height, width, alt, src, layout, ...props }) => (
  <ImageWrapper variant={variant} height={height} width={width} {...props}>
    <Img layout={layout} src={src} alt={alt ?? 'avatar'} />
  </ImageWrapper>
)

Image.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  layout: PropTypes.string,
}

Image.defaultProps = {
  variant: 'primary',
}

export default Image
