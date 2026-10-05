import React from 'react';
import ReactDOM from 'react-dom/client'
import JeuxD from './components/jeuxDé/jeux';
const element=document.getElementById("root")
const root=ReactDOM.createRoot(element)

function Show(){

    return (
        <div>
            <JeuxD />
        </div>
    )
}
root.render(<Show/>)