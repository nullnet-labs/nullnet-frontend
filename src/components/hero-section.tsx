import styles from '@/component-styles/hero-section.module.css';
import Repeat from '@/components/repeat';

export default function HeroSection() {
    return (
        <>
            <a href="/about" className={'absolute px-3 py-1 hover-btn m-2 dim-accent-bordered-btn'}>
                <div>
                    What is this?
                </div>
            </a>

            <section className="text-center pt-12 md:pt-4 mb-4" style={{textShadow: '0 0 16px var(--primary-accent)'}}>
                <h1 className="text-5xl">
                    Project Nullnet
                </h1>
                <h3 className="text-sm my-3 italic">
                    "Where did the rest of the Internet go?"
                </h3>
                <h3 className="text-sm my-3 italic">
                    Find & share it here.
                </h3>

                <div
                    className="border-y py-2 text-sm text-left whitespace-nowrap overflow-hidden"
                    style={{ borderColor: 'var(--primary-accent-dim)' }}
                >
                    <Repeat x={4}>
                        <span className={styles['leftward-marquee']}>
                            <span className={styles['status-item']}>
                                Online since <span className="text-red-500">...</span>
                            </span>
                            <span className={styles['status-item']}>
                                Status: <span className="text-blue-500">dev</span>
                            </span>
                            <span className={styles['status-item']}>
                                Total Posts: <span className="text-yellow-500">0</span>
                            </span>
                            <span className={styles['status-item']}>
                                Registration: <span className="text-blue-500">dev</span>
                            </span>
                        </span>
                    </Repeat>
                </div>
            </section>
        </>
    )
}
