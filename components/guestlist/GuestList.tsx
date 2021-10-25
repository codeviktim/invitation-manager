const GuestList = ({currentEvent}) => {
  return (
      <div>
      <h4 className='font-serat font-bold text-center mb-2'>{ currentEvent !== ''? currentEvent : 'Click on event to start inviting'}</h4>
     <section>
          <table>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Name
                </th>
                <th scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Confirmed
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
              <tr>
                <td className='font-poppins font-medium px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>Wedding</td>
                <td className='font-poppins px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>5:30</td>
                <td className='px-6 py-4'>
                  <button className='bg-blue-200 p-2 py-1 px-4 rounded-lg'><span className='font-poppins text-xs'>edit</span></button>
                </td>
                <td className='px-6 py-4'>
                  <button className='bg-red-100 rounded-lg p-2 py-1'><span className='font-poppins text-xs'>delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
      </section>
      </div>
 )   
 }
export default GuestList;