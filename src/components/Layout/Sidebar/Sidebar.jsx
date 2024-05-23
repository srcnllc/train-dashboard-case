import Container from '../../Tools/Container/Container';
import styles from './Sidebar.module.scss';
import React, { useEffect, useState } from 'react';
import SideLink from '../../Tools/SideLink/SideLink';
import { HiExclamationCircle, HiHome, HiMiniUserCircle, HiOutlineTableCells } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';


export default function Sidebar() {
  const [active,setActive] = useState();
  const location = useLocation();
  const navList = [
    {
      title: 'Home',
      slug: '/',
      Image:<HiHome />
    },
    {
      title: 'Teams',
      slug: '/teams',
      Image:<HiMiniUserCircle />
    },
    {
      title: 'Top List',
      slug: '/topList',
      Image:<HiOutlineTableCells/>
    },
    {
      title: 'Upcoming Courses',
      slug: '/upcomingCourses',
      Image:<HiExclamationCircle />
    },
  ];
  const handleLinkClick = () => {
    setActive(false); 
  };
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);
  return (
    <>
    <aside  className={`${styles.sidenavTypes} ${active ? styles.activeSide : ''}`}>
      <Container>
      <div className={styles.title}>
      <h2>Dashboard Case TrainIQ </h2>
    </div>
        <div className={styles.nav}>
          <ul>
          {navList.map((item, index) => {
              const isActive = location.pathname === item.slug;
              return (
                <li 
                  key={index} 
                  className={isActive ? styles.active : ''}
                  onClick={handleLinkClick}
                >
                    <SideLink title={item.title} slug={item.slug} image={item.Image} />
                </li>
              );
            })}
          </ul>
        </div>
        <div
              onClick={() => setActive(!active)}
              className={`${styles.hamburger} ${
                active ? styles.active : ''
              } d-sm`}>
              <span />
              <span />
              <span />
            </div>
      </Container>
    </aside>
    </>
  );
}
