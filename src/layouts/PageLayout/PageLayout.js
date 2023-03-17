import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from '@/blocks'
import { MainContainerPage } from '@/ui'

export default function PageLayout({ children, isShowCategoriesSearch }) {
  return (
    <>
      <Header isShowCategoriesSearch={isShowCategoriesSearch} />
      <MainContainerPage>{children} </MainContainerPage>
      <Footer />
    </>
  )
}
PageLayout.propTypes = {
  children: PropTypes.any,
  isShowCategoriesSearch: PropTypes.bool,
}
PageLayout.defaultProps = {
  isShowCategoriesSearch: true,
}
