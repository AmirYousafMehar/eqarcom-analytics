import React from 'react'
import Chat from '../../chat'
/**
* @author
* @function Home
**/

export const Home = (props) => {
  const roomId = 'tailor1-customer1';
  return(
  <Chat roomId={roomId} />
   )

 }