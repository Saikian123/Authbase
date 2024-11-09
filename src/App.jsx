import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import ChartComponents from "./components/ChartComponent";
import ModalForm from "./components/ModalForm";
import './App.css'

function App(){
  const [showModal,setShowModal]=useState(false);
  const toggleModal=()=>setShowModal(!showModal);

  return(
    <div className="app">
      <Sidebar/>
      <div className="main-content">
        <Header toggleModal={toggleModal}/>
        <div className="dashboard-content">
          <DataTable toggleModal={toggleModal}/>
          <ChartComponents/>
        </div>
      </div>
      {showModal && <ModalForm toggleModal={toggleModal}/>}
    </div>
  )
}
export default App;