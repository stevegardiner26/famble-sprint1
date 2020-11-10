import React from 'react';
import styles from './Home.module.css';

function InfoCard(props){
  let card_format = null;
  if (props.img_side === "left"){
    card_format = (    
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
  }
  else{
    card_format = (    
      <div className={styles.card}>
        <div className={styles.card_content}> 
            <h2 className={styles.card_title}>{props.title}</h2>
            <h3 className={styles.card_text} >{props.content}</h3>
        </div>
        <div className={styles.card_img}>
            <img alt="placeholder" width="80%" height="100%" src={props.image} />
        </div>
      </div>
    );
  }

  return (
    <div>
      {card_format}
      <div className={styles.mobile_card}>
        <div className={styles.card_img}>
            <img alt="placeholder" width="80%" height="100%" src={props.image} />
        </div>
        <div className={styles.card_content}> 
            <h2 className={styles.card_title}>{props.title}</h2>
            <h3 className={styles.card_text} >{props.content}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;