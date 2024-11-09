import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css'

function DataTable({toggleModal}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3005/users');
      setData(response.data);
    }
    catch(err) {
      setError('Error Fetching data',err);

    } finally {
      setLoading(false);
    }

  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return(
    <div className="container mt-4">
      <h1>Data Table</h1>
      <button onClick={toggleModal}>Add Table Data</button>
      <button className="refresh" onClick={fetchData}>Refresh Data after submit</button>
      {loading? <p> loading..</p>:error?<p>{error}</p>:(
        <table  className="table table-striped table-hover">
          <thead >
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
            
            </tr>
          </thead>
          <tbody>
            {data.map((item)=>(
              <tr  key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
  
}
export default DataTable;