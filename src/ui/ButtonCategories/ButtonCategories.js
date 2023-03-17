import React from 'react'
import PropTypes from 'prop-types'
import { useDisplay } from '@/theme'
import { Sort, Arrow, Category } from '@/icons'
import { Box, Flex, Text, IconButton } from '@/ui'
import { ButtonWrap } from './ButtonCategories.styled'

const ButtonCategories = ({ active, setActive }) => {
  const { displayLessThan } = useDisplay()
  const isMobile = displayLessThan('mobile')
  return (
    <Box onClick={() => setActive(!active)}>
      {isMobile ? (
        <IconButton isActive={active}>
          <Category size="24" color="icon.green" />
        </IconButton>
      ) : (
        <ButtonWrap isActive={active}>
          <Flex gap="xs" alignItems="center">
            <Sort color="icon.white" />
            <Text variant="body14m" color="text.white">
              Categories
            </Text>
          </Flex>
          <Arrow color="icon.white" direction={active ? 'up' : 'down'} />
        </ButtonWrap>
      )}
    </Box>
  )
}

ButtonCategories.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
}

export default ButtonCategories
