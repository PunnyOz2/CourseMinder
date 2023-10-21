import { NavLink } from "@mantine/core";
import Link from "next/link";

export default function NavSectionLink({link, label}: {link: string, label: string}){
    return (
        <NavLink component={Link} href={link} label={label}/>
    )
}