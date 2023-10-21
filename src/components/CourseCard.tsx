import { Paper } from "@mantine/core";

export default function CourseCard({course}: {course: any}){
    return (
        <Paper shadow="sm" p="sm" radius="sm" style={{marginBottom: '1rem'}}>
            <div className="flex justify-between">
                <div>
                    <div className="text-xl font-bold">{course.coursename}</div>
                    <div className="text-sm">{course.description}</div>
                </div>
                <div>
                    <div className="text-sm">{course.startdate} - {course.due}</div>
                    <div className="text-sm">{course.priority}</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <div className="text-sm">{course.notes}</div>
                </div>
                <div>
                    <div className="text-sm">{course.group_tags}</div>
                </div>
            </div>
        </Paper>
    )
}