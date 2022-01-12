import {useState, useEffect} from 'react'

import api from './services/api'

import './css/App.css';

import Steps from './components/Steps'
import Input from './components/Input'
import Select from './components/Select'
import DateInput from './components/Date'
import Textarea from './components/Textarea';
import Button from './components/Button'

const data = {
  step1: {
    firstName : '',
    surname : '',
    email : ''
  },
  step2: {
    tel : '',
    gender : '',
    birth : ''
  },
  step3: {
    comments : ''
  }
}

function dataValidate(data) {
  return !(Object.values(data).includes(''))
}

function App() {

  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [gender, setGender] = useState('')
  const [birth, setBirth] = useState('')
  const [comments, setComments] = useState('')
  
  const [step1Expanded, setStep1Expanded] = useState(true)
  const [step2Expanded, setStep2Expanded] = useState(false)
  const [step3Expanded, setStep3Expanded] = useState(false)

  const expandStep1 = () => {
    setStep1Expanded(true)
    setStep2Expanded(false)
    setStep3Expanded(false)
  }

  const expandStep2 = () => {

    if(!dataValidate(data.step1)) return

    setStep1Expanded(false)
    setStep2Expanded(true)
    setStep3Expanded(false)
  }
  
  const expandStep3 = () => {

    if(!dataValidate(data.step2)) return

    setStep1Expanded(false)
    setStep2Expanded(false)
    setStep3Expanded(true)
  }

  useEffect(() => {

    data.step1 = {
      firstName,
      surname,
      email
    }

  }, [firstName, surname, email])

  useEffect(() => {

    data.step2 = {
      tel,
      gender,
      birth
    }

  }, [tel, gender, birth])

  useEffect(() => {
    
    data.step3 = {
      comments
    }

  }, [comments])

  const sendData = async () => {

    const comment = {
      ...data.step1,
      ...data.step2,
      ...data.step3
    }

    const response = await api.post('/', comment)
  
    console.log(response)
  
    alert('Data Saved!')
  }


  return (
    <div className="App">
      <Steps title="Step 1: Your details" headerAction={expandStep1} expanded={step1Expanded}>

        <Input label="First Name" value={firstName} state={setFirstName} required />
        <Input label="Surname" value={surname} state={setSurname} required />
        <Input label="Email Address" type="email" value={email} state={setEmail} required />

        <Button name="next" value="Next >" disabled={!dataValidate(data.step1)} buttonAction={expandStep2} />
      </Steps>

      <Steps title="Step 2: More comments" headerAction={expandStep2} expanded={step2Expanded}>

        <Input label="Telephone number" type="tel" value={firstName} state={setTel} required />

        <Select label="Gender" value={gender} state={setGender} options={['Male', 'Female']}></Select>

        <DateInput label="Date of birth" value={birth} state={setBirth}></DateInput>

        <Button name="next" value="Next >" disabled={!dataValidate(data.step2)} buttonAction={expandStep3} />
      </Steps>

      <Steps title="Step 3: Final comments" headerAction={expandStep3} expanded={step3Expanded}>

        <Textarea label="Comments" value={comments} state={setComments}></Textarea>

        <Button name="next" value="Next >" disabled={!dataValidate(data.step3)} buttonAction={sendData}></Button>
      </Steps>
    </div>
  );
}

export default App;