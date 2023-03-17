const options = {
  sourceCourse: [
    { name: 'udemy' },
    { name: 'lynda' },
    { name: 'pluralsight' },
    { name: 'skillshare' },
    { name: 'udacity' },
    { name: 'coursera' },
    { name: 'other' },
  ],
  typeCourse: [
    { name: 'Video' },
    { name: 'Audio/Podcast' },
    { name: 'Book/eBook/Text' },
    { name: 'Online Learning' },
  ],
  typePaymentCourse: [
    { name: 'Free' },
    { name: 'Paid' },
    { name: 'Membership' },
  ],
  typeSubject: [{ name: 'general' }, { name: 'specific' }],
  typeLike: [{ name: 'like' }, { name: 'dislike' }],
  typeComment: [{ name: 'cons' }, { name: 'pros' }, { name: 'exp' }],
}

module.exports = options
