import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}

export default App;
