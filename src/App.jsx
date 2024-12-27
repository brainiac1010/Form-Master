
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './Components/StateFullFORM/StateFullForm'

function App() {

  const handleSignUpSubmit = (data) => {
  
   console.log('sign up data',data)
}


 
const handleUpdateProfile = (data) => {
  
  console.log('update profile data',data)
}

  return (
    <>

      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}

      {/* <StateFullForm></StateFullForm> */}

      <RefForm formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>

        <div>
          <h4>SignUp</h4>
          <p>Plse sign up right now</p>
        </div>
       </RefForm>


      <RefForm formTitle={'Profile Update'}
      handleSubmit={handleUpdateProfile}  
      submitBtnText='Update'>
<div>
  <h4>Update profile</h4>
  <p>keep your profile update</p>
</div>

      </RefForm>
      

       {/* <HookForm></HookForm> */}
    </>
  )
}

export default App
