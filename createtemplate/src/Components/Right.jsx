import React from 'react'
import { RightButtonData } from './Services/Rightdata'
import { Button, Grid } from '@mui/material'


const Right = ({buttonaction}) => {



    return (
        <div>
            Right<p />
            {RightButtonData.map((elem, index) =>

                <Grid container>
                    <Grid item md={3}>
                        <Button onClick={()=>buttonaction(elem)} size="small" style={{ maxWidth: '120px', maxHeight: '30px', minWidth: '120px', minHeight: '30px' }} color="success" variant='outlined' key={index} >{elem.buttonKey}</Button>
                    </Grid>
                </Grid>

            )}
        </div>
    )
}


export default Right