import {useState, useEffect} from 'react'

import './css/App.css';

import Step1 from './components/Step-1';
import Step2 from './components/Step-2';
import Step3 from './components/Step-3';

function App() {
   
  const [step1Expand, setStep1Expand] = useState(true)
  const [step2Expand, setStep2Expand] = useState(false)
  const [step3Expand, setStep3Expand] = useState(false)

  const expandStep1 = () => {
    setStep1Expand(true)
    setStep2Expand(false)
    setStep3Expand(false)
  }

  const expandStep2 = () => {
    setStep1Expand(false)
    setStep2Expand(true)
    setStep3Expand(false)
  }
  
  const expandStep3 = () => {
    setStep1Expand(false)
    setStep2Expand(false)
    setStep3Expand(true)
  }  


  return (
    <div className="App">
      <Step1 expand={step1Expand} headerAction={() => {expandStep1()}} buttonAction={() => {expandStep2()}} />
      <Step2 expand={step2Expand} headerAction={() => {expandStep2()}} buttonAction={() => {expandStep3()}} />
      <Step3 expand={step3Expand} headerAction={() => {expandStep3()}}/>
    </div>
  );
}

export default App;
