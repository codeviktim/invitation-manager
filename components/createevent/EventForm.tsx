const EventForm = ({showButtonToggler, addEvent, onChange,value}) => {
    return (
        <form className='border-2 py-10 px-12 mx-auto' onSubmit={(e) => { addEvent();showButtonToggler()}}>
        <div className='items-center'>
          <h4 className='font-poppins'>Add Event</h4>
          <input className='w-full bg-gray text-gray-500 border-2 rounded-md py-2 px-4 mb-4'
            type='text'
            value={value}
            onChange={onChange}        
          ></input>
          <button className='bg-gray-800 text-white font-serat text-sm p-2 rounded-md'
                type='submit'
                >
            ADD EVENT
          </button>
        </div>
      </form>
    )
}
export default EventForm;