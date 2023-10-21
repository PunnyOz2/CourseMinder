import { Button, Group, NavLink, Skeleton, Stack } from "@mantine/core";
import NavSectionLink from "@components/NavSectionLink";
import { IconSunFilled, IconRepeat, IconChecks, IconBaselineDensitySmall } from '@tabler/icons-react';
import Link from "next/link";

export default function NavSection(){
    // mock data
    const profileList = [
        {
            profilename: 'Personal',
            groups: [
                'Database',
                'Web Development',
                'Software Engineering'
            ]
        }
    ]
    const courseList = [
        {
            coursename: 'Database Management Systems for beginners',
            description: 'Learn about databases',
            link: 'https://www.google.com',
            completed: false,
            startdate: '2021-09-01',
            due: '2021-10-31',
            priority: 1,
            notes: 'This is a note',
            group_tags: ['Database'],
            days: [true, false, true, false, true, false, true]
        },
        {
            coursename: 'Web Development for beginners',
            description: 'Learn about web development',
            link: 'https://www.google.com',
            completed: false,
            startdate: '2021-09-01',
            due: '2021-10-31',
            priority: 1,
            notes: 'This is a note',
            group_tags: ['Web Development'],
            days: [true, true, true, false, false, false, false]
        },
        {
            coursename: 'Fullstack Web Development for beginners',
            description: 'Learn about fullstack web development',
            link: 'https://www.google.com',
            completed: false,
            startdate: '2021-09-01',
            due: '2021-10-31',
            priority: 1,
            notes: 'This is a note',
            group_tags: ['Web Development'],
            days: [true, true, true, false, false, false, false]
        },
        {
            coursename: 'Software Engineering for beginners',
            description: 'Learn about software engineering',
            link: 'https://www.google.com',
            completed: false,
            startdate: '2021-09-01',
            due: '2021-10-31',
            priority: 1,
            notes: 'This is a note',
            group_tags: ['Software Engineering'],
            days: [true, false, true, false, true, false, true]
        }
    ]
    return (
        <main className="flex flex-col h-full">
            <div>
                <NavLink 
                component={Link} 
                href='/' 
                label={<span className="text-xl font-semibold">My Day</span>}
                leftSection={<IconSunFilled size="1.5rem" stroke={1.5}/>}
                className="py-3"
                />
                <NavLink 
                component={Link} 
                href='/' 
                label={<span className="text-xl font-semibold">Ongoing</span>}
                leftSection={<IconRepeat size="1.5rem" stroke={1.5}/>}
                className="py-3"
                />
                <NavLink 
                component={Link} 
                href='/' 
                label={<span className="text-xl font-semibold">Finished</span>}
                leftSection={<IconChecks size="1.5rem" stroke={1.5}/>}
                className="py-3"
                />
                <NavLink 
                component={Link} 
                href='/' 
                label={<span className="text-xl font-semibold">All</span>}
                leftSection={<IconBaselineDensitySmall size="1.5rem" stroke={1.5}/>}
                className="py-3"
                />
                <Skeleton height={1} />
            </div>
            <div className="flex flex-col grow">
                {profileList[0].groups.map((group,index) => (
                    <NavLink 
                        component={Link} 
                        href='/' 
                        label={<span className="text-xl font-semibold">{group}</span>}
                        leftSection={<span className="text-[1.5rem] font-semibold px-1.5 leading-5">{index+1}</span>}
                        className="py-3"
                        key={index}
                    />
                ))
                }
            </div>
            <Button variant="outline" display='block'>Add Group</Button>
        </main>
    )
}