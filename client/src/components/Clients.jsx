import { gql,useQuery } from "@apollo/client"
import ClientRow from "./ClientRow"
import { GET_CLIENTS } from "../queries/ClientQueries"
import Spinner from "./Spinner"



function Clients() {
    const {loading,error,data} =useQuery(GET_CLIENTS)
    if(loading) return <Spinner />
    if(error) return <p>Somethig went wrong </p>
  return (
    <div>
        {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Clients