import React, { useContext } from 'react'
import { MovieDataType } from '../../assets/data'
import { MovieContext } from '../../context/movie-context'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import MovieIcon from "../../assets/icons/icon-category-movie.svg"
import TvSeriesIcon from '../../assets/icons/icon-category-tv.svg';


interface MovieTrendCardProps {
    movie :MovieDataType
}

const MovieTrendCard = ({movie}:MovieTrendCardProps) => {
    const {dispatch} = useContext(MovieContext);
  return (
    <Card key={movie.id} elevation={0} style={{backgroundColor:"transparent"}}>
        <CardContent style={{padding:0,position:"relative",overflowX:"scroll",display:"flex"}} >
            <img src={movie.thumbnail.regular.large} alt="" style={{width:"300px",height:"100%",borderRadius:"8px"}}/>
            <Box sx={{postion:"absolute"}} top={0} left={0} bottom={0} right={0} bgcolor="rgba(0,0,0,0.6)" borderRadius={"8px"}/>
            <Stack mt="6" spacing={0} position="absolute" bottom={0} left={0} p={4}>
                <Grid container>

                <Grid >
                    <Typography fontSize={10} color="#E0E0E0" aria-label="year of movie">{movie.year}</Typography>
                </Grid>
                <Grid >
                    <Box sx={{width:"1rem",height:"1rem",bg:"#E0E0E0",borderRadius:"full"}}/>
                </Grid>
                <Grid >
                    <img src={movie.category === "Movies" ? MovieIcon as unknown as string: TvSeriesIcon as unknown as string} 
                    alt=""
                     width={16} height={16}/>
                </Grid>
                <Grid >
                    <Typography fontSize={10} color="#E0E0E0" aria-label="movie category">{movie.category}</Typography>
                </Grid>
                <Grid >
                    <Box sx={{width:"1rem",height:"1rem",bg:"#E0E0E0",borderRadius:"full"}}/>
                </Grid>
                <Grid >
                    <Typography fontSize={10} color="#E0E0E0" aria-label="movie rating">{movie.rating}</Typography>
                </Grid>
                <Typography padding={0} color="#E0E0E0" aria-label="movie title">{movie.title}</Typography>
                </Grid>

            </Stack>
        </CardContent>
    </Card>
  )
}

export default MovieTrendCard