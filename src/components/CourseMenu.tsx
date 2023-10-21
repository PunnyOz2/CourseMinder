import { Paper,Text } from "@mantine/core"
import { theme } from "@themes/theme"
import CourseCard from "@components/CourseCard"

export default function CourseMenu(){
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
    const temp = courseList.filter(course => course.group_tags.includes('Database'))
    return (
        <main>
            <Paper shadow="xs" p="xl" bg='orangeapp' className="mb-5">
                <Text>Paper is the most basic ui component</Text>
                <Text>
                    Use it to create cards, dropdowns, modals and other components that require background
                    with shadow
                </Text>
            </Paper>
            <div className='flex flex-col gap-2'>
            {
            courseList.filter(course => course.group_tags.includes('Web Development')).map((course) => {
                return (
                    <CourseCard course={course}/>
                )
            })
            }
            </div>
        </main>
    )
}