import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, makeStyles } from '@material-ui/core'
import { FONT_SECONDARY, CreateClassList, sText } from 'CommonConst'
import { Tabs } from './Tabs/Tabs'

const useTitleStyles = makeStyles(t => ({
    title: {
        fontFamily: FONT_SECONDARY,
        padding: `2rem 0rem`,
        color: `${t.palette.primary.light}`,
        fontWeight: "100"
    },
    titleContainer: {
        textAlign: "center",
        display: "block",
        textDecoration: "none",
        zIndex: "1000",
    },
    container: {
        marginBottom: '1rem',
        position: "sticky",
        top: "0px"
    }
}))

export const Title = ({title, link, nRender}) => {

    const c = useTitleStyles()
    return (
        <>
            {
                link ?
                <Link to={link} className={CreateClassList([c.titleContainer])}>
                   <Typography className={c.title} variant="h5">{title}</Typography>
                </Link>:
                <div className={CreateClassList([c.titleContainer])}>
                    <Typography className={c.title} variant="h5">{title}</Typography>
                </div>
            }
            {
                !nRender ?
                <Tabs /> :
                null       
            }
        </>
        
    )
}
