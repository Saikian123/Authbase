import axios from "axios";
import { useEffect, useState } from "react";

function DataTable() {
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
    <div>
      <h1>Data Table</h1>
      <button onClick={fetchData}>Refresh</button>
      {loading? <p> loading..</p>:error?<p>{error}</p>:(
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
            
            </tr>
          </thead>
          <tbody>
            {data.map((item)=>(
              <tr key={item.id}>
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