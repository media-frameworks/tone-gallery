import React from 'react';
import ReactDOM from 'react-dom';
import PageMain from "./pages/PageMain"

try{
   ReactDOM.render(
      <React.StrictMode>
         <PageMain app_name={"tone-gallery"}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
} catch {
   debugger;
}
