import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PlayerContextProvider } from './context/PlayerContext.jsx'
import { BrowserRouter } from 'react-router-dom'
const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
