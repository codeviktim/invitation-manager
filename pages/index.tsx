import React, { useState } from 'react';
import Head from 'next/head'
import EventList from '../components/eventlist/EventList'
import GuestList from '../components/guestlist/GuestList'
import EventForm from '../components/createevent/EventForm'

export default function Home() {
  const [eventName, setEventName] = useState('')
  const [events, setEventsArray] = useState(['Wedding','Clubing','Night party'])
  const [showButton, setShowButton] = useState(false)


  const showButtonToggler = e => {
    setShowButton(!showButton)
  }

  const addEvent = (e) => {
    if (eventName == '') return false;
      setEventsArray([...events, eventName])
  }

  const onChange = ({target}) => {
    setEventName(target.value )
  } 

  return (
    
    < div className = "container min-h-screen py-2 mt-20 mx-auto" >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container ml-50'>
        <section className='flex space-x-8 mb-20'>
          <EventList events={ events }/>
          <div>
            {!showButton ?
             ( <button
                onClick={showButtonToggler}
                className='bg-blue-800 w-50 py-5 px-10 rounded-lg shadow'>
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
        {/*
        <section className='flex space-x-8'>
          <div>
            <h4 className='font-serat font-bold text-center'>Event Name </h4>
            <GuestList />
            </div>
            <div>
              <button className='bg-blue-800 w-50 py-5 px-10 rounded-lg shadow'><span className='font-poppins text-white text-bold'>Create Event</span></button>
            </div>
        </section>
        */}
      </main>
            
    </div >
    
    
  )
}
