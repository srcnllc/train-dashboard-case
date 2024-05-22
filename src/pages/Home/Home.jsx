import React from 'react'
import styles from './Home.module.scss';
import Container from '../../components/Tools/Container/Container';
import StatisticsCard from '../../components/Widgets/StatisticsCard/StatisticsCard';
import CoursesCard from '../../components/Widgets/CoursesCard/CoursesCard';
import Skills from '../../components/Widgets/Skills/Skills';
export default function Home({data}) {
  return (
      <section className={styles.homePage}>
      <Container large>
        <div className={styles.homeContainer}>
        <div className={styles.statistic}>
          <h2 className={styles.title}>Active Hours</h2>
          <div className={styles.content}>
          {data.data?.activity_hours.map((item,index)=>(
          <StatisticsCard key={index} date={item.date} examsCompleted={item.exams_completed} hours={item.hours} lessonsTaken={item.lessons_taken}/>
        ))}
          </div>
        </div>
        <div className={styles.courses}>
          <h2 className={styles.title}>In Progress Courses</h2>
          <div className={styles.content}>
          {data.data?.in_progress_courses.map((item,index)=>(
          <CoursesCard key={index} assignedTo={item.assigned_to} desc={item.description} dueDate={item.due_date} status={item.status} title={item.title}/>
        ))}
          </div>
        </div>
        <div className={styles.skills}>
          <h2 className={styles.title}>Skills In Development</h2>
          <div className={styles.content}>
          <div className={styles.content}>
          {data.data?.skills_in_development.map((item,index)=>(
          <Skills key={index} employees={item.employees} skill={item.skill}/>
        ))}
          </div>
          </div>
        </div>
        </div>

      </Container>
    </section>
  )
}