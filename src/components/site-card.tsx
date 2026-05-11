import Image from "next/image";

type SiteCardProps = {
    src: string,
    href: string,
    alt?: string
}

export default function SiteCard({ src, href, alt }: SiteCardProps) {
    let description = alt || href;
    if (description.length > 35) {
        description = `${description.substring(0, 32)}…`;
    }

    return (
        <a
            href={href}
            className="relative inline-block mx-8 cursor-pointer text-center align-middle"
            style={{ width: '250px', height: '170px'}}
            target="_blank"
        >
            <Image
                src={src}
                width={250}
                height={150}
                alt={alt || 'web page'}
                style={{border: '2px outset grey'}}
            />

            {description}
        </a>
    );
};
