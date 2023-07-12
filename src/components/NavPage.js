import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navpage({ title, Link }) {
    return (
        <div>

            <li className="nav-item">
                <Link
                    className="nav-link "
                    to={title === "student" ? "/Student" : "/"}
                >
                    <FontAwesomeIcon className="sidebar-icon" icon={faCircleUser}/>
                    <span>{title === "student" ? "Student" : ""} Details</span>
                </Link>

            </li>
        </div>
    );
}

export default Navpage;