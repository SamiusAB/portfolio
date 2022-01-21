import Image from 'next/image'
import styles from '../styles/Home.module.css'
import centralButcher from '../public/Central-Butcher.png'

function SiteShowcase(props:any) {
    return (
            <div className="image-wrapper w-full h-full pt-4 relative md:pb-40">
                <div className='banner'>
                    <Image
                        src={props.imageSrc}
                        alt="Picture of laptop on desk"
                        layout="intrinsic"
                    />
                </div>

                {console.log(props.imageSrc)}

                <div className={styles.sitecase_overlay__left}>
                    <h3 className={styles.heading}>{props.heading}</h3>
                    <p>{props.message}</p>
                </div>
            </div>
    )
}

export default SiteShowcase;