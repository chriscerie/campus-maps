import { CommentType } from './Comment';

export const getComments = async () => {
  let comments: Array<CommentType> = [
    {
      id: '1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, purus at eleifend ornare, libero metus tincidunt velit, quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex. Quisque viverra justo a luctus feugiat. Aliquam erat volutpat. Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti. Suspendisse et iaculis velit.',
      username: 'Jack',
      userId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
      photo:
        'https://lh3.googleusercontent.com/a/AATXAJw4m8e-4uRre_3L3xxlKEqrMl2isI8_W0sYrT2e=s96-c',
    },
    {
      id: '2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, purus at eleifend ornare, libero metus tincidunt velit, quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex. Quisque viverra justo a luctus feugiat. Aliquam erat volutpat. Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti. Suspendisse et iaculis velit.',
      username: 'John',
      userId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
      photo:
        'https://lh3.googleusercontent.com/a/AATXAJw4m8e-4uRre_3L3xxlKEqrMl2isI8_W0sYrT2e=s96-c',
    },
    {
      id: '3',
      body: 'First Comment, first child',
      username: 'John',
      userId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
      photo:
        'https://lh3.googleusercontent.com/a/AATXAJw4m8e-4uRre_3L3xxlKEqrMl2isI8_W0sYrT2e=s96-c',
    },
    {
      id: '4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, purus at eleifend ornare, libero metus tincidunt velit, quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex. Quisque viverra justo a luctus feugiat. Aliquam erat volutpat. Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti. Suspendisse et iaculis velit.',
      username: 'John',
      userId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
      photo:
        'https://lh3.googleusercontent.com/a/AATXAJw4m8e-4uRre_3L3xxlKEqrMl2isI8_W0sYrT2e=s96-c',
    },
  ];

  return comments;
};
