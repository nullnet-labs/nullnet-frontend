import styles from '@/styles/preview-card.module.css';
import classes from '@/lib/css-class-list';

type PreviewCardProps = {
    src: string,
    href: string,
    alt?: string,
    featured?: boolean
}

export default function PreviewCard({src, href, alt, featured}:PreviewCardProps) {
    return (
        <article className={classes(
            'block flex flex-col justify-center',
            styles['preview-card']
        )}>
            {
                featured && <header className="relative text-sm">
                    <span className={classes('relative inline-block h-full border-t px-4', styles['manila-tab'])}>
                        Featured
                    </span>
                </header>
            }
            <a
                href={href}
                target="_blank"
                className={classes(
                    'block flex flex-col wrap-break-word p-2',
                    styles['preview-box']
                )}
            >
                <div className={classes(
                    'flex justify-center',
                    styles['shrink-wrapper']
                )}>
                    <img
                        src={src}
                        alt={href || 'web page'}
                        loading="lazy"
                    />
                </div>
                <p>
                    {href}
                </p>
            </a>
        </article>
    );
}
