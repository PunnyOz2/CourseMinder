import { Paper,Switch,Text } from "@mantine/core"
import { theme } from "@themes/theme"
import CourseCard from "@components/CourseCard"
import { useState } from "react"
import { useSession } from "next-auth/react";

export default function CourseMenu(){
    // mock data
    const {data: session} = useSession();
    // async function getCourseList(){
    //     const response = await fetch(`http://localhost:3000/api/${session?.user.id}/courses`);
    //     const courseList = await response.json();
    //     return courseList;
    // }
    
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
    // const courseList = await getCourseList();
    // const [isQuick, setIsQuick] = useState(true)
    return (
        <main>
            {/* For future use */}
            {/* <Paper shadow="xs" p="xl" bg='orangeapp' className="mb-5">
                <Text>What should I learn next?</Text>
                <Text>
                    using chatgpt to generate a course
                </Text>
            </Paper> */}

            {/* <div className='flex flex-row-reverse'>
            <Switch
                defaultChecked
                labelPosition="left"
                label="Quick Link"
            />
            </div> */}
            <div className='flex flex-col gap-2'>
            {
            courseList.filter(course => course.group_tags.includes('Web Development')).map((course,index) => {
                return (
                    <CourseCard course={course} key={index}/>
                )
            })
            }
            </div>
        </main>
    )
}