import React from 'react'
import styles from './ProfileCard.module.scss'


export default function ProfileCard({currentScore,email,lessonsTaken,name,title,skillsBeingDeveloped}) {
  return (
    <div className={styles.profileCard}>
        <div className={styles.header}>
            <h3>{name}</h3>
            <p>LessonsTaken:<span>{lessonsTaken}</span></p>
        </div>
        <div className={styles.body}>
            <p>Title : {title}</p>
            <p>Email : {email}</p>
            <p>Current Score : {currentScore}</p>
        </div>
        <div className={styles.footer}>
            <ul>
            {skillsBeingDeveloped.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
  </div>
  )
}
