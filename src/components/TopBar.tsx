import { Burger, Group, Text } from "@mantine/core";
import Logo from '@components/Logo';
import { theme } from "@themes/theme";
import ModeToggleButton from "@components/ModeToggleButton";

export default function TopBar({ opened, toggle}: { opened: boolean, toggle: () => void}) {
    return (
        <Group h="100%" px="md" py={-1}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Logo size={30} />
            <Text c={theme.primaryColor} className="text-3xl font-bold">CourseMinder</Text>
            <div className="flex-grow">
                <ModeToggleButton/>
            </div>
        </Group>
    )   
}