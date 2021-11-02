import { CommentType } from './Comment';

export const getComments = async () => {
  let comments: Array<CommentType> = [
    {
      id: '1',
      body: 'First Comment',
      username: 'Jack',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      body: 'Second Comment',
      username: 'John',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: 'First Comment, first child',
      username: 'John',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: 'Second Comment, second child',
      username: 'John',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
  ];

  return comments;
};
