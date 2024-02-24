import { useEffect, useState } from 'react'
import './App.css'
import TestComponent from './components/TestComponent'


function App() {
  return (
    <>
    <TestComponent url={"http://localhost:7070/loading"}/>
    <TestComponent url={"http://localhost:7070/error"}/>
    <TestComponent url={"http://localhost:7070/data"}/>
    </>
  )
}

export default App
