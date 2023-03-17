import Images from 'next/image'
import styled from 'styled-components'
import { space, border, layout, position, compose } from 'styled-system'

const styleProps = compose(space, border, layout, position)

const Img = styled(Images)({ objectFit: 'cover' }, styleProps, ({ sx }) => sx)

export default Img
