
import React, { useState } from 'react';


const StrainForm = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [thc, setThc] = useState('');
    const [cbd, setCbd] = useState('');
    const [effects, setEffects] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const strain = {name, type, thc, cbd, effects}

        const response = await fetch('/api/strains',{
            method: 'POST',
            body: JSON.stringify(strain),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setName('')
            setType('')
            setThc('')
            setCbd('')
            setEffects('')
            setError(null)
            console.log('new strain added',json)
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>add a new strain</h3>

            <label>Strain Name:</label>
            <input
                type = "text"
                onChange = {(e) => setName(e.target.value)}
                value={name}
                required
            />

            <label>Type:</label>
            <input
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
                required
            />
            <label>THC:</label>
            <input
                type="number"
                onChange={(e) => setThc(e.target.value)}
                value={thc}
                required
            />
            <label>CBD:</label>
            <input
                type="number"
                onChange={(e) => setCbd(e.target.value)}
                value={cbd}
                required
            />
            <label>Effects:</label>
            <input
                type="text"
                onChange={(e) => setEffects(e.target.value)}
                value={effects}
            />
            
            <button>Add Strain</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )


}

export default StrainForm