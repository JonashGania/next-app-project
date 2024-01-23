import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async() => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } });
    const users: User[] = await res.json();

    return (
        <>
           <h1 className='text-black font-semibold'>Users</h1>
           <ul>
                {users.map((user) => (
                    <li key={user.id} className='text-black'>{user.name}</li>
                ))}
           </ul>
        </>
    )
}

export default UsersPage