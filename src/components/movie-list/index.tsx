import React from 'react'
import { Box,  Paper } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { MovieDataType } from '../../assets/data';
import MovieCard from '../movie-card';
interface MovieListProps{
    recomendedList :MovieDataType[];
}
const MovieList = ({recomendedList}:MovieListProps) => {
  console.log("the recommendd list",recomendedList)
  return (
    <Box sx={{display:'flex',gap:2,overflowX:"scroll"}}>
      {recomendedList.map((movie) => (
        <Grid  key={movie.id}>
          <Paper elevation={0} sx={{backgroundCOlor:"transparent"}}>
            <MovieCard movie={movie}/>
          </Paper>
        </Grid>
       
      ))

      }
    </Box>
  )
}

export default MovieList