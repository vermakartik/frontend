import React from 'react'
import { CreateClassList, sText } from 'CommonConst'
import { makeStyles, Grid } from '@material-ui/core'
import 'Components/Loader/BlogLoading.css'

const useItemStyles = makeStyles(t => ({
    itemContainer: {
        position: "relative",
        height: "196px",
        borderRadius: "28px",
        margin: "1rem",
        padding: "1rem",
        background: `${t.palette.grey[800]}5f`,

    },
    item_1: {
        height: "10px",
        borderRadius: "28px",
        background: `${t.palette.grey[300]}4f`,
        margin: "8px 0px"
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
    }
}))

const Item = () => {
    const c = useItemStyles()
    return (
        <div className={c.itemContainer}>
            <div className={CreateClassList(['item_animation', c.item_1, c.width100])} />
            <div className={CreateClassList(['item_animation', c.item_1, c.width50])} />
            <div className={c.onBottom}>
                <div className={CreateClassList(['item_animation', c.item_1, c.width50])} />
                <div className={CreateClassList(['item_animation', c.item_1, c.width100])} />
            </div>
        </div>
    )

}

const useContainerStyles = makeStyles(t => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}))


export const BlogLoader = () => {

    const c = useContainerStyles()

    return (
        <Grid container className={CreateClassList([c.container])}>
            <Grid item xs={12} sm={6} md={4}><Item /></Grid>
            <Grid item xs={12} sm={6} md={4}><Item /></Grid>
            <Grid item xs={12} sm={6} md={4}><Item /></Grid>
            <Grid item xs={12} sm={6} md={4}><Item /></Grid>
        </Grid>
    )
}