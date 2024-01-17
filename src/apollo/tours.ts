import { gql } from "@apollo/client";

export const ALL_TOURS = gql`
  query AllTours {
    rockets {
      id
      description
      name
    }
  }
`;
