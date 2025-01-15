import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';


export default function Users() {
    const [users, SetUsers] = useState();

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch(`https://jsonplaceholder.typicode.com/users`);
                if (!r.ok) {
                    throw new Error(`${r.status} - ${r.statusText} - ${result.message}`);
                }
                const result = await r.json();
                SetUsers(result);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);
 
    return (
        <>
            <h2>Click on a user to view their blog</h2>
            {users?.map(u => <UserInfo key={u.id} user={u}/>)}
        </>
    )
}
