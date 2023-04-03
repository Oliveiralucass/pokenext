import Image from "next/image";
import styles from '../styles/About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat iure illum fugit porro beatae doloribus asperiores. Consequatur molestias rem ratione officiis animi obcaecati. Iure assumenda ipsa recusandae cum sit?</p>
            <Image src="/images/charizard.png" width={300} height={300} alt="Charizard"/>
        </div>
    )
}