

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatarUrl: string;
  createdAt?: any;
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
  attachments?: string[];
  imageURLs?: string[];
  status?: 'pending' | 'kept' | 'broken';
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

export interface UserSuggestion {
    user: User;
    reason: string;
}
