import type { User, Promise, Group, Notification } from '@/lib/types';

export const mockUsers: User[] = [
  { id: 'user-1', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/1/200/200' },
  { id: 'user-2', name: 'Bob Williams', avatarUrl: 'https://picsum.photos/seed/2/200/200' },
  { id: 'user-3', name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/seed/3/200/200' },
  { id: 'user-4', name: 'Diana Miller', avatarUrl: 'https://picsum.photos/seed/4/200/200' },
  { id: 'user-5', name: 'Ethan Davis', avatarUrl: 'https://picsum.photos/seed/5/200/200' },
  { id: 'user-6', name: 'Fiona Garcia', avatarUrl: 'https://picsum.photos/seed/6/200/200' },
  { id: 'user-7', name: 'George Rodriguez', avatarUrl: 'https://picsum.photos/seed/7/200/200' },
  { id: 'user-8', name: 'Hannah Martinez', avatarUrl: 'https://picsum.photos/seed/8/200/200' },
  { id: 'user-9', name: 'Ian Hernandez', avatarUrl: 'https://picsum.photos/seed/9/200/200' },
  { id: 'user-10', name: 'Julia Lopez', avatarUrl: 'https://picsum.photos/seed/10/200/200' },
  { id: 'user-11', name: 'Kevin Gonzalez', avatarUrl: 'https://picsum.photos/seed/11/200/200' },
  { id: 'user-12', name: 'Laura Wilson', avatarUrl: 'https://picsum.photos/seed/12/200/200' },
];

export const mockGroups: Group[] = [
  {
    id: 'group-1',
    name: 'Project Phoenix Team',
    description: 'A group for the members of the Project Phoenix to coordinate tasks and deadlines.',
    isPublic: false,
    members: [mockUsers[0], mockUsers[2], mockUsers[4]],
  },
  {
    id: 'group-2',
    name: 'Fitness Fanatics',
    description: 'A public group for anyone interested in fitness, exercise, and healthy living.',
    isPublic: true,
    members: [mockUsers[1], mockUsers[5], mockUsers[8], mockUsers[10]],
  },
  {
    id: 'group-3',
    name: 'Investment Club',
    description: 'A private group for discussing investment strategies and market trends.',
    isPublic: false,
    members: [mockUsers[3], mockUsers[6], mockUsers[9]],
  },
  {
    id: 'group-4',
    name: 'Bookworms Society',
    description: 'A public group for avid readers to discuss books and share recommendations.',
    isPublic: true,
    members: [mockUsers[1], mockUsers[7], mockUsers[11]],
  },
  {
    id: 'group-5',
    name: 'Family Matters',
    description: 'A private group for family events and staying in touch.',
    isPublic: false,
    members: [mockUsers[0], mockUsers[4], mockUsers[8]],
_
  },
  {
    id: 'group-6',
    name: 'Coding Challenges',
    description: 'A group for developers looking to improve their skills through challenges.',
    isPublic: true,
    members: [mockUsers[2], mockUsers[6], mockUsers[10]],
  },
   {
    id: 'group-7',
    name: 'Global Trotters',
    description: 'Sharing travel plans, tips, and stories from around the world.',
    isPublic: true,
    members: [mockUsers[3], mockUsers[5], mockUsers[9], mockUsers[11]],
  },
  {
    id: 'group-8',
    name: 'Local Volunteers',
    description: 'Coordinating local volunteering efforts and community service projects.',
    isPublic: true,
    members: [mockUsers[0], mockUsers[7], mockUsers[10]],
  },
];


export const mockPromises: Promise[] = [
  // Work
  {
    id: 'promise-1',
    title: 'Finish the Q3 report for Project Phoenix',
    description: 'Complete and submit the final Q3 financial report, including expense summaries and Q4 forecasts.',
    author: mockUsers[0],
    deadline: new Date('2024-09-30T23:59:59'),
    category: 'Work',
    tags: ['Reports', 'Deadlines', 'Projects'],
    createdAt: new Date('2024-07-20T10:00:00'),
    groupId: 'group-1',
  },
  {
    id: 'promise-2',
    title: 'Prepare for the client meeting on Tuesday',
    description: 'Create the presentation slides and gather all necessary documents for the upcoming client meeting.',
    author: mockUsers[2],
    deadline: new Date('2024-08-05T17:00:00'),
    category: 'Work',
    tags: ['Meetings', 'Projects'],
    createdAt: new Date('2024-08-01T14:30:00'),
    groupId: 'group-1',
  },

  // Health
  {
    id: 'promise-3',
    title: 'Run a 10k by the end of the year',
    description: 'Follow a structured training plan to be able to run a 10k race without stopping.',
    author: mockUsers[1],
    deadline: new Date('2024-12-31T23:59:59'),
    category: 'Health',
    tags: ['Exercise', 'Challenges'],
    createdAt: new Date('2024-07-21T11:30:00'),
    groupId: 'group-2',
  },
  {
    id: 'promise-4',
    title: 'Meditate for 10 minutes every morning for a month',
    description: 'Incorporate a daily meditation habit into my morning routine to improve focus and reduce stress.',
    author: mockUsers[5],
    deadline: new Date('2024-08-31T08:00:00'),
    category: 'Health',
    tags: ['Meditation', 'Habits'],
    createdAt: new Date('2024-07-28T09:00:00'),
    groupId: 'group-2',
  },
   {
    id: 'promise-5',
    title: 'Follow a healthy meal plan for the next 2 weeks',
    description: 'Stick to the dietitian-approved meal plan, focusing on whole foods and cutting out processed sugar.',
    author: mockUsers[8],
    deadline: new Date('2024-08-15T23:59:59'),
    category: 'Health',
    tags: ['Diet', 'Challenges'],
    createdAt: new Date('2024-08-01T12:00:00'),
  },

  // Finance
  {
    id: 'promise-6',
    title: 'Create a monthly budget and stick to it',
    description: 'Track all my expenses for a month to create a realistic budget, and then follow it for the next three months.',
    author: mockUsers[3],
    deadline: new Date('2024-11-30T23:59:59'),
    category: 'Finance',
    tags: ['Savings', 'Bills'],
    createdAt: new Date('2024-07-25T18:00:00'),
  },
  {
    id: 'promise-7',
    title: 'Research and make one new investment',
    description: 'Dedicate time to research potential stocks or funds and make a new investment of at least $500.',
    author: mockUsers[6],
    deadline: new Date('2024-09-15T23:59:59'),
    category: 'Finance',
    tags: ['Investments'],
    createdAt: new Date('2024-07-29T20:00:00'),
    groupId: 'group-3',
  },

  // Education
  {
    id: 'promise-8',
    title: 'Complete the "Intro to Python" online course',
    description: 'Finish all modules, including the final project, for the online Python course I enrolled in.',
    author: mockUsers[10],
    deadline: new Date('2024-10-01T23:59:59'),
    category: 'Education',
    tags: ['Courses', 'Skills'],
    createdAt: new Date('2024-07-15T16:00:00'),
    groupId: 'group-6',
  },
  {
    id: 'promise-9',
    title: 'Read "Dune" by Frank Herbert',
    description: 'I promise to read the entire first book of the Dune series before the new movie comes out.',
    author: mockUsers[7],
    deadline: new Date('2024-09-01T23:59:59'),
    category: 'Education',
    tags: ['Reading'],
    createdAt: new Date('2024-07-25T16:00:00'),
    groupId: 'group-4',
  },

  // Relationships
  {
    id: 'promise-10',
    title: 'Organize a surprise birthday party for Sarah',
    description: 'Plan a surprise party by booking a venue, inviting friends and family, and arranging for a cake.',
    author: mockUsers[4],
    deadline: new Date('2024-08-25T19:00:00'),
    category: 'Relationships',
    tags: ['Family', 'Events'],
    createdAt: new Date('2024-07-22T18:45:00'),
    groupId: 'group-5',
  },
  {
    id: 'promise-11',
    title: 'Call my parents every week',
    description: 'Make a conscious effort to call and catch up with my parents at least once every week.',
    author: mockUsers[0],
    deadline: new Date('2024-12-31T23:59:59'),
    category: 'Relationships',
    tags: ['Family', 'Habits'],
    createdAt: new Date('2024-07-01T10:00:00'),
  },

  // Personal Growth
  {
    id: 'promise-12',
    title: 'Learn the basics of React Native',
    description: 'Build a simple todo list mobile app using React Native to understand the framework.',
    author: mockUsers[2],
    deadline: new Date('2024-10-15T23:59:59'),
    category: 'Personal Growth',
    tags: ['Skills', 'Projects', 'Challenges'],
    createdAt: new Date('2024-07-22T14:00:00'),
    groupId: 'group-6',
  },
  {
    id: 'promise-13',
    title: 'Write in my journal every day for 30 days',
    description: 'Develop a habit of daily journaling to reflect on my thoughts and experiences.',
    author: mockUsers[9],
    deadline: new Date('2024-08-30T23:59:59'),
    category: 'Personal Growth',
    tags: ['Journaling', 'Habits'],
    createdAt: new Date('2024-07-31T21:00:00'),
  },
  
  // Travel
  {
    id: 'promise-14',
    title: 'Plan and book a trip to Japan',
    description: 'Research destinations, book flights and accommodations for a 2-week trip to Japan next spring.',
    author: mockUsers[3],
    deadline: new Date('2024-11-01T23:59:59'),
    category: 'Travel',
    tags: ['Trips', 'Tickets', 'Destinations'],
    createdAt: new Date('2024-08-01T19:00:00'),
    groupId: 'group-7',
  },
  {
    id: 'promise-15',
    title: 'Pack for the camping trip this weekend',
    description: 'Get all the gear, food, and essentials ready for the weekend camping trip.',
    author: mockUsers[5],
    deadline: new Date('2024-08-09T18:00:00'),
    category: 'Travel',
    tags: ['Packing', 'Trips'],
    createdAt: new Date('2024-08-07T11:00:00'),
  },
  
  // Events
  {
    id: 'promise-16',
    title: 'Get tickets for the music festival',
    description: 'Buy tickets for me and my friends for the Summer Haze music festival as soon as they go on sale.',
    author: mockUsers[11],
    deadline: new Date('2024-08-10T10:00:00'),
    category: 'Events',
    tags: ['Concerts', 'Tickets'],
    createdAt: new Date('2024-08-02T13:00:00'),
  },
  
  // Community
  {
    id: 'promise-17',
    title: 'Volunteer at the local animal shelter',
    description: 'Commit to volunteering for at least 4 hours every Saturday for the next month.',
    author: mockUsers[7],
    deadline: new Date('2024-09-28T17:00:00'),
    category: 'Community',
    tags: ['Volunteering', 'Causes'],
    createdAt: new Date('2024-08-03T15:00:00'),
    groupId: 'group-8',
  },
  {
    id: 'promise-18',
    title: 'Organize a charity bake sale for the food bank',
    description: 'Plan and execute a bake sale with all proceeds going to the local community food bank.',
    author: mockUsers[0],
    deadline: new Date('2024-09-21T16:00:00'),
    category: 'Community',
    tags: ['Charity', 'Donations', 'Events'],
    createdAt: new Date('2024-08-04T12:00:00'),
    groupId: 'group-8',
  },
];


export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    type: 'NEW_PROMISE',
    user: mockUsers[1],
    promise: mockPromises[2],
    createdAt: new Date('2024-07-21T11:35:00'),
    isRead: false,
  },
  {
    id: 'notif-2',
    type: 'FOLLOW',
    user: mockUsers[2],
    createdAt: new Date('2024-07-20T15:00:00'),
    isRead: true,
  },
  {
    id: 'notif-3',
    type: 'DEADLINE_REMINDER',
    promise: mockPromises[0],
    createdAt: new Date('2024-09-29T09:00:00'),
    isRead: false,
  },
  {
    id: 'notif-4',
    type: 'PROMISE_COMPLETED',
    user: mockUsers[0],
    promise: { ...mockPromises[0], title: 'A previously completed promise' },
    createdAt: new Date('2024-07-19T18:00:00'),
    isRead: true,
  }
];
