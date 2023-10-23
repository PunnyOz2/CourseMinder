import { NavLink } from '@mantine/core';
import {useSession} from 'next-auth/react';
import Link from 'next/link';
import { Suspense } from 'react';
export default async function GroupNav() {
    const {data: session} = useSession();
    // const response = await fetch(`/api/${session?.user.id}/groups`);
    // const groupList = await response.json();
    // console.log(groupList);
    return (
        // {data.groups.map((group:any,index:any) => (
        //     <NavLink 
        //         component={Link} 
        //         href='/' 
        //         label={<span className="text-xl font-semibold">{group}</span>}
        //         leftSection={<span className="text-[1.5rem] font-semibold px-1.5 leading-5">{index+1}</span>}
        //         className="py-3"
        //         key={index}
        //     />
        // ))
        // }
        <div>
            {/* {data} */}
        </div>
    )
}