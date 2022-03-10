export interface User {
    name: string;
    userId: string;
    password: string;
    email: string;
    picture: string;
    id: number;
    tasks : any;
}

export const usersList: User[] = [
    {
        userId: 'naruto_uz',
        name: 'naruto uzumaki',
        password: 'hinata',
        email: 'naruto@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/4.jpg',
        id: 1,
        tasks: [
            {task : 'Create a login page',dueDate:'04/21/2022', isCompleted: true, assignedBy: "saske uchiha"},
            {task : 'Create a Task List page',dueDate:'05/18/2022', isCompleted: false, assignedBy: "saske uchiha"},
        ]
    },
    {
        userId: 'saske_uc',
        name: 'saske uchiha',
        password: 'sakura',
        email: 'saske@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/86.jpg',
        id: 2,
        tasks: [
            {task : 'Integrate jQuery in the code',dueDate:'03/21/2022', isCompleted: false, assignedBy: "naruto uzumaki"},
            {task : 'Integrate Bulma Layout',dueDate:'03/26/2022', isCompleted: false, assignedBy: "naruto uzumaki"}
        ]
    },
    {
        userId: 'itachi_uc',
        name: 'itachi uchiha',
        password: 'itachi',
        email: 'itachi@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/8.jpg',
        id: 3,
        tasks: [
            {task : 'Use Vue JS as a client side program',dueDate:'04/05/2022', isCompleted: false, assignedBy: "saske uchiha"}
        ]
    }
]