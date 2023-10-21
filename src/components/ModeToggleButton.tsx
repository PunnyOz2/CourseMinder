import { Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { use, useEffect, useRef } from "react";
import Image from "next/image";
export default function ModeToggleButton(){
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const ref = useRef<HTMLImageElement>(null);
    const iconMoon = '/img/moon.svg';
    const iconSun = '/img/sun.svg';
    const computedColorScheme = useComputedColorScheme('light');
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        if (ref.current) {
            ref.current.src = computedColorScheme === 'dark' ? iconMoon : iconSun;
        }
    })
    return (
        <Button variant="outline" onClick={toggleColorScheme}>
            <Image src={iconMoon} alt="" width='30' height='30' ref={ref}
            style={{
                filter: 'invert(36%) sepia(61%) saturate(1109%) hue-rotate(348deg) brightness(98%) contrast(91%)'
            }}/>
        </Button>
    )
}