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
