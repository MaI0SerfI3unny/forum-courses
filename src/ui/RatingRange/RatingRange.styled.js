import styled from 'styled-components'
import css from '@styled-system/css'
import Box from '../Box'

export const RangeInput = styled.input(
  css({
    flexGrow: 1,
    zIndex: 2,
    opacity: 0,
    cursor: 'pointer',
    appearance: 'none',
    position: 'relative',
    mx: '-0.4rem',
    my: 0,
  }),
)

export const SliderRange = styled(Box)(
  css({
    position: 'absolute',
    left: '0.094rem',
    right: '0.094rem',
    height: '0.063rem',
    backgroundColor: 'bg.rangeGrayLight',
    borderRadius: '0.063rem',
    display: 'flex',
    alignItems: 'center',
  }),
)

export const RangeDot = styled(Box)(({ leftPosition }) =>
  css({
    cursor: 'pointer',
    position: 'absolute',
    borderRadius: '50%',
    top: '-100%',
    left: leftPosition,
    transform: 'translateX(-50%)',
    height: '0.188rem',
    width: '0.188rem',
    backgroundColor: 'bg.rangeDotGray',
    zIndex: 1,
  }),
)

export const GreenCircle = styled(Box)(({ leftPosition }) =>
  css({
    position: 'absolute',
    borderRadius: '50%',
    height: '0.688rem',
    width: '0.688rem',
    transform: 'translateX(-50%)',
    left: leftPosition,
    border: '0.125rem solid',
    borderColor: 'border.green',
    backgroundColor: 'bg.white',
  }),
)

export const SelectedValue = styled(Box)(({ leftPosition }) =>
  css({
    position: 'absolute',
    borderRadius: '0.25rem',
    height: '1.125rem',
    width: '1.125rem',
    transform: 'translate(-50%, -110%)',
    left: leftPosition,
    backgroundColor: 'bg.dark',
  }),
)
