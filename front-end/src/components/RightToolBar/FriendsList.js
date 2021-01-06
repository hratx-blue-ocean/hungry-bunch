import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import IndividualFriend from './IndividualFriend.js';

const FriendsList = ({ friends, userInput }) => {

  // const userFriendSearch = (searchTerm) => {
  //   if (searchTerm) {
  //     const filteredArr = friends.filter((singleRecipe) => singleRecipe.)
  //     return friends
  //   }
  // }

  return (
    <Container>
      <Grid container direction='column' item spacing={5} xs={12}>
        {friends.map((singleFriend)=>{
          return (
            <IndividualFriend friend={singleFriend}/>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FriendsList;