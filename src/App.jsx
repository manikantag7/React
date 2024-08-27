import './App.css';
// import UserPage from './UserPage';
// import Templet from './Templet';
// import SampleArray from './SampleArray';
// import StateMgm from './StateMgm';

// import FirstComp from './propContainer/FirstComp';
// import SecondComp from './propContainer/SecondComp';
// import ThirdComp from './propContainer/ThirdComp';
// import FourthComp from './propContainer/FourthComp';

// import Resize from './Chat';
// import Circuit from './Circuit';
// import ClickEvent from './ClickEvent';
import Employee from './Employee';
// import FormExample from './FormExample';
// import MultiState from './MultiState';

// import { useState } from 'react';

// const myCar={
//   brand: "BMW",
//   model: "5 Series",
//   year: 2021,
//   color: "Blue"
// }

function App() {

  // const [sampleCondition, setSampleCondition] = useState(true);
  return (
    <div className="container">
        {/* <FirstComp myCar= {myCar}/> 
        <SecondComp name="chandu"/>
        <ThirdComp name="vasavi"/>
        <FourthComp name="ravi"/> */}
        {/* <Resize/> */}
        {/* <Circuit/> */}
        {/* <ClickEvent/> */}
        <Employee/>
        {/* <FormExample /> */}
        {/* <MultiState/> */}

        {/* <StateMgm/>
        {/* <h1>{sampleCondition? <FirstComp myCar={myCar}/>:'this is false statement'}</h1> */}
        {/* <SampleArray/> */}
        {/* <Templet/> */}
        {/* <UserPage/> */}
    </div>
  );
}

export default App;
