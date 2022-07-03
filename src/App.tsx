import React from 'react';

// UI
import './App.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';

// GRAPHQL IMPORTS
import { GET_LAUNCHES } from "./queries";
import { useQuery } from '@apollo/client';


const App = () => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error</p>;

    return (
      <div>
          <h2>Apollo - SpaceX Missions 🚀</h2>

          <Grid container spacing={2}>
              {data.launches.map((item: any, index: number) => (
                  <Grid key={index} item xs={4}>
                      <Card>
                          <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                  {item.mission_name}
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              ))}
          </Grid>
      </div>
  );
}

export default App;
