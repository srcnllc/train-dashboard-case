import React from 'react';
import styles from './StatisticsCard.module.scss'

export default function StatisticsCard({date,examsCompleted,hours,lessonsTaken}) {
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className={styles.StatisticsCard}>
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.examsCompleted}>ExamsCompleted:{examsCompleted}</div>
      <div className={styles.hours}>Hours:{hours}</div>
      <div className={styles.lessonsTaken}>LessonsTaken:{lessonsTaken}</div>
    </div>
  )
}
