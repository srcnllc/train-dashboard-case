import React, { useState } from 'react';
import styles from './Teams.module.scss';
import Container from '../../components/Tools/Container/Container';
import { FaArrowDownShortWide, FaArrowUpWideShort } from 'react-icons/fa6';
import ProfileCard from '../../components/Tools/ProfileCard/ProfileCard';
export default function Teams({ data }) {
  const [openTeamIndex, setOpenTeamIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenTeamIndex(openTeamIndex === index ? null : index);
  };
  return (
    <section className={styles.teams}>
      <Container large>
        <div className={styles.teamAcordion}>
      {data.data?.teams.map((item,index)=>(
        <div className={styles.team}>
          <div className={styles.teamHeader} onClick={() => handleToggle(index)}>
            <div className={styles.headerTitle}>            
              <h3>{item.title}</h3>
              <span>{item.total_employee_count} total_employee_count</span>
            </div>
            {openTeamIndex === index ?
              <FaArrowUpWideShort />
              :
              <FaArrowDownShortWide />
            }
          </div>
          {openTeamIndex === index && (

          <div className={styles.teamDetail}>
            <div className={styles.teamBody}>
            <p className={styles.overalScore}>Overall Score : {item.overall_score}</p>
            <p>{item.description}</p>
            </div>
            <div className={styles.profile}>
              {item.employees.map((empoye,index)=>(
                <ProfileCard 
                  key={index} 
                  currentScore={empoye.current_score} 
                  email={empoye.email} 
                  lessonsTaken={empoye.lessons_taken} 
                  name={empoye.name}
                  title={empoye.title}
                  skillsBeingDeveloped={empoye.skills_being_developed}
                />
              ))}
            </div>
          </div>
                    )}
        </div>
      ))}
      </div>
      </Container>
    </section>
  );
}
