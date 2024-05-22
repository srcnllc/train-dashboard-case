import React from 'react'
import styles from './UpcomingCard.module.scss'

export default function UpcomingCard({assignedTo,desc,dueDate,status,title}) {
    const [year, month, day] = dueDate.split("-");
    const formattedDueDate = `${day}-${month}-${year}`;
  return (
    <div className={styles.coursesCard}>
        <div className={styles.coursesCardHeader}>
        <p>{assignedTo}</p>
        <span> - </span>
        <p className={styles.acttiveStatus}>{status}</p>
        </div>
        <div className={styles.coursesCardBody}>
        <p className={styles.coursesCardHeaderTitle}>{title}</p>
          <p className={styles.coursesCardBodyDesc}>{desc}</p>
        </div>
        <div className={styles.coursesCardFooter}>
          <p className={styles.coursesCardFooterDueDate}>Due date:<span>{formattedDueDate}</span></p>
        </div>
      </div>
  )
}
