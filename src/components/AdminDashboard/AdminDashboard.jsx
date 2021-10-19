import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

// Images
import Profile from '../StudentDashboard/Images/Profile.png'

// Styles
import './AdminDashboard.css'

export default function AdminDashboard({ userData }) {
    return (

        <>
            <Navbar role={3} />
            <div className="StudentDashboard">
                <div className="StudentDashboard-container">
                    <div className="StudentDashboard-header">
                        <img src={Profile} alt="profile" className="profile-img" />
                        <div className="StudentDashboard-metadata">
                            <h1 style={{ fontSize: "40px" }}>{userData?.username}</h1>
                            <h3 style={{ color: "rgba(4, 255, 171, 1)" }}>Admin </h3>
                        </div>
                    </div>
                    <div className="TeacherDashboard-body">
                        <div className="TeacherDashboard-body-container">
                            <h2 className="TeacherDashboard-body-title">Users</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}