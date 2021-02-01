import React from 'react'
import Box from '@material-ui/core/Box';
import Layout from '../components/layout'
import VideoCard from '../components/VideoCard'
import Grid from '@material-ui/core/Grid'

function Home( data ) {
  return (
    <Layout title="Next Tube">
        <Box p={2}>
        <Grid container spacing={4}>
          
          </Grid>
          
        </Box>
    </Layout>
  )
}


export async function getStaticProps() {
    const data = [

    ]
    return {
        props: {
            data:[

            ]
        }
    }
}

export default Home;