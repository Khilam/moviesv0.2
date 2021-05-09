import { createMuiTheme, ThemeProvider  } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'
import React, {setPage} from 'react'


const darkTheme=createMuiTheme({
    palette:{
        type:'dark',
    }
})



const CustomPagination = ({setPage, numberOfPages=10}) => {
    const handelPageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };
    return (
        <div 
        style={
            {
                width:'100%',
                display:'flex',
                justifyContent:'center',
                marginTop:10,
            }
        }
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count = {numberOfPages} 
            color="primary"
            hideNextButton
            hidePrevButton
            onChange={(e)=>handelPageChange(e.target.textContent)}/>
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination
