import Container from '../../Tools/Container/Container';
import styles from './Header.module.scss';
import React, { useState } from 'react';

export default function Header({data}) {
  const [active, setActive] = useState(true);
  return (
    <>
      <header className={styles.header}>
        <Container large>
          <div className={styles.topbar}>
            <div className={styles.total}>
              <p>Total Completed Courses: <span>{data.data?.total_completed_courses}</span></p>
              <p>Total Employees: <span>{data.data?.total_employees}</span></p>
            </div>
            <div className={`${styles.rightBar} d-md`}>
              <button className="btn white" onClick={()=>alert("Yeni Ekip Oluşturma Butonuna Tıklandı")}>
              Yeni Ekip Oluştur
              </button>
              <button className="btn green" onClick={()=>alert("Ekibe Yeni Çalışan Ekleme Butonuna Tıklandı")}>
                <div className="icon">
                  <img src={'/images/icons/wallet.svg'} alt='wallet'/>
                </div>
                Ekibe Yeni Çalışan Ekleme
              </button>
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
          </div>
        </Container>
      </header>
    </>
  );
}
