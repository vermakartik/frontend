import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, makeStyles, useMediaQuery, useTheme, Grid } from '@material-ui/core'
import { FONT_SECONDARY, CreateClassList, sText } from 'CommonConst'
import { Tabs, TabsMobileBottom } from './Tabs/Tabs'

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
        zIndex: "2",
    },
    container: {
        marginBottom: '1rem',
        position: "sticky",
        top: "0px"
    }
}))


const TitleDesktop = ({title, link, nRender}) => {

    const c = useTitleStyles()
    return  (
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

const useMobileTitleStyles = makeStyles(t => ({
    container: {
        position: "fixed",
        background: "red",
        bottom: "0px",
        left: "0px",
        width: "100%",
        zIndex: "1000"
    }
}))

export const Title = ({title, link, nRender}) => {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('lg'))

    const c = useTitleStyles()
    return  (
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
                (matches ? <Tabs /> : <TabsMobileBottom />) :
                null       
            }
        </>
    )
}
