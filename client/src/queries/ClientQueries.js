import { gql } from "@apollo/client";

let GET_CLIENTS=gql`
    query getClients {
        clients{
        id
        name
        email
        phone
        }
    
    }
`

export {GET_CLIENTS}