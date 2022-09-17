import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalUseeffect from "./Components/ConditionalUseeffect";
import Form from "./Components/Form";
import FormHandle from "./Components/FormHandle";
import FunctionProps from "./Components/FunctionProps";
import Ifesle from "./Components/Ifesle";
import InputValue from "./Components/InputValue";
import StyleCss from "./Components/StyleCss";
import Toggle from "./Components/Toggle";
import Validation from "./Components/Validation";
import MapFunction from "./Components/MapFunction";
import User from "./Components/User";
import MemoHook from "./Components/MemoHook";
import RefHook from "./Components/RefHook";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
// import User from "./User";
// import Count from "./Components/Count"
// import Profile2 from "./Components/Profile2";
// import Profile from "./Profile";
import Page404 from "./Components/Page404";
import ParamUser from "./Components/ParamUser";
import NavbarPage from "./Components/Navbar";


function App() {
  let data = "Nikhil";

  const student = [
    { name: "Nikhil", mobile: 898989, email: "nikhil@gmail.com" },
    { name: "ram", mobile: 234443, email: "ram@gmail.com" },
    { name: "Shyam", mobile: 111, email: "shym@gmail.com" },
  ];

  function getdata() {
    alert("getdata function from props");
  }

  function parentAlert(data) {
    alert(data);
  }

  const [count, setCount] = useState(0);

  function HOCRed(props) {
    return <h3>{props.cmp}</h3>;
  }
  return (
    <div className="App">
      <h3>This is a app component</h3>
      {/* <Profile/>
      <Profile2/> */}
      {/* <User/>   */}
      {/* <Count/> */}
      {/* <Form/> */}
      {/* <InputValue/> */}
      <Toggle />
      <hr />
      <FormHandle />
      <hr />
      <Ifesle />
      <hr />
      <Validation />
      <hr />
      <FunctionProps data={getdata} />
      <hr />
      <ConditionalUseeffect />
      <hr />
      <StyleCss />
      <hr />
      <MapFunction data={student} />
      <hr />
      <h1>Lifting Up state</h1>
      <User name={data} alert={parentAlert} />
      <hr />
      <MemoHook />
      <hr/>
      
      {/* <NavbarPage/> */}
      <hr />
      <RefHook />
      <hr />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>update</button>

      <BrowserRouter>
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/user/:name" element={<ParamUser/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
