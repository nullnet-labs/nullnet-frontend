import classes from '@/lib/css-class-list';
import styles from '@/component-styles/sub-nav.module.css';

export default function SubNav() {
    return (
        <nav className={classes('border-b overflow-hidden relative', styles['sub-nav'])}>
            <a href="/posts/new" className="hover-invert">
                New Post
            </a>
        </nav>
    );
}
