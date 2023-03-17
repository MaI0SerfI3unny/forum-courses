import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import {
  ModalAddQuestion,
  ModalRecommendCourse,
  ModalAddSubject,
} from '@/modals'
import { MODAL_TRANSITION } from 'config'

const modalCloseTimeout = (callBack) =>
  // eslint-disable-next-line no-undef
  new Promise((resolve) =>
    setTimeout(() => {
      callBack?.()
      resolve()
    }, MODAL_TRANSITION),
  )

export const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

const modals = {
  AddQuestion: ModalAddQuestion,
  RecommendCourse: ModalRecommendCourse,
  AddSubject: ModalAddSubject,
}

function ModalProvider({ children, ...props }) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(false)
  const [modalArgs, setModalArgs] = useState({})

  const Modal = useMemo(() => modals[modalType], [modalType])

  useEffect(() => {
    if (Modal) {
      setShowModal(true)
    }
    return () => setShowModal(false)
  }, [Modal])

  const onClose = async () => {
    setShowModal(false)
    await modalCloseTimeout(() => setModalType(false))
  }

  const openModal = async (openModalType, args = {}) => {
    if (modalType) {
      await onClose()
    }
    setModalType(openModalType)
    setModalArgs(args)
  }

  const value = {
    openModal,
  }

  return (
    <ModalContext.Provider value={value} {...props}>
      {children}
      {Modal && <Modal {...modalArgs} open={showModal} onClose={onClose} />}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.any,
}

export default ModalProvider
