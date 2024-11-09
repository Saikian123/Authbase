function Header({toggleModal}){
  return(
    <div className="header">
      <h1>Dashboard</h1>
      <button onClick={toggleModal}>Add New Data</button>
    </div>
  )
}
 export default Header;