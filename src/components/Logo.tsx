import Image from 'next/image'

export default function Logo({ size }: { size: number }) {

    return (
        <Image
            src="/img/logo.png"
            alt="Logo"
            width={size}
            height={size}
        />
    )
}