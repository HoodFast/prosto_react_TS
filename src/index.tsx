import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

const container=document.getElementById('root')
const root= createRoot(container!)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
