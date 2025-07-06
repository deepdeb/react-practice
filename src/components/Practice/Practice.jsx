import React, { useState } from 'react'

function Practice() {
    const [selection, setSelection] = useState('head');
    const [main, setMain] = useState([[]]);
    const [lastSelection, setLastSelection] = useState('head');

    const handleSubmit = () => {
        setMain((prev) => {
            if (selection === lastSelection) {
                const copy = [...prev]
                copy[copy.length - 1] = [...copy[copy.length - 1], selection]
                return copy
            } else {
                return [...prev, [selection]]
            }
        })

        setLastSelection(selection)
    }

    return (
        <div>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <select value={selection} onChange={(e) => setSelection(e.target.value)}>
                    <option value="head">Head</option>
                    <option value="tail">Tail</option>
                </select>
                <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '50px' }}>
                {main.map((col, index) => (
                    <div key={index}>
                        {col.map((item, idx) => (
                            <div key={idx}>{item}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Practice;
