export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Promise {
  id: string;
  title: string;
  description: string;
  author: User;
  deadline: Date;
  category: string;
  tags: string[];
  createdAt: Date;
  groupId?: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  members: User[];
}

export interface Notification {
  id: string;
  type: 'NEW_PROMISE' | 'DEADLINE_REMINDER' | 'PROMISE_COMPLETED' | 'FOLLOW';
  user?: User;
  promise?: Promise;
  createdAt: Date;
  isRead: boolean;
}