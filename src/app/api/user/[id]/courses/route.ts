import Course from "@models/course";
import { connectToDB } from "@utils/database";

export const GET = async ({ request, params }: { request: Request; params: { id: string } }) => {
    try {
        await connectToDB()
        const courses = await Course.find({ ownerid: params.id })
        return new Response(JSON.stringify(courses), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch Courses created by user", { status: 500 })
    }
}

export const POST = async ({ request, params }: { request: Request; params: { id: string } }) => {
    try {
        await connectToDB()
        const course = await Course.create(JSON.parse(await request.text()))
        return new Response(JSON.stringify(course), { status: 200 })
    } catch (error) {
        return new Response("Failed to create Course", { status: 500 })
    }
}