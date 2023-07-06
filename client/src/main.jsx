import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'
import { ContextProvider } from './context/userContext/Context.jsx'
import { UIContextProvider } from './context/todoContext/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <ContextProvider> */}
      <UIContextProvider >
        <App />
      </UIContextProvider>
    {/* </ContextProvider> */}
    </PersistGate>
   </Provider> 
   
  </React.StrictMode>,
)
