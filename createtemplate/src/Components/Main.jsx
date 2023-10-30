import React , {useState} from 'react'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import { Grid } from '@mui/material'
import {observer} from "mobx-react";

const Main = observer(({mobxaction}) => {
    
    
    const [textMessage, settextMessage] = useState('')

    const buttonClicked =(elem)=>{
        
        switch(elem.buttonKey){
            case "OpenCheck":
               return mobxDispatcher("OpenCheck")
            case "CloseCheck":
                return mobxDispatcher("CloseCheck")
            case "Add Tip":
                return mobxDispatcher("Add Tip")
            case "Close Tip":
                    return mobxDispatcher("Close Tip")
            default:
                return mobxDispatcher("OpenCheck")
        }
        
    }

    const mobxDispatcher=(nameelem)=>{
        mobxaction.displaySelected(nameelem)
        settextMessage(mobxaction.displayText())
    }

    console.log("From Main Text",textMessage )
    return (
        <>Main
            <Grid container>
                <Grid item md={4}>
                    <Left />
                </Grid>
                <Grid item md={4}>
                    <Center mobreturndata={textMessage}/>
                </Grid>
                <Grid item md={4}>
                    <Right buttonaction={buttonClicked}/>
                </Grid>
            </Grid>
        </>
    )
})


export default Main