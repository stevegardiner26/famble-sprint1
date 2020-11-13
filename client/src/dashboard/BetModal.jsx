// <BetModal game_id="123" team1={{"name":"Bengals", "id":"1234"}} team2={{"name":"Gals", "id":"456"}} />
import React, { useEffect, useState } from 'react';
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './BetModal.module.css';
import betService from '../services/betService';
import { useSelector} from 'react-redux';
import { selectUser } from '../store/slices/userSlice';

function BetModal(props){
	const user = useSelector(selectUser);
	const [modal, setModal] = useState(false);
	const [team_id, setTeam_id] = useState(null);
	const [amount, setAmount] = useState(null);
	const [valid, setValid] = useState(false);
	
	const team1 = props.team1.name
	const team1_id = props.team1.id;
	const team2 = props.team2.name
	const team2_id = props.team2.id;
	const game_id = props.game_id;
	const user_id = user._id;

	const toggle = () => setModal(!modal);

	useEffect(() => {
		if(valid){
			const setBet = async() => {
				const res = await betService.createBet(user_id, game_id, team_id, amount);
				if(res === []){
					alert("Could not place bet at this time. Try again later.")
				}
				else{
					alert("Bet placed successfully!");
					toggle();
				}
			}
			setBet();
		}
	},[valid, user_id, game_id, team_id, amount]);

	const changeTeam_id = (teamSelectedID) => {
		setTeam_id(teamSelectedID);
	}

	const changeBet = (event) => {
		const betAmount = event.target.value;
		if (betAmount <= 0){
			alert("Please enter a valid bet amount");
			event.target.value = null;
		}
		else{
			setAmount(betAmount);
		}
	}

	const handleBet = () => {
		if(amount !== null){
			if(team_id!==null){
				setValid(true);
			}
			else{
				alert("Please select a team");
			}
		}
		else{
			alert("Please enter a bet amount");	
		}
	}

	return (
	<div>
		<Button className={styles.modal_button} onClick={toggle}>Place Bet</Button>
		<Modal isOpen={modal} toggle={toggle}>
		<ModalHeader toggle={toggle}>{team1 + " vs " + team2}</ModalHeader>
		<ModalBody>
			{props.body}
		</ModalBody>
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
								<Input onClick={() => changeTeam_id(team1_id)} type="radio" name="team1" />
								{team1}
							</Label>
						</Col>
					</FormGroup>
					<FormGroup check>
						<Col sm={4}>
							<Label check>
								<Input onClick={() => changeTeam_id(team2_id)} type="radio" name="team2" />
								{team2}
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
