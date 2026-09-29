import { personalInfo } from "@/lib/data";
import VitalsCanvas from "./VitalsCanvas";
import styles from "./Landing.module.css";

export default function Landing() {
    const { name, tagline, role, company, email, links } = personalInfo;

    return (
        <div className={styles.page}>
            <div className={styles.frame}>
                <div className={styles.panel}>
                    <VitalsCanvas className={styles.canvas} />
                    <header className={styles.header}>
                        <p className={styles.tagline}>{tagline}</p>
                        <a className={styles.quiet} href={links.company}>
                            {links.company.replace("https://", "")}
                        </a>
                    </header>
                    <main id="main-content" tabIndex={-1} className={styles.main}>
                        <h1 className={`${styles.name} ${styles.enter}`}>{name}</h1>
                        <div className={`${styles.cta} ${styles.enter} ${styles.delay}`}>
                            <a className={`${styles.btn} ${styles.primary}`} href={`mailto:${email}`}>
                                Email me
                            </a>
                            <a className={`${styles.btn} ${styles.ghost}`} href={links.linkedin}>
                                LinkedIn
                            </a>
                        </div>
                    </main>
                    <footer className={styles.footer}>
                        <span className={styles.address}>{email}</span>
                        <span className={styles.quiet}>
                            {role}, {company}
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    );
}
