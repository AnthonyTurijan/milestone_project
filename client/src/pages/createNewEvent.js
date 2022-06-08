import React from "react";

function CreateNewEvent(){
    return(
        <>
        <h2>Create a New Event</h2>
        <br/>
        <form method="POST" action='http://localhost:3001/events/createNewEvent'>
            <div>
                <label htmlFor="event_name" >Event Name</label>
                <input id='event_name' name='event_name' required />
            </div>
            <br/>
            <div>
                <label htmlFor='event_description'>Event Description</label>
                <input id='event_description' name='event_description' />
            </div>
            <br/>
            <div>
                <label htmlFor='event_location'>Event Location</label>
                <input id='event_location' name='event_location'/>
            </div>
            <br/>
            <div>
                <lable htmlFor='event_time'>Event Time</lable>
                <input id='event_time' name='event_time' />
            </div>
            <br/>
            <div>
                <label htmlFor='image'>Image</label>
                <input id='image' name='image' />
            </div>
            <br/>
            <div>
                <label htmlFor='group_size'>Group Size</label>
                <input id='group_size' name='group_size' />
            </div>
            <br/>
            <div>
                <label htmlFor="user_id">User Id</label>
                <input id="user_id" name="user_id"/>
            </div>
            <br/>
            <input type='submit' value='Add Event' />
        </form>
        </>
    )
}

export default CreateNewEvent