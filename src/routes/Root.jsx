import "./Root.css";
import { Outlet } from "react-router-dom";
import { Navigator } from "./Nav";

const Root = () => {
  // const handleClickApp = () => {
  //     ()=>setclickApp(true)
  // }

  // Siempre analizar y revizar las propiedades del evento como "value"
  // const handleClick =(e)=>
  // console.log(e)

  return (
    <>
        <Navigator/>
        
        <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;