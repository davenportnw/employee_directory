import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Employee Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Job Title: </strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;