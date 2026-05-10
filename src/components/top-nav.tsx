import classes from '@/lib/css-class-list';
import styles from '@/styles/top-nav.module.css';

export default function TopNav() {
    return (
        <header className={classes('border-b overflow-hidden relative', styles['lower-bordered-nav'])}>
            <div className="inline-block float-left">
                <nav className="flex flex-row-reverse justify-end">
                    <a href="/" className={classes('hover-link', styles['nav-link'])}>
                        Tags
                    </a>
                    <a href="/" className={classes('hover-link', styles['nav-link'])}>
                        Posts
                    </a>
                    <a href="/" className={classes('hover-link', styles['nav-link'])}>
                        [nullnet]
                    </a>
                </nav>
            </div>

            <div className="absolute bottom-px right-px h-full pr-6 text-md">
                <a href="/" className={classes('relative block px-6 hover-link bordered-link', styles['floating-link'])}>
                    <div style={{ transform: 'translateY(12.5%)'}}>
                        Settings
                    </div>
                </a>
            </div>
        </header>
    );
};
