import styled, { css, keyframes } from 'styled-components'
import { Box } from '@/ui'
import { MODAL_TRANSITION } from 'config'

const backdropAnimation = {
  entering: keyframes`
    from {
      opacity: 0;
    }
    to {
        opacity: 1;
    }
  `,
  exiting: keyframes`
    from {
       opacity: 1;
    }
    to {
        opacity: 0;
    }
  `,
}
const modalAnimation = {
  entering: keyframes`
    from {
         transform: translate(-50%, -90%);
         opacity:0;
    }
    to {
         transform: translate(-50%, -40%);
         opacity:1;
    }
  `,
  exiting: keyframes`
    from {
        transform: translate(-50%, -40%);
        opacity:1;
    }
    to {
        transform: translate(-50%, -90%);
        opacity:0;
    }
  `,
}

export const PopupBackdrop = styled(Box)(
  (props) =>
    css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 300;
      background: ${props.variant === 'noblur' ? '' : 'rgba(100, 90, 83, 0.5)'};
      backdrop-filter: ${props.variant === 'noblur' ? '' : 'blur(8px)'};
      animation: ${backdropAnimation[props.state]} both;
      animation-duration: ${MODAL_TRANSITION}ms;
    `,
)
export const PopupContent = styled(Box)(
  (props) =>
    css`
      position: fixed;
      z-index: 400;
      left: 50%;
      top: 40%;
      max-height: 95vh;
      overflow: auto;
      transform: translate(-50%, -40%);
      animation: ${modalAnimation[props.state]} both;
      animation-duration: ${MODAL_TRANSITION}ms;
    `,
)
