import React from "react";

function CreateNewEvent(){
    return(
        <>
        <h2>Create a New Event</h2>
        <br/>
        <form method="POST" action='/newsFeed'>
            <div>
                <label htmlFor="event_name" >Event Name</label>
                <input id='event_name' name='event_name' required />
            </div>
            <div>
                <label htmlFor='event_description'>Event Description</label>
                <input id='event_description' name='event_description' />
            </div>
            <div>
                <label htmlFor='event_location'>Event Location</label>
                <input id='event_location' name='event_location'/>
            </div>
            <div>
                <lable htmlFor='event_time'>Event Time</lable>
                <input id='event_time' name='event_time' />
            </div>
            <input type='submit' value='Add Event' />
        </form>
        </>
    )
}

export default CreateNewEvent