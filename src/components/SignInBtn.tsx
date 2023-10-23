'use client'
import { Button } from "@mantine/core";
import { signIn } from "next-auth/react";

export default function SignInBtn(){
    return (
        <Button variant="outline" display='block' onClick={() => signIn(undefined, { callbackUrl: '/home' })}>Sign in</Button>
    )
}