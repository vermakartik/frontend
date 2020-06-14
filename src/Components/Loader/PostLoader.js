import React from 'react'
import { CreateClassList, sText } from 'CommonConst'
import { makeStyles, Grid } from '@material-ui/core'
import 'Components/Loader/BlogLoading.css'

const useItemStyles = makeStyles(t => ({
    itemContainer: {
        position: "relative",
        height: "156px",
        borderRadius: "2px",
        margin: "1rem",
        padding: "1rem",
        background: `${t.palette.grey[800]}5f`,

    },
    item_1: {
        borderRadius: "2px",
        background: `${t.palette.grey[300]}4f`,
        margin: "8px 0px"
    },
    height10: {
        height: "10px",
    },
    height20: {
        height: "20px",
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