import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonCircle } from "react-icons/bs";
import { MdSettingsPower } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";

export default function Navbar() {
return (	
	<Dropdown>
		<Dropdown.Toggle>
		<BsPersonCircle color='white'/>
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="/Doctorprofile">
		   <BsPersonCircle/>  &nbsp;My Profile
		</Dropdown.Item>
		<Dropdown.Item href="#">
		    <AiOutlineHistory/>  &nbsp;History
		</Dropdown.Item>
		<Dropdown.Item href="#">
			<AiTwotoneSetting/>  &nbsp;Account Setting
		</Dropdown.Item>
		<Dropdown.Item href="#">
			<MdSettingsPower color='red'/>  &nbsp; Logout 
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>	
);
}

