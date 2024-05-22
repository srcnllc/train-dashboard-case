import React from 'react'
import styles from './UpcomingCourses.module.scss';
import Container from '../../components/Tools/Container/Container';
import CoursesCard from '../../components/Widgets/CoursesCard/CoursesCard';
export default function UpcomingCourses({data}) {
  return (
        <section className={styles.upcomingCoursesPage}>
      <Container large>
      <div className={styles.coursesContainer}>
          <div className={styles.topEmployees}>
          {data.data?.upcoming_courses.map((item,index)=>(
          <CoursesCard key={index} assignedTo={item.assigned_to} desc={item.description} dueDate={item.due_date} status={item.status} title={item.title}/>
        ))}
          </div>

        </div>
      </Container>
    </section>
  )
}