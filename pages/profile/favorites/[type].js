import { useState } from "react"
import { useRouter } from 'next/router'
import { dataSubjectItem } from '@/mock'
import { ProfileFavoritesTabs, SubjectCard, CourseCard } from '@/blocks'
import { ProfileLayout } from '@/layouts'
import { Flex, Heading, Box, Spinner } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useGetFavoriteCourse } from '@/queries/favorite'
import {Pagination} from "@/components"

export default function FavoritesType() {
  const pageSize = 15
  const [currentPageCourse, setCurrentPageCourse] = useState(0)
  const router = useRouter()
  const { data: favoriteCourseData, isLoading } = useGetFavoriteCourse(currentPageCourse,pageSize)
  const { type } = router.query
  return (
    <ProfileLayout>
      <Box>
        <Heading variant="h2" mt="0.375rem">
          <FormattedMessage id="favorites" />
        </Heading>
        <ProfileFavoritesTabs
          subjectsLength={dataSubjectItem.length}
          coursesLength={favoriteCourseData?.count}
        />
        {type === 'subjects' && (
          <Flex gap="xs" flexDirection="column" mt="2.125rem">
            {dataSubjectItem.map(({ ...props }, idx) => (
              <SubjectCard key={idx} {...props} liked={true} />
            ))}
          </Flex>
        )}{' '}
        {type === 'courses' && (
          <Flex gap="xs" flexDirection="column" mt="2.125rem">
            {!isLoading ? 
              <>
                {favoriteCourseData?.rows.map(({ id, ...dataCourseCard }) => (
                  <CourseCard key={id} {...dataCourseCard.course} liked={true} />
                ))}
                <Pagination
                currentPage={currentPageCourse} 
                setCurrentPage={setCurrentPageCourse}
                postsPerPage={pageSize} 
                totalPosts={favoriteCourseData?.count}/>
              </>
            : <Spinner/>}
          </Flex>
        )}
      </Box>
    </ProfileLayout>
  )
}
