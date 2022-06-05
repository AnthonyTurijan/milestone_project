
import React from 'react';
import { Link } from "react-router-dom";
import './css/navbar.css'

export default function Navbar() {
    return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/newsfeed">News Feed</Link>
      </li>
      <li>
        <Link to="/CreateNewEvent">Create New Event</Link>
      </li>
    </ul>
    </>
    );
  }
