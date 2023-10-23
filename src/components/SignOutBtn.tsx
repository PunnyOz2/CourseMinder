'use client'
import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";

export default function SignOutBtn(){
    return (
        <Button variant="outline" display='block' onClick={() => signOut({ callbackUrl: '/' })}>Sign out</Button>
    )
}