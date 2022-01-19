import Image from 'next/image'
import showcaseImage1 from '../public/Central-Butcher.png'
import showcaseImage2 from '../public/Despana.png'
import showcaseImage3 from '../public/Fallingbrook-Market.png'
import showcaseImage4 from '../public/One-Fine-Food.png'
import showcaseImage5 from '../public/Paramount-Butchershop.png'
import showcaseImage6 from '../public/Pet-Pro-Supply-Co.png'
import showcaseImage7 from '../public/Pisces.png'
import showcaseImage8 from '../public/Steak-Master.png'
import showcaseImage9 from '../public/Steak-n-Chops.png'
import showcaseImage10 from '../public/Tavora-Foods.png'
import showcaseImage11 from '../public/The-Friendly-Butcher.png'
import showcaseImage12 from '../public/The-Meat-Department.png'
import showcaseImage13 from '../public/Waterfront-Seafood.png'
import styles from '../styles/Home.module.css'


function Showcase() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-6">
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage1}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage2}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage3}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage4}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage5}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage6}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage7}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage8}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage9}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage10}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pr-4 pt-4 relative">
                <Image
                    src={showcaseImage11}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__left}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
            <div className="image-wrapper w-full h-full pl-4 pt-4 relative">
                <Image
                    src={showcaseImage12}
                    alt="Picture of laptop on desk"
                    layout="intrinsic"
                />
                <div className={styles.showcase_overlay__right}>
                    <a className={styles.showcase_text} href="https://www.google.com/">LINK to GOOGLE</a>
                </div>
            </div>
        </div>
    )
}

export default Showcase;