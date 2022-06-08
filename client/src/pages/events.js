import React from "react";
import {useEffect, useState} from 'react'
import {useParams, Link,} from 'react-router-dom'

function Events(){
    // const {event_id} = useParams()
    // const [eventData, setEventData] = useState([])

    // useEffect(()=>{
    //     const API_URL = `http://localhost:3000/events`
    //     const fetchData = async () => {
    //         const response = await fetch(API_URL)
    //         const resData = await response.json()
    //         setEventData(resData.results)
    //     }
    //     fetchData()
    // }, [event_id])
    // const allEvents = eventData.filter(entity => entity.collectionType === 'Event')
    // .map((event, i)=>{
    //     return(
    //         <div key={i}>
    //             <Link to={`/events/${event_id}`}>
    //                 <p>{event.event_name}</p>
    //             </Link>
    //         </div>
    //     )
    // })

    const getEvents = async ()=>{
        try {
            const res = await fetch('http://localhost:300/events')
            .then(res=> res.text())
            .then(text=>console.log(text))
            const jsonData = res.json()
           console.log(jsonData)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        getEvents()
    })
    return(
        <>
        <div>Events Page</div>
       
        </>
    )
}

export default Events;