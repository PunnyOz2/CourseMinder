import { Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { use, useEffect, useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { set } from "mongoose";
export default function ModeToggleButton(){
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const ref = useRef<HTMLImageElement>(null);
    const iconMoon = '/img/moon.svg';
    const iconSun = '/img/sun.svg';
    const { data: session } = useSession();
    const userTheme = session?.user?.colorScheme;
    const computedColorScheme = useComputedColorScheme((userTheme==='dark')?'dark':'light');
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        setColorScheme(computedColorScheme);
        if (ref.current) {
            ref.current.src = computedColorScheme === 'dark' ? iconMoon : iconSun;
        }
    },[colorScheme])
    
    return (
        <Button variant="outline" onClick={toggleColorScheme}>
            <Image src={iconMoon} alt="" width='30' height='30' ref={ref}
            style={{
                filter: 'invert(36%) sepia(61%) saturate(1109%) hue-rotate(348deg) brightness(98%) contrast(91%)'
            }}/>
        </Button>
    )
}