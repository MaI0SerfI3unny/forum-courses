import React from 'react'
import { Flex, NavLink, Logo, Text } from '@/ui'
import { HeaderWrapContent, HeaderBox } from './Header.styled'
import { FormattedMessage } from 'react-intl'
import { HeaderNavMenu, ButtonAddQuestion } from '@/components'
import { mainMenu } from './nav-definitions'
import PropTypes from 'prop-types'
import { CategoriesSearch, UserHeaderInfoBox } from '@/blocks'
import { SIGN_IN } from '@/utils/routerPaths'

const HeaderDesktop = ({ isLoggedIn, isShowCategoriesSearch }) => {
  return (
    <HeaderWrapContent>
      <HeaderBox>
        <NavLink href="/">
          <Logo width={108} height={23} />
        </NavLink>
        <HeaderNavMenu pages={mainMenu} />
        <Flex gap="3.625rem" alignItems="center">
          {isLoggedIn ? (
            <UserHeaderInfoBox bg={true} />
          ) : (
            <NavLink href={SIGN_IN}>
              <Text variant="button">
                <FormattedMessage id="sign_in" />
              </Text>
            </NavLink>
          )}
          <ButtonAddQuestion />
        </Flex>
      </HeaderBox>
      {isShowCategoriesSearch && <CategoriesSearch />}
    </HeaderWrapContent>
  )
}

HeaderDesktop.propTypes = {
  isLoggedIn: PropTypes.bool,
  isShowCategoriesSearch: PropTypes.bool,
}

export default HeaderDesktop
