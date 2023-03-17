import React, { useState } from 'react'
import { Flex, NavLink, Button, Box, BurgerButton, MenuDrawer } from '@/ui'
import { HeaderWrapContent, HeaderBox } from './Header.styled'
import { HeaderNavMenu, ButtonAddQuestion } from '@/components'
import { CategoriesSearch, UserHeaderInfoBox } from '@/blocks'
import { FormattedMessage } from 'react-intl'
import { mainMenu } from './nav-definitions'
import PropTypes from 'prop-types'
import { SIGN_IN } from '@/utils/routerPaths'

const HeaderMobile = ({ isLoggedIn, isShowCategoriesSearch }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <HeaderWrapContent>
      <HeaderBox>
        <Box>
          <BurgerButton
            onClick={() => setOpenMenu(!openMenu)}
            open={openMenu}
          />
          <MenuDrawer open={openMenu}>
            <HeaderNavMenu variant="column" gap="2.25rem" pages={mainMenu} />
            <ButtonAddQuestion />
          </MenuDrawer>
        </Box>
        <Flex gap="3.625rem" alignItems="center">
          {isLoggedIn ? (
            <UserHeaderInfoBox />
          ) : (
            <NavLink href={SIGN_IN}>
              <Button variant="secondarySmall">
                <FormattedMessage id="sign_in" />
              </Button>
            </NavLink>
          )}
        </Flex>
      </HeaderBox>
      {isShowCategoriesSearch && <CategoriesSearch />}
    </HeaderWrapContent>
  )
}

HeaderMobile.propTypes = {
  isLoggedIn: PropTypes.bool,
  isShowCategoriesSearch: PropTypes.bool,
}

export default HeaderMobile
