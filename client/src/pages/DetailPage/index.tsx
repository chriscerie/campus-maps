import { Grid, Button, Container, Divider, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useRef, useEffect, useState } from 'react';
import './DetailPage.scss';

function DetailPage() {
  return (
    <Grid container justifyContent='center'>

      <Grid container xs={11} md={7} alignItems="stretch">

          <Grid item xs={8} px={2}>
            <div className="align-text-left building-title-header">
              {/* TODO Fetch building name */}
              <h1>Phelps Hall</h1>
            </div>
          </Grid>
          
          <Grid item xs={4} px={2} justifyContent='flex-end'>
            <div className="building-title-header align-text-right">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: '#2266e3',
                  textTransform: 'capitalize',
                  marginTop: '1rem',
                  borderRadius: '8px',
                  padding: '5px 25px 5px 25px',
                }}
              >
                {/* TODO Make this button functional: Add this classroom or building to My Classes
                  Only show if logged in? Since logged out users cannot use the saved classes functionality anyway 
                  Might not be required for MVP */}
                + Add
              </Button>
            </div>
          </Grid>

        <Grid item xs={12} md={5} px={2}>
          <div className="building-info align-text-left">
            <Grid item xs={12}>
              <p>
                {/* TODO Properly fetch building information*/}
                <strong>Building code:</strong> PHELP 3526
                <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, purus at eleifend ornare, libero metus tincidunt velit, quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex. Quisque viverra justo a luctus feugiat. Aliquam erat volutpat. Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti. Suspendisse et iaculis velit.
              </p>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} md={7} px={2} pt={2}>
          {/* TODO implement photo gallery
          Photo gallery should go here. Ideally it fills the size of the grid.
          This is a placeholder image */}
            <img src="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/ucsbengineeringmap.jpg" id="test-image"></img>
        </Grid>
        
        <Grid item xs={12}>
          <Grid item xs={12} md={5} px={2}>
            <div className="align-text-left">
              <h1>Comments</h1>            
              </div>
          </Grid>
          <Grid item xs={12} px={2}>
            <div className="align-text-left">
              {/* TODO implement comments */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, purus at eleifend ornare, libero metus tincidunt velit, quis tincidunt nisl eros non tellus. Nunc ullamcorper porttitor risus, eu luctus justo auctor sed. Vestibulum ornare eros est, in tempus massa congue ut. Duis eu fringilla nulla, nec mattis ex. Quisque viverra justo a luctus feugiat. Aliquam erat volutpat. Nullam varius odio ex, non aliquet eros tristique ullamcorper. Donec dignissim nisl dui, in sollicitudin magna faucibus eu. Duis porta ornare erat, ut lacinia lacus volutpat id. Suspendisse potenti. Suspendisse et iaculis velit.</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DetailPage;
