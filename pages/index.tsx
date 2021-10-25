import React, { useState } from 'react';
import Head from 'next/head'
import EventList from '../components/eventlist/EventList'
import GuestList from '../components/guestlist/GuestList'
import EventForm from '../components/createevent/EventForm'

export default function Home() {

  //Event States
  const [eventName, setEventName] = useState('')
  const [events, setEventsArray] = useState([])
  const [showButton, setShowButton] = useState(false)

 //Guest States
  const [currentEvent, setCurrentEvent] = useState('');
  const [guestName, setGuestName] = useState('')
  const [guests, setGuestsArray] = useState([])
  
  
  const showButtonToggler = e => {
    setShowButton(!showButton)
  }

  const addEvent = (e) => {
    if (eventName == '') return false;
      setEventsArray([...events, eventName])
  }

  const onChange = ({target}) => {
    setEventName(target.value)
  } 

  const onEventClick = ({ event }) => {
    setCurrentEvent(event)    
}

  const addGuest = e => {
   setGuestsArray(guests=>[...guests, guestName])
 }
  
  
  return (
    
    < div className = "container min-h-screen py-2 mt-20 mx-auto" >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container ml-50'>
        <div className='grid grid-cols-2 gap-4'>
          <section className='flex'>
            <EventList
              events={events}
              onEventClick = {onEventClick}
             />
          <div>
            {!showButton ?
             ( <button
                onClick={showButtonToggler}
                className='bg-blue-800 w-50 py-2 px-5 rounded-lg shadow'>
                <span className='font-poppins text-white text-bold'>
                  Create Event
                </span>
              </button>
              )
              :
              <EventForm
                showButtonToggler={showButtonToggler}
                addEvent={addEvent}
                onChange={onChange}
                value = {eventName}
              />
            }
            </div>
          </section>
          <section className='flex space-x-2 border-2 rounded-md py-2 px-4'> 
            <GuestList currentEvent={ currentEvent}/>
            <div>
              <button className='bg-blue-800 w-50  px-2 rounded-lg shadow'><span className='font-poppins text-white text-bold text-xs'>Add Guest</span></button>
            </div>
        </section>
          </div>
      </main>        
    </div >
  )
}
