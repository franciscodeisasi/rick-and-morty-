import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './paginas/Home/Home';
/*import Characters from './paginas/Characters/Characters';
import Contact from './paginas/Contact/Contact';*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Home/>
    {/* {< Contact/>
    < Characters/>} */}
   
  </React.StrictMode>
);
 

