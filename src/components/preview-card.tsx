import styles from '@/component-styles/preview-card.module.css';
import classes from '@/lib/css-class-list';
import { PreviewDatum } from '@/lib/mock-data';

type PreviewCardProps = {
    datum: PreviewDatum,
    featured?: boolean
}

export default function PreviewCard({ datum, featured }: PreviewCardProps) {
    

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
                href={`/posts/${datum.id}`}
                className={classes(
                    'block flex flex-col wrap-break-word p-2 hover-glow',
                    styles['preview-box']
                )}
                title={datum.tags.join(' ')}
            >
                <div className={classes(
                    'flex justify-center',
                    styles['shrink-wrapper']
                )}>
                    <img
                        src={datum.thumb}
                        alt={datum.title}
                        loading="lazy"
                    />
                </div>
                <p className="text-base font-black whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {datum.title}
                </p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full" style={{color: 'var(--primary-accent-dim)'}}>
                    <ins>{datum.url}</ins>
                </p>
            </a>
        </article>
    );
}
