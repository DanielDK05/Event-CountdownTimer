import react, { useState } from 'react'

export default function App() {
  const [dateString, setDateString] = useState("dd:hh:mm:ss")

  return (
    <div>
        <input 
            type='date'
        />
        <h1>{dateString}</h1>
    </div>
  );
}
