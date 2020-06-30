import React from 'react'
import { CreateClassList, sText } from 'CommonConst'
import { makeStyles, Grid } from '@material-ui/core'
import 'Components/Loader/BlogLoading.css'

const useItemStyles = makeStyles(t => ({
    itemContainer: {
        position: "relative",
        height: "156px",
        borderRadius: "28px",
        margin: "1rem",
        padding: "1rem",
        background: `${t.palette.grey[800]}5f`,
    },
    item_1: {
        boxSizing: "borderBox",
        borderRadius: "28px",
        background: `${t.palette.grey[300]}4f`,
        margin: "8px 2px"
    },
    height10: {
        height: "10px",
    },
    height20: {
        height: "20px",
    },
    height80: {
        height: "180px",
    },
    height50: {
        height: "50vh",
    },
    width100: {
        width: "100%"
    },
    width50: {
        width: "50%"
    },
    onBottom: {
        position: 'absolute',
        bottom: "8px",
        width: "50%",
        display: "block"
    },
    borderTop: {
        borderTop: `1px solid ${t.palette.grey[500]}3f`,
        marginTop: "1rem",
        paddingTop: "1rem"
    }
}))

const Item = () => {
    const c = useItemStyles()
    return (
        <>
            <div className={c.itemContainer}>
                <div className={CreateClassList(['item_animation', c.item_1, c.width100, c.height20])} />
                <div className={CreateClassList(['item_animation', c.item_1, c.width50, c.height20])} />
            </div>
            <div style={{padding: "0px 1rem"}}>
                <div className={CreateClassList(['item_animation', c.item_1, c.width100, c.height20])} />
                <div className={CreateClassList(['item_animation', c.item_1, c.width50, c.height20])} />
                <div className={CreateClassList(['item_animation', c.item_1, c.width50, c.height20])} />
                <div className={CreateClassList(['item_animation', c.item_1, c.width100, c.height20])} />
            </div>
            <Grid container className={c.borderTop}>
                <Grid item xs={12} sm={6} md={4}> <div className={CreateClassList(['item_animation', c.item_1, c.height80])}/> </ Grid>
                <Grid item xs={12} sm={6} md={4}> <div className={CreateClassList(['item_animation', c.item_1, c.height80])}/> </ Grid>
                <Grid item xs={12} sm={6} md={4}> <div className={CreateClassList(['item_animation', c.item_1, c.height80])}/> </ Grid>
            </Grid>
        </>
    )

}

const useContainerStyles = makeStyles(t => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}))


export const PostLoader = () => {

    const c = useContainerStyles()

    return (
        <Grid container>
            <Grid item xs={12}><Item /></Grid>
        </Grid>
    )
}