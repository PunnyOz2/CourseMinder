import { Paper } from "@mantine/core";

export default function CourseCard({course}: {course: any}){
    return (
        <Paper shadow="sm" p="sm" radius="sm" style={{marginBottom: '1rem'}}>
            <div className="flex justify-between">
                <div>
                    <div className="text-xl font-bold">{course.coursename}</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <div className="text-sm">{course.description}</div>
                    <div className="text-sm">{course.notes}</div>
                </div>
                <div>
                    <div className="text-sm">Start Date: {course.startdate}</div>
                    <div className="text-sm">Due Date: {course.due}</div>
                </div>
            </div>
        </Paper>
    )
}