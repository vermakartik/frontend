import React from 'react'
import 'Components/Loader/Loading.css'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { CreateClassList } from 'CommonConst'

const uStyles = makeStyles(t => ({
    item: {
        background: `${t.palette.secondary.light}8f`
    },
    text: {
        textAlign: "center",
        color: `${t.palette.secondary.light}8f`
    }
}))

export const Loading = () => {

    const c = uStyles()

    return (
        <Grid container>
            <Grid item xs={12} className={c.text}>
                <Typography variant="h5">Loading</Typography>
            </Grid>
            <Grid item xs={12} style={{height: "64px"}}>
                <div className="loading-container">
                    <div className={CreateClassList(['loading_item','item_1', c.item])}></div>
                    <div className={CreateClassList(['loading_item','item_2', c.item])}></div>
                    <div className={CreateClassList(['loading_item','item_3', c.item])}></div>
                </div>
            </Grid>
        </Grid>
    )
}