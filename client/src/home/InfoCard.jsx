import React from 'react';
import styles from './Home.module.css';

function InfoCard(props){
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
            <img alt="placeholder" width="30%" src="https://via.placeholder.com/250" />
        </div>
        <div className={styles.card_content}> 
            <h2 className={styles.card_title}>Title</h2>
        </div>
    </div>
  );
};

export default InfoCard;