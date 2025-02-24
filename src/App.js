import  React from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from 'react/jsx-runtime'
import Header from './components/Header'
import Body from './components/Body'
const AppLayout = () =>{    
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>

        </div>
    )
}





const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)