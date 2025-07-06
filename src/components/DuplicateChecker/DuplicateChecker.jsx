import React, { useState } from 'react'

const DuplicateChecker = () => {
    const [columns, setColumns] = useState([]);
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        if (columns.includes(input)) {
            alert('duplicate entry')
            return
        } else {
            setColumns((prev) => {
                const copy = [...prev]
                copy.push(input)
                return copy
            });
        }
        setInput('')
    };

    return (
        <div>
            <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input type='text' value={input} onChange={(e) => handleInputChange(e)} />
                <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>
            </div>

            <div style={{textAlign: 'center'}}>
                {columns.map((val, index) => (
                    <div key={index}>{val}</div>
                ))}
            </div>
        </div>
    )
}

export default DuplicateChecker