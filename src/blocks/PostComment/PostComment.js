import React from 'react'
import {
  Flex,
  Heading,
  Text,
  Textarea,
  LabelItem,
  CheckBox,
  Input,
  Button,
  NavLink,
} from '@/ui'
import { PostCommentContainer } from './PostComment.styled'
import { FormattedMessage, useIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { SIGN_IN, SIGN_UP } from '@/utils/routerPaths'

const PostComment = ({ isLoggedIn, ...props }) => {
  const { formatMessage } = useIntl()
  return (
    <Flex
      flexDirection="column"
      gap={isLoggedIn ? 'xl' : '0.875rem'}
      {...props}
    >
      <Heading variant="h3sb" textAlign="center">
        <FormattedMessage id="post_a_comment" />
      </Heading>
      {!isLoggedIn ? (
        <Flex flexDirection="column" alignItems="center" gap="2.375rem">
          <Text variant="body14m" color="text.grayDark">
            <FormattedMessage id="you_must_be_logged_in_to_post_a_comment" />
          </Text>
          <Flex gap="md">
            <NavLink href={SIGN_IN}>
              <Button variant="secondarySmall">
                <FormattedMessage id="sign_in" />
              </Button>
            </NavLink>
            <NavLink href={SIGN_UP}>
              <Button variant="primarySmall">
                <FormattedMessage id="create_account" />
              </Button>
            </NavLink>
          </Flex>
        </Flex>
      ) : (
        <PostCommentContainer>
          <Flex flexDirection="column" gap="lg">
            <Text variant="body16sb">
              <FormattedMessage id="my_expirience" />
            </Text>
            <Textarea
              placeholder={formatMessage({
                id: 'what_was_your_experience_using_this_course',
              })}
            />
          </Flex>
          <Flex flexDirection="column" gap="lg">
            <Text variant="body16sb">
              <FormattedMessage id="reasons_i_recommend_this" />
            </Text>
            <Flex flexDirection="column" gap="0.313rem">
              <LabelItem>
                <CheckBox />
                <Text ml="xs" variant="body14sb">
                  <Text as="span" variant="body14sb" color="text.green">
                    <FormattedMessage id="pro" />{' '}
                  </Text>
                  <FormattedMessage id="allows_tagging_bookmarks" />
                </Text>
              </LabelItem>
              <Text variant="body12m">
                <FormattedMessage id="add_post_comment.description_allows" />
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="0.313rem">
              <LabelItem>
                <CheckBox />
                <Text ml="xs" variant="body14sb">
                  <Text as="span" variant="body14sb" color="text.green">
                    <FormattedMessage id="pro" />{' '}
                  </Text>
                  <FormattedMessage id="no_vix_nulla_explicari" />
                </Text>
              </LabelItem>
              <Text variant="body12m">
                <FormattedMessage id="add_post_comment.description_no" />
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="xs">
              <LabelItem>
                <CheckBox />
                <Text ml="xs" variant="body14sb">
                  <FormattedMessage id="add_a_new_pro_here" />
                </Text>
              </LabelItem>
              <Input
                placeholder={formatMessage({
                  id: 'title',
                })}
              />
              <Textarea
                placeholder={formatMessage({
                  id: 'additional_details',
                })}
              />
              <Flex justifyContent="flex-end">
                <Button variant="secondarySmall" size="28">
                  <FormattedMessage id="add_PRO" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap="lg">
            <Text variant="body16sb">
              <FormattedMessage id="reasons_i_wouldnt_recommend_this" />
            </Text>
            <Flex flexDirection="column" gap="0.313rem">
              <LabelItem>
                <CheckBox variant="secondary" />
                <Text ml="xs" variant="body14sb">
                  <Text as="span" variant="body14sb" color="text.red">
                    <FormattedMessage id="con" />{' '}
                  </Text>
                  <FormattedMessage id="allows_tagging_bookmarks" />
                </Text>
              </LabelItem>
              <Text variant="body12m">
                <FormattedMessage id="add_post_comment.description_allows" />
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="0.313rem">
              <LabelItem>
                <CheckBox variant="secondary" />
                <Text ml="xs" variant="body14sb">
                  <Text as="span" variant="body14sb" color="text.red">
                    <FormattedMessage id="con" />{' '}
                  </Text>
                  <FormattedMessage id="no_vix_nulla_explicari" />
                </Text>
              </LabelItem>
              <Text variant="body12m">
                <FormattedMessage id="add_post_comment.description_no" />
              </Text>
            </Flex>
            <Flex flexDirection="column" gap="xs">
              <LabelItem>
                <CheckBox variant="secondary" />
                <Text ml="xs" variant="body14sb">
                  <FormattedMessage id="add_a_new_con_here" />
                </Text>
              </LabelItem>
              <Input
                placeholder={formatMessage({
                  id: 'title',
                })}
              />
              <Textarea
                placeholder={formatMessage({
                  id: 'additional_details',
                })}
              />
              <Flex justifyContent="flex-end">
                <Button variant="secondarySmallRed" size="28">
                  <FormattedMessage id="add_CON" />
                </Button>
              </Flex>
            </Flex>
            <Flex justifyContent="flex-end">
              <Button variant="primarySmall">
                <FormattedMessage id="submit" />
              </Button>
            </Flex>
          </Flex>
        </PostCommentContainer>
      )}
    </Flex>
  )
}
PostComment.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default PostComment
