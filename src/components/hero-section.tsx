import styles from '@/styles/hero-section.module.css';
import Repeat from '@/components/repeat';

export default function HeroSection() {
    return (
        <>
            <a href="/about" className={'absolute px-3 py-1 hover-link m-2 bordered-link'}>
                <div>
                    What is this?
                </div>
            </a>

            <section className="text-center py-4" style={{textShadow: '0 0 16px grey, 0 0 16px grey'}}>
                <h1 className="text-5xl">
                    Project Nullnet
                </h1>
                <h3 className="text-sm my-3 italic">
                    "Where did the rest of the Internet go?"
                </h3>
                <div className="border-y py-2 text-sm text-left whitespace-nowrap overflow-hidden">
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
