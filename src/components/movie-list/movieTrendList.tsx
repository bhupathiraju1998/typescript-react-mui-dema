import { Box,Paper } from '@mui/material'
import React from 'react';
import Grid from '@mui/material/Grid2';

import { MovieDataType } from '../../assets/data'
import MovieTrendCard from '../movie-card/movieTrend';

interface MovieTrendListProps{
    trendingList :MovieDataType[]
}
const MovieTrendList = ({trendingList}:MovieTrendListProps) => {
  console.log("the trendingList list",trendingList)

  return (
    <Box sx={{display:'flex',gap:2,overflowX:"scroll"}}>
      {trendingList.map((movie) => (
        <Grid  key={movie.id}>
          <Paper elevation={0} sx={{backgroundCOlor:"transparent"}}>
            <MovieTrendCard movie={movie}/>
          </Paper>
        </Grid>
      ))

      }
    </Box>
  )
}

export default MovieTrendList