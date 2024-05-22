import React from 'react'
import styles from './Skills.module.scss'

export default function Skills({employees,skill}) {
  return (
    <div className={styles.skillsCard}>
      <p>{skill}</p>
      <span>Employees:{employees}</span>
    </div>
  )
}
