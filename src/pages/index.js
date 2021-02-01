import React from 'react'
import Box from '@material-ui/core/Box';
import Layout from '../components/layout'

function Home( data ) {
  return (
    <Layout title="Next Tube">
        <Box p={2}>
            Videos
        </Box>
    </Layout>
  )
}


export async function getStaticProps() {
    const data = [
        
    ]
    return {
        props: {
            data:[]
        }
    }
}

export default Home;