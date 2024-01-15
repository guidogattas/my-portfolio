import React from 'react'

import { AboutCard } from './AboutCard'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'


export const About = () => {
    return (
        <section id='about' className={styles.container}>

            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="image of me" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <AboutCard
                        iconImg="about/cursorIcon.png" title="Frontend Developer" description='I’m a front-end developer with experience in building responsive and optimized sites'
                    />
                    <AboutCard
                        iconImg="about/serverIcon.png" title="Backend Developer" description='I have experience developing fast and optimised back-end systems and APIs'
                    />
                    <AboutCard
                        iconImg="about/uiIcon.png" title="UI Designer" description='I have designed multiple landing pages and have created design systems as well'
                    />

                </ul>
            </div>

        </section>
    )
}
