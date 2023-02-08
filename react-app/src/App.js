import react, { useState } from 'react'

export default function App() {
  const [dateString, setDateString] = useState("dd:hh:mm:ss")
  
  // Not currently working, might be dumb way of doing it
  const onInputChange = (event) => {
    const inputDate = event.target.value;
    const date = new Date();
    const yearToDays = (parseInt(inputDate.substring(6, 9)) - date.getFullYear) * 365;
    const monthsToDays = ((parseInt(inputDate.substring(0, 1)) - date.getMonth) * 30)
    const days = yearToDays + monthsToDays + parseInt(inputDate.substring(3, 4))

    setDateString(days);
  }

  return (
    <div>
        <input 
            type='date'
            onChange={onInputChange}
        />
        <h1>{dateString}</h1>
    </div>
  );
}
