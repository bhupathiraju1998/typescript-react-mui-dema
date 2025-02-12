import React from 'react';
import HomeIcon from '../icons/home-icon';
import MovieIcon from '../icons/movie-icon';
import TvSeriesIcon from '../icons/series-icon';
import BookmarkIcon from '../icons/bookmark-icon';
import { Link, useLocation } from 'react-router-dom';
import { Box,  Typography } from '@mui/material';

const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/"
    },
    {
        name: "Movies",
        icon: MovieIcon,
        link: "/movies"
    }, {
        name: "Tv Series",
        icon: TvSeriesIcon,
        link: "/tv-series"
    }, {
        name: "Bookmarks",
        icon: BookmarkIcon,
        link: "/bookmarks"
    },
]

const Sidebar = () => {
    const { pathname } = useLocation()
    return (
        <Box sx={{
            backgroundColor: "161d2f",
            padding: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: {
                xs: "row",
                lg: "column"
            },
            alignItems: "center",
            justifyContent: "space-between",
            width: {
                sm: "100%",
                lg: 200
            }
        }}>
            <Box sx={{
                display: "flex", flexDirection: {
                    xs: 'row', lg: "column"
                }, gap: 5, alignItems: {
                    xs: 'center', lg: 'start'
                }, width: "100%"
            }}>
                <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <Typography variant="h5" component="h1" my={2} fontWeight={400}>
                        PiKaShowApp
                    </Typography>
                </Box>
                <Box sx={{
                    py:{
                        xs:"0px",
                        ls:"16px"
                    },
                    display:'flex',
                    flexDirection:{
                        xs:"row",
                        lg:'column'
                    },
                    gap:4,
                }}>
                    {navLinks.map((item)=> (
                        <Link key={item.name} to={item.link} style={{textDecoration:"none"}}
                        > 
                        <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            gap:2,
                            color:'white',
                            textDecoration:'none'
                        }}>
                        <img src={item.icon as unknown as string} alt={item.name} style={{
                            width:"18px",
                            filter:`${pathname === item.link   ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                                : "invert(84%)"}`
                        }}
                            />
                       
                        <Box sx={{display:{sm:"none",md:'block'}}}>
                            <Typography>{item.name}</Typography>
                        </Box> </Box>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar