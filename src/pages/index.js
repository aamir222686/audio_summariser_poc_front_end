import Head from 'next/head'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

// comp imports
import ViewBlock from "../components/viewBlock"

export async function getServerSideProps(context) {
  let res = await fetch(`http://${context.req.headers.host}/api/getAllData`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}

export default function Home(props) {
  let dataArray = props.allPosts.data;
  return (
    <>
      <Head>
        <title>Audio Summariser</title>
        <meta name="description" content="Audio Summariser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {dataArray && dataArray.length > 0 ?
        <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
          <Typography variant='h3' padding={5}>Audio Summariser</Typography>
          <Box sx={{width: "80%", display: "flex", justifyContent: "space-around", marginBottom: "20px", color: "lightblue"}}>
            <Typography variant='body2' padding={1}><b>Email:</b> aamir222686@yahoo.com</Typography>
            <Typography variant='body2' padding={1}><b>Git:</b> <a href='https://github.com/aamir222686' target={'_blank'}>@aamir222686</a></Typography>
          </Box>
          <Box>
            <Typography variant='body1'>
              <em>This is a proof of concept which contains a pipeline in the backend which does the following</em>
            </Typography><br></br>
            <ul style={{marginLeft: "20px", fontFamily: "roboto", lineHeight: "35px"}}>
                <li>Uses the input audio file/s and generates the Transcript for it using OpenAi's Whisper Model.</li>
                <li>Next the pipeline generates the Short Summary and a Short Explaination using GPT's "text-davinci-003" model.</li>
                <li>The file is then saved to firebase and the generated data is saved to a MongoDB collection</li>
                <li>The UI below showcases the generative capabilities and some example ways to handle these transcripts for the input audio files.</li>
            </ul>
          </Box>
          <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            {
              dataArray.map((item, i) =>
                {
                  return <ViewBlock blockData={item} key={i+1} num={i} />
                }
              )
            }
          </Container>
        </Container>
        :
        null
      }
    </>
  )
}
