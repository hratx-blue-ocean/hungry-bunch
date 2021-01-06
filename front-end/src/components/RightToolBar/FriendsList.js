import React, { useState } from 'react';
import { Grid, Container, Paper, IconButton } from '@material-ui/core';
import IndividualFriend from './IndividualFriend.js';

const FriendsList = ({ friendsList, friends }) => {
  return (
    <Container>
      <Grid container direction='column' item spacing={3} xs={12}>
        {friends.map((friendId)=>{
          return (
            <IndividualFriend key={friendId} friendId={friendId}/>
          );
        })}
      </Grid>

    </Container>
  );
};

export default FriendsList;