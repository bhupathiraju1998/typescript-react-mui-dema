import React, { SetStateAction, useState } from 'react'
import Layout from '../../Layout'
import { Box, Input, InputAdornment, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '../../assets/icons/icon-search.svg';
const Home = () => {
  const [search,setSearch] = useState('');
  const handleSearch = (e:{target:{value:SetStateAction<string>}}) => {
    setSearch(e.target.value)
  }
  return (
    <Layout>
      
      <Box>
        <Paper component="form" sx={{
          display:'flex',
          alignItem:"center",
          borderRadius:"default",
          p:1,
          backgroundColor:"#10141f",
          border:"none"
        }}>
          <InputBase
            placeholder='Search'
            sx={{
              ml:1,
              flex:1,
              color:"white",
              border:"none"
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position='start'>
                <img src={SearchIcon as unknown as string} alt="seatch icon" width={20} height={20}/>
              </InputAdornment>
            }
          />
        </Paper>
        
      </Box>
      <Box>
        {search === "" ?
              <Box width="100%">
                <Box width="100%">
                  <Typography variant='h5' component="h1" my={6} fontWeight={400} >Trending</Typography>
                  <MovieTrendList trendingList={trendingList}/>
                </Box>
                <Box width="100%">
                  <Typography variant='h5' component="h1" my={6} fontWeight={400} >Recommended for you</Typography>
                  <MovieTrendList recommendedList={recommendedList}/>
                </Box>
                
              </Box>

             : <Box width="100%">
              <Typography>Found</Typography>
              </Box>}
        </Box>
    </Layout>
  )
}

export default Home