import { Grid, Button, Container, Divider, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useRef, useEffect, useState } from 'react';
import './DetailPage.scss';

function DetailPage() {
  return (
    <Grid container spacing={2} padding={10}>
      <Grid item xs={8}>
        test1
      </Grid>
      <Grid item xs={4}>
        test2
      </Grid>
      <Grid item xs={4}>
        test3
      </Grid>
      <Grid item xs={8}>
        test4
      </Grid>
    </Grid>
  );
}

export default DetailPage;
