import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
// import { detectOverflow } from '@popperjs/core'
import { BrowserRouter } from 'react-router-dom'
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
          <ContextProvider>
               <ChatContextProvider>
                    <ChakraProvider>
                         <App />
                    </ChakraProvider>
               </ChatContextProvider>
          </ContextProvider>
     </BrowserRouter>
);

