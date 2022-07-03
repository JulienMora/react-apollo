import React from 'react';
import './App.css';

// GRAPHQL IMPORTS
import { GET_LAUNCHES } from "./queries";
import { useQuery } from '@apollo/client';


function App() {
    const { loading, error, data } = useQuery(GET_LAUNCHES);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    return (
      <div>
          <h2>Apollo - SpaceX Missions 🚀</h2>

          {data.launches.map((item: any, index: number) => (
              <div key={index}>
                  <h3>{item.mission_name}</h3>
              </div>
          ))}
      </div>
  );
}

export default App;
