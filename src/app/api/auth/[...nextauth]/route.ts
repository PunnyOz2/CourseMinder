import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { connectToDB } from "@utils/database"
import User from "@models/user";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID??"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET??""
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID??"",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET??""
        })
    ],
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ profile }) {
            try {
                if (profile) {
                    await connectToDB();
                    const userExists = await User.exists({ email: profile.email });
                    if (!userExists) {
                        await User.create({
                            email: profile.email,
                            username: profile.name?.replace(" ", "").toLowerCase(),
                            image: profile.image,
                            profile: [
                                {
                                    profilename: "personal",
                                    groups: [
                                        'testgroup1',
                                    ]
                                }
                            ]
                        });
                    }
                }
                return true;
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}