import type { User, Promise } from '@/lib/types';

export const mockUsers: User[] = [
  { id: 'user-1', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/1/200/200' },
  { id: 'user-2', name: 'Bob Williams', avatarUrl: 'https://picsum.photos/seed/2/200/200' },
  { id: 'user-3', name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/seed/3/200/200' },
  { id: 'user-4', name: 'Diana Miller', avatarUrl: 'https://picsum.photos/seed/4/200/200' },
];

export const mockPromises: Promise[] = [
  {
    id: 'promise-1',
    title: 'Finish the Q3 report for the project "Phoenix"',
    description: 'I will complete and submit the final Q3 financial report. This includes summarizing expenses, forecasting for Q4, and presenting the data to the board. It is crucial for our upcoming investor meeting.',
    author: mockUsers[0],
    deadline: new Date('2024-09-30T23:59:59'),
    category: 'Work',
    tags: ['reporting', 'finance', 'project-phoenix'],
    createdAt: new Date('2024-07-20T10:00:00'),
  },
  {
    id: 'promise-2',
    title: 'Run a 10k race by the end of the year',
    description: 'My goal is to train consistently and be able to run a 10k race without stopping. I plan to follow a structured training program, including 3 runs per week and strength training.',
    author: mockUsers[1],
    deadline: new Date('2024-12-31T23:59:59'),
    category: 'Personal Growth',
    tags: ['fitness', 'running', 'health'],
    createdAt: new Date('2024-07-21T11:30:00'),
  },
  {
    id: 'promise-3',
    title: 'Learn the basics of React Native',
    description: 'I will build a small mobile application using React Native. The app will be a simple todo list manager. The goal is to understand mobile development concepts and the framework itself.',
    author: mockUsers[2],
    deadline: new Date('2024-10-15T23:59:59'),
    category: 'Learning',
    tags: ['programming', 'react-native', 'mobile-dev', 'learning'],
    createdAt: new Date('2024-07-22T14:00:00'),
  },
  {
    id: 'promise-4',
    title: 'Organize a surprise birthday party for Sarah',
    description: 'Planning a surprise party involves booking a venue, inviting all her friends and family, arranging for a cake, and decorations. The party will be on her birthday weekend.',
    author: mockUsers[3],
    deadline: new Date('2024-08-25T19:00:00'),
    category: 'Social',
    tags: ['event', 'party', 'friends'],
    createdAt: new Date('2024-07-22T18:45:00'),
  },
];
