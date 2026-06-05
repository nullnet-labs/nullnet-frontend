import classes from '@/lib/css-class-list';
import styles from '@/component-styles/sub-nav.module.css';

export default function HomeNav() {
    return (
        <nav className={classes('border-b overflow-hidden relative', styles['sub-nav'])}>
            <a href="/" className="hover-invert">
                New Post
            </a>
        </nav>
    );
}
