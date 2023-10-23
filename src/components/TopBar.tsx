import { Burger, Button, Group, useMantineTheme } from "@mantine/core";
import Logo from '@components/Logo';
import ModeToggleButton from "@components/ModeToggleButton";
import { signOut, useSession } from "next-auth/react";
import { Sign } from "crypto";
import SignOutBtn from "@components/SignOutBtn";

export default function TopBar({ opened, toggle}: { opened: boolean, toggle: () => void}) {
    const theme = useMantineTheme();
    const { data: session } = useSession();
    return (
        <Group h="100%" px="md" py={-1}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Logo size={30} />
            {/* change the following comment to h1 with themeprimarycolor */}
            {/* <Text c={theme.primaryColor} className="text-3xl font-bold">CourseMinder</Text> */}
            <h1 style={{color: theme.colors.orangeapp[7] }} className={`text-3xl font-bold`}>
                CourseMinder
            </h1>
            <ModeToggleButton/>
            <div className="flex flex-grow flex-row-reverse items-center">
                <SignOutBtn />
                <h2 className="px-5 font-semibold">{session?session.user?.name:null}</h2>
            </div>
        </Group>
    )   
}