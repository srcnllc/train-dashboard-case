import React from 'react';
import styles from './TopList.module.scss';
import Container from '../../components/Tools/Container/Container';
import Skills from '../../components/Widgets/Skills/Skills';
export default function TopList({ data }) {
  return (
    <section className={styles.topListPage}>
      <Container large>
        <div className={styles.tableContainer}>
          <div className={styles.topEmployees}>
            <h2 className={styles.title}>Top Employees</h2>
            <div className={styles.content}>
              <table className={styles.customers}>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>E-mail</th>
                  <th>Current Score</th>
                </tr>
                </thead>
                <tbody>
                {data.data?.top_employees.map((item,index)=>(
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.email}</td>
                    <td>{item.current_score}</td>
                  </tr>
                ))}  
                  </tbody>
            
              </table>
            </div>
          </div>
          <div className={styles.skills}>
          <h2 className={styles.title}>Top Skills</h2>
          <div className={styles.content}>
          {data.data?.top_skills.map((item,index)=>(
          <Skills employees={item.employees} skill={item.skill}  key={index}/>
        ))}
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
}
