import { CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {fetchWebstatus} from'../thunk'
import { green,red } from "@mui/material/colors";
const gridStyle={margin:'270px auto'};
///You have to use thunk middleware
function MainContent({webstatusData, fetchWebstatus}){
   useEffect(()=>{
    fetchWebstatus()
   },[]);
    
   if(webstatusData.loading){
       return(
        <Grid style={gridStyle}>
        <CircularProgress color="secondary"/>
        </Grid>
       )
   }else if (webstatusData.error) {
       return(
        <Grid style={gridStyle}>
            <Typography>{webstatusData.error}</Typography>
       </Grid>
        )

   } else {
       console.log("Here Here: "+webstatusData.webstatus.webstatus)
       if(webstatusData.webstatus.webstatus=='All Active'){
       return(
        <Grid style={gridStyle}>
            <Zoom in={true} style={{transitionDelay:'500ms'}}>
            <Typography color={green}>All Website Up</Typography>
            </Zoom>
        </Grid>
       ) 
       }else{
           return(
               <Paper elevation={20}>
                   <TableContainer>
                       <Table>
                           <TableHead>
                               <TableRow>
                                   <TableCell>Website</TableCell>
                                   <TableCell>Status</TableCell>
                               </TableRow>
                           </TableHead>
                           <TableBody>
                               {
                                   webstatusData &&
                                   webstatusData.webstatus.down &&
                                   webstatusData.webstatus.down.map(stat =>
                                    <TableRow>
                                        <TableCell>{stat}</TableCell>
                                        <TableCell><Typography color={red}>Down</Typography></TableCell>
                                    </TableRow>)
                               }
                           </TableBody>
                       </Table>
                   </TableContainer>
               </Paper>
           )
       }
   }
}

const mapStateToProps = state => {
    return {
        webstatusData: state.webstatus
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchWebstatus: () => dispatch(fetchWebstatus())
    }
  }
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(MainContent)