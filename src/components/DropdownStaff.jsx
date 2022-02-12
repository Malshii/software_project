import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
return (	
	<Dropdown>
		<Dropdown.Toggle>
		SIGNUP
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="/signupDoc">
			DOCTOR
		</Dropdown.Item>
		<Dropdown.Item href="/signupAdmin">
			ADMINISTRATOR
		</Dropdown.Item>
		<Dropdown.Item href="/signupRec">
			RECEPTIONIST
		</Dropdown.Item>
		<Dropdown.Item href="/signupLab">
			LAB ASSISTANT
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>	
);
}

