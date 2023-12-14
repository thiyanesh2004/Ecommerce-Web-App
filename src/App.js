import LoginForm from "./Project/LoginForm";
import SignupForm from "./Project/SignupForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ArrowProps from "./Day4/ArrowProps";

// import DynamicRendering from "./Day4/DynamicRendering";
// import ParentChildCommunication from "./Day4/ParentChildCommunication";
// import PropsClass from "./Day4/PropsClass";
// import PropsFunctional from "./Day4/PropsFunctional";
// import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1";
// import StateClassCom from "./Day4/StateClassCom";
// import StateFunction from "./Day4/StateFunction";
// import StateHoldObject from "./Day4/StateHoldObject";
// import TwoWayBinding from "./Day4/TwoWayBinding";

// import ArrowFunction from "./component/ArrowFunction";
// import ClassComponent from "./component/ClassComponent";
// import FunctionalCom from "./component/FunctionalCom";
// import OneExpo from "./component/OneExport";

// import functionalCom from "./Conmponent/FunctionalCom.js"; 
// export default function App()
// {
//   return(
//     <div>
//       <PropsFunctional name="sachin"></PropsFunctional>
//       <PropsClass college="SKCT"></PropsClass>
//       <PropsFunctionalEx1 college="SKCT" place="Coimbatore"></PropsFunctionalEx1>
//       <ArrowProps place="CBE"></ArrowProps>
//       <StateClassCom/>
//       <StateFunction/>
//       <StateHoldObject/>
//       <DynamicRendering/>
//       <TwoWayBinding/>
//       <ParentChildCommunication/>
//     </div>
//   )
// }
// AuthPage.js

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='/signup' element={<SignupForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
  // const handleLogin = (credentials) => {
  //   console.log('Logging in with:', credentials);
  // };

  // const handleSignup = (userDetails) => {
  //   console.log('Signing up with:', userDetails);
  // };

  // return (
  //   <div>
  //     <h2>Login</h2>
  //     <LoginForm onLogin={handleLogin} />

  //     <h2>Sign Up</h2>
  //     <SignupForm onSignup={handleSignup} />
  //   </div>
  // );
};

export default App;
