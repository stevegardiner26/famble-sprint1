import React from 'react';
import styles from './Home.module.css';

function InfoCard(props){
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
            <img alt="placeholder" width="80%" height="100%" src={props.image} />
        </div>
        <div className={styles.card_content}> 
            <h2 className={styles.card_title}>{props.title}</h2>
            <h3 className={styles.card_text} >{props.content}</h3>
        </div>
    </div>
  );
};

export default InfoCard;