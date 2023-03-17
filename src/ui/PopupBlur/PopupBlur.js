import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'
import { PopupBackdrop, PopupContent } from './PopupBlur.styled'
import { MODAL_TRANSITION } from 'config'

export default function PopupBlur({ children, open, onClose }) {
  const nodeRef = useRef(null)

  return (
    <Transition
      nodeRef={nodeRef}
      in={open}
      timeout={MODAL_TRANSITION}
      unmountOnExit
    >
      {(state) =>
        ReactDOM.createPortal(
          <>
            <div ref={nodeRef}>
              <PopupBackdrop state={state} onClick={onClose} />
              <PopupContent state={state}>{children}</PopupContent>
            </div>
          </>,
          document.body,
        )
      }
    </Transition>
  )
}

PopupBlur.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func,
}
