import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form/Form'
import MembershipForm from './membershipForm/MembershipForm'
import MemberIdentityForm from './membersIdentityForm/MembersIdentityForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Form></Form> */}
     {/* <MembershipForm></MembershipForm> */}
     <MemberIdentityForm></MemberIdentityForm>
    </>
  )
}

export default App
