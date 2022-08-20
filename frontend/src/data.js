const data = []
const stories = [
  {
    title: 'This text is for our article title, sometime it should be long as like this',
    content:
      'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
    coverImage: 'data:image/jpeg;base64,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',
    author: { name: 'Michael Scott', profileImage: 'https://www.man.com/sites/default/files/uploads/content/team/Large_Mike-Scott.jpg' },
    community: { name: 'Travel for explore' },
    hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
    type: 'long',
    created: 'Aug 10, 2022 | 11:00 PM',
    readTime: '2 min',
  },
  // {
  //   title: 'This text is for our article title, sometime it should be long as like this',
  //   content:
  //     'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
  //   coverImage: '/images/cover.jpg',
  //   author: { name: 'Michael Scott', profileImage: '/images/author.png' },
  //   community: { name: 'Josephite Language & Reading Club' },
  //   hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
  //   type: 'long',
  //   created: 'Aug 12, 2022 | 11:00 PM',
  //   readTime: '8 min',
  // },
  // {
  //   title: 'This text is for our article title, sometime it should be long as like this',

  //   content:
  //     'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
  //   coverImage: '/images/cover.jpg',
  //   author: { name: 'Michael Scott', profileImage: '/images/author.png' },
  //   community: { name: 'Travel for explore' },
  //   hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
  //   type: 'short',
  //   created: 'Jul 05, 2022 | 11:00 PM',
  //   readTime: '45 min',
  // },
  // {
  //   title: 'This text is for our article title, sometime it should be long as like this',

  //   content:
  //     'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
  //   coverImage: '/images/cover.jpg',
  //   author: { name: 'Michael Scott', profileImage: '/images/author.png' },
  //   community: { name: 'Josephite Language & Reading Club' },
  //   hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
  //   type: 'short',
  //   created: 'Jul 06, 2022 | 11:00 PM',
  //   readTime: '10 min',
  // },
  // {
  //   title: 'This text is for our article title, sometime it should be long as like this',

  //   content:
  //     'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
  //   coverImage: '/images/cover.jpg',
  //   author: { name: 'Michael Scott', profileImage: '/images/author.png' },
  //   community: { name: 'Travel for explore' },
  //   hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
  //   type: 'short',
  //   created: 'Aug 13, 2022 | 11:00 PM',
  //   readTime: '5 min',
  // },
  // {
  //   title: 'This text is for our article title, sometime it should be long as like this',

  //   content:
  //     'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
  //   coverImage: '/images/cover.jpg',
  //   author: { name: 'Michael Scott', profileImage: '/images/author.png' },
  //   community: { name: 'Travel for explore' },
  //   hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
  //   type: 'short',
  //   created: 'Aug 18, 2022 | 12:00 PM',
  //   readTime: '5 min',
  // },
]


const users = [
  {
    name: 'Michael Scott',
    profileImage: 'http://cdn.pastemagazine.com/www/articles/Michael-in-Grief-Counseling-michael-scott-1464096-1280-720.jpg',
    bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
    summary: {
      stories: 39,
      followers: 1100,
    },
  },
  {
    name: 'Pam Beesly',
    profileImage: 'http://cdn.pastemagazine.com/www/articles/Michael-in-Grief-Counseling-michael-scott-1464096-1280-720.jpg',
    bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
    summary: {
      stories: 89,
      followers: 200,
    },
  },
  {
    name: 'Michael Scott',
    profileImage: 'http://cdn.pastemagazine.com/www/articles/Michael-in-Grief-Counseling-michael-scott-1464096-1280-720.jpg',
    bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
    summary: {
      stories: 39,
      followers: 1100,
    },
  },
]


const communities = [
  {
    name: 'Josephite Language & Reading Club',
    profileImage: 'https://www.loyensloeff.com/globalassets/04.-ll-people-pictures/1.-profile-pictures/scotm3-500x500.jpg?width=409&height=409',
    bio: 'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. ',
    summary: {
      stories: 390,
      followers: 2100,
    },
  },
  {
    name: 'Travel for explore',
    profileImage: 'https://www.loyensloeff.com/globalassets/04.-ll-people-pictures/1.-profile-pictures/scotm3-500x500.jpg?width=409&height=409',
    bio: 'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. ',
    summary: {
      stories: 890,
      followers: 9000,
    },
  },
  {
    name: 'Josephite Language & Reading Club ',
    profileImage: 'https://www.loyensloeff.com/globalassets/04.-ll-people-pictures/1.-profile-pictures/scotm3-500x500.jpg?width=409&height=409',
    bio: 'Here we believe that in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. ',
    summary: {
      stories: 390,
      followers: 2100,
    },
  },
]

export default {data, stories,users,communities};
