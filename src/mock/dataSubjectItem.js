import subjectImage1 from '@/assets/subject.png'
import subjectImage2 from '@/assets/subject2.png'
import subjectImage3 from '@/assets/subject3.png'
import subjectImage4 from '@/assets/subject4.png'
import subjectImage5 from '@/assets/subject5.png'
import subjectImage6 from '@/assets/subject6.png'
export const dataSubjectItem = [
  {
    id: '1',
    subjectImage: subjectImage1,
    title: 'HTML',
    label: 'good_to_know',
    subject: 'HTML',
    rating: '5,0',
    follower: '234',
    status: '13',
    prerequisites: ['html', 'css'],
    subjectsItems: [
      {
        courseTitle: 'Gulp',
        likes: 11,
        dislikes: 10,
        buttonType: 'learn',
      },
      {
        courseTitle: 'Grunt',
        likes: 17,
        dislikes: 25,
        buttonType: 'recommend',
      },
    ],
  },
  {
    id: '2',
    subjectImage: subjectImage2,
    title: 'CSS Library',
    label: 'must_know',
    subject: 'PHP frameworks',
    rating: '4,9',
    follower: '234',
    status: '13',
    prerequisites: ['html', 'css'],
    subjectsItems: [
      {
        courseTitle: 'Gulp',
        likes: 11,
        dislikes: 10,
        buttonType: 'learn',
      },
      {
        courseTitle: 'Grunt',
        likes: 17,
        dislikes: 25,
        buttonType: 'recommend',
      },
      {
        courseTitle: 'Webpack',
        likes: 17,
        dislikes: 10,
        buttonType: 'recommend',
      },
      {
        courseTitle: 'Gulp',
        likes: 17,
        dislikes: 10,
        buttonType: 'learn',
      },
      {
        courseTitle: 'Gulp',
        likes: 17,
        dislikes: 10,
        buttonType: 'learn',
      },
    ],
  },
  {
    id: '3',
    subjectImage: subjectImage3,
    title: 'Javascript Libraries',
    label: 'must_know',
    subject: 'JS Libraries',
    rating: '4,5',
    follower: '234',
    status: '13',
    prerequisites: ['html'],
    subjectsItems: [
      {
        courseTitle: 'Gulp',
        likes: 11,
        dislikes: 10,
        buttonType: 'learn',
      },
      {
        courseTitle: 'Grunt',
        likes: 17,
        dislikes: 25,
        buttonType: 'recommend',
      },
    ],
  },
  {
    id: '4',
    subjectImage: subjectImage4,
    title: 'Compilers',
    label: 'good_to_know',
    subject: 'HTML',
    rating: '3,0',
    follower: '234',
    status: '13',
    prerequisites: ['html'],
    subjectsItems: [
      {
        courseTitle: 'Gulp',
        likes: 11,
        dislikes: 10,
        buttonType: 'learn',
      },
      {
        courseTitle: 'Grunt',
        likes: 17,
        dislikes: 25,
        buttonType: 'recommend',
      },
    ],
  },
  {
    id: '5',
    subjectImage: subjectImage5,
    title: 'HTML',
  },
  {
    id: '6',
    subjectImage: subjectImage6,
    title: 'HTML',
    label: 'must_know',
    rating: '4,9',
    follower: '234',
    status: '13',
  },
]
