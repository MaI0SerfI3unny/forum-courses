import CompanyImage from '@/assets/company.png'
import User1 from '@/assets/user1.png'
import User2 from '@/assets/user2.png'
import User3 from '@/assets/user3.png'
import User4 from '@/assets/user1.png'
import User5 from '@/assets/user2.png'
import User6 from '@/assets/user3.png'
import Illustrator from '@/assets/illustrator.png'
import Designer from '@/assets/designer.png'

export const dataCourse = {
  id: '1',
  companyImage: CompanyImage,
  title: 'Vue JS Essentials with Vuex and Vue Router',
  label: 'Advanced',
  hour: 10,
  lesson: 150,
  pros: 15,
  cons: 4,
  exp: 2,
  price: '$220.00',
  likes: 17,
  dislikes: 10,
  images: [User1, User2, User3, User4, User5, User6],
  description: [
    "<h3>What you'll learn</h3>" +
      '<ul>' +
      '<li>Understand how to create interesting Vue applications</li>' +
      '<li>Use Vuex to manage and update data stored in application state</li>' +
      '<li>Navigate users between pages using Vue Router</li>' +
      '<li>Authenticate users with an advanced OAuth2 flow</li>' +
      '<li>Build beautiful drag and drop image upload</li>' +
      '<li>Style content intelligently using CSS Grids</li>' +
      '</ul>',
  ],
  section: [
    {
      id: '1',
      titleSection: 'Section 1 - An Introduction to Vue',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:07',
        },
        {
          id: '2',
          text: 'Course Resources',
          time: '00:38',
        },
        {
          id: '3',
          text: 'Join Our Community!',
          time: '00:07',
        },
        {
          id: '4',
          text: 'Our First Vue App',
          time: '08:05',
        },
        {
          id: '5',
          text: 'App Overview',
          time: '03:07',
        },
        {
          id: '6',
          text: 'A Codepen Starter',
          time: '02:24',
        },
        {
          id: '7',
          text: 'Vue Templates and Instances',
          time: '04:35',
        },
        {
          id: '8',
          text: 'Creating the Template',
          time: '02:12',
        },
        {
          id: '9',
          text: 'How to get help',
          time: '01:10',
        },
        {
          id: '10',
          text: 'How to get help',
          time: '02:10',
        },
      ],
    },
    {
      id: '2',
      titleSection: 'Section 2 - Moving on with Vue CLI',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:07',
        },
        {
          id: '2',
          text: 'Creating the Template',
          time: '02:07',
        },
        {
          id: '3',
          text: 'Vue Templates and Instances',
          time: '01:15',
        },
      ],
    },
    {
      id: '3',
      titleSection: 'Section 3 - Writing Effective Vue Apps',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:07',
        },
      ],
    },
    {
      id: '4',
      titleSection: 'Section 4 - Handling State with Vuex',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:28',
        },
        {
          id: '2',
          text: 'Vue Templates and Instances',
          time: '01:07',
        },
      ],
    },
    {
      id: '5',
      titleSection: 'Section 5 - Authentication in Vue with OAuth2',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:07',
        },
      ],
    },
    {
      id: '6',
      titleSection: 'Section 6 - Navigation with Vue Router',
      lesson: [
        {
          id: '1',
          text: 'Vue Templates and Instances',
          time: '01:15',
        },
        {
          id: '2',
          text: 'How to get help',
          time: '0:07',
        },
        {
          id: '3',
          text: 'A Codepen Starter',
          time: '01:32',
        },
      ],
    },
    {
      id: '7',
      titleSection: 'Section 7 - Design of Vuex Modules',
      lesson: [
        {
          id: '1',
          text: 'How to get help',
          time: '01:07',
        },
      ],
    },
  ],
  program: [
    {
      programImg: Illustrator,
      title: 'Adobe Illustrator',
      system: ['Windows', 'IOS', 'Linux'],
      price: '14',
    },
    {
      programImg: Designer,
      title: 'Affinity Designer',
      system: ['Windows', 'IOS', 'Linux'],
      price: '14',
    },
  ],
  dataComment: [
    {
      id: '1',
      name: 'Elena',
      commentType: 'con',
      title: 'Allows tagging bookmarks',
      experience: [],
      text: 'Usu probo simul id, eu nonumy meliore est, ad sea quaeque adipisci assentior. In duo vide doming adipiscing, dictas phaedrum vim ut, vero wisi tation duo et.',
      comment: 1,
      likes: 17,
      dislikes: 10,
    },
    {
      id: '2',
      name: 'Elena',
      commentType: 'experience',
      title: 'Allows tagging bookmarks',
      experience: [],
      text: 'Usu probo simul id, eu nonumy meliore est, ad sea quaeque adipisci assentior. In duo vide doming adipiscing, dictas phaedrum vim ut, vero wisi tation duo et.',
      comment: 1,
      likes: 17,
      dislikes: 10,
    },
    {
      id: '3',
      name: 'Elena',
      commentType: 'pro',
      title: 'Allows tagging bookmarks',
      experience: [],
      text: 'Usu probo simul id, eu nonumy meliore est, ad sea quaeque adipisci assentior. In duo vide doming adipiscing, dictas phaedrum vim ut, vero wisi tation duo et.',
      comment: 1,
      likes: 16,
      dislikes: 10,
    },
    {
      id: '4',
      name: 'Elena',
      commentType: 'pro',
      title: 'Allows tagging bookmarks',
      experience: ['html'],
      text: 'Usu probo simul id, eu nonumy meliore est, ad sea quaeque adipisci assentior. In duo vide doming adipiscing, dictas phaedrum vim ut, vero wisi tation duo et.',
      comment: 1,
      likes: 17,
      dislikes: 10,
    },
  ],
}
