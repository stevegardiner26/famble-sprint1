/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import {
  Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import styles from './BetModal.module.css';
import betService from '../services/betService';
import { selectUser } from '../store/slices/userSlice';

function BetModal(props) {
  const user = useSelector(selectUser);
  const [modal, setModal] = useState(false);
  const [teamID, setTeamID] = useState(null);
  const [amount, setAmount] = useState(null);
  const [valid, setValid] = useState(false);

  const { gameID, team1, team2 } = props;
  const team1Name = team1.name;
  const team1ID = team1.id;
  const team2Name = team2.name;
  const team2ID = team2.id;

  const userID = user._id;

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (valid) {
      const setBet = async () => {
        const res = await betService.createBet(userID, gameID, teamID, amount);
        if (res === []) {
          alert('Could not place bet at this time. Try again later.');
        } else {
          alert('Bet placed successfully!');
          setValid(false);
          setModal(!modal);
        }
      };
      setBet();
    }
  }, [valid, userID, gameID, teamID, amount]);

  const changeTeamID = (teamSelectedID) => {
    setTeamID(teamSelectedID);
  };

  const changeBet = (event) => {
    const betAmount = event.target.value;
    if (betAmount <= 0) {
      alert('Please enter a valid bet amount');
      event.target.value = null;
    } else {
      setAmount(betAmount);
    }
  };

  const handleBet = () => {
    if (amount !== null) {
      if (teamID !== null) {
        setValid(true);
      } else {
        alert('Please select a team');
      }
    } else {
      alert('Please enter a bet amount');
    }
  };

  // ModalBody is for the stats
  return (
    <div>
      <Button className={styles.modal_button} onClick={toggle}>Place Bet</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{`${team1Name} vs ${team2Name}`}</ModalHeader>
        <ModalBody />
        <ModalFooter className={styles.modal_footer}>
          <Form className={styles.bet_form}>
            <FormGroup row>
              <Label for="betAmount" sm={3}>Bet Amount:</Label>
              <Col sm={9}>
                <Input type="number" name="betAmount" id="betAmount" onChange={changeBet} placeholder="Enter Bet Amount" />
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <Label sm={4}>Select a Team:</Label>
              <FormGroup check>
                <Col sm={4}>
                  <Label check>
                    <Input onClick={() => changeTeamID(team1ID)} type="radio" name="team1" />
                    {team1Name}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup check>
                <Col sm={4}>
                  <Label check>
                    <Input onClick={() => changeTeamID(team2ID)} type="radio" name="team2" />
                    {team2Name}
                  </Label>
                </Col>
              </FormGroup>
            </FormGroup>
          </Form>
          <Button color="primary" onClick={handleBet}>Submit Bet</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BetModal;
