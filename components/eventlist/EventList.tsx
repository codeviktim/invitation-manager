const EventList = ({ events,onEventClick }) => {

 return (
     <section>
          <table>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Event Name
                </th>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Time Created
                </th>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Edit
                </th>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
         {events.map(event => (
           <tr>
             <td className='font-poppins font-medium px-6 py-4 text-sm text-gray-900 whitespace-nowrap cursor-pointer'
                 onClick = {(e) => onEventClick({event})}
              >
               {event}
             </td>
                <td className='font-poppins px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>5:30</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-200 p-2 px-4 rounded-lg'><span className='font-poppins text-sm'>edit</span></button>
                </td>
                <td className='px-6 py-4'>
                  <button className='bg-red-100 rounded-lg p-2'><span className='font-poppins text-sm'>delete</span></button>
                </td>
              </tr>
            )
          )
         }      
            </tbody>
          </table>
        </section>
 )   
 }
export default EventList;