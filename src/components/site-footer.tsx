import classes from '@/lib/css-class-list';

import styles from '@/component-styles/site-footer.module.css';

export default function SiteFooter() {
    return (
        <footer className={classes('flex items-center justify-center text-center text-sm min-h-[20dvh]', styles['site-footer'])}>
            <span>Project Nullnet © Nicolas Hernandez 2026+</span>
        </footer>
    )
}
