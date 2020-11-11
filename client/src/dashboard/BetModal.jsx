import React, { useState } from 'react';
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './BetModal.module.css';

function BetModal(props){
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className={styles.modal_button} onClick={toggle}>Place Bet</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.team1 + " vs " + props.team2}</ModalHeader>
        <ModalBody>
          {props.body}
        </ModalBody>
        <ModalFooter className={styles.modal_footer}>
            <Form className={styles.bet_form}>
                <FormGroup row>
                    <Label for="betAmount" sm={3}>Bet Amount:</Label>
                    <Col sm={9}>
                        <Input type="number" name="betAmount" id="betAmount" placeholder="Enter Bet Amount" />
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                    <Label sm={4}>Select a Team:</Label>
                    <FormGroup check>
                        <Col sm={4}>
                            <Label check>
                                <Input type="radio" name="team1" />
                                {props.team1}
                            </Label>
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Col sm={4}>
                            <Label check>
                                <Input type="radio" name="team2" />
                                {props.team2}
                            </Label>
                        </Col>
                    </FormGroup>
                </FormGroup>
            </Form>
            <Button color="primary" onClick={toggle}>Submit Bet</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BetModal;