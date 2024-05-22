import { Link } from 'react-router-dom';
import styles from './SideLink.module.scss';
import React from 'react';

export default function SideLink({ slug, title,image }) {
  return (
    <Link to={slug} className={styles.sideLink}>
        {image}
        {title}
    </Link>
  );
}
