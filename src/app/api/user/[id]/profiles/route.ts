import Profile from "@models/profile";
import { connectToDB } from "@utils/database";

export const GET = async ({ request, params }: { request: Request; params: { id: string } }) => {
    try {
        await connectToDB()
        const profiles = await Profile.find({ ownerid: params.id })
        return new Response(JSON.stringify(profiles), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch Profiles created by user", { status: 500 })
    }
} 