import React, { useState } from 'react'
import { Grid, makeStyles, Typography, Chip } from '@material-ui/core'
import { FONT_SECONDARY, ToDateFormat, ToSlug } from 'CommonConst'
import { Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles(t => ({
    container: {
        position: "relative",
        textDecoration: "none",
        display: 'block', 
        borderRadius: "2px",
        border: `1px solid ${t.palette.primary.light}1f`,
        margin: "8px",
        padding: "16px",
        height: "196px",
        color: t.palette.text.primary,
        background: `${t.palette.primary.light}06`,
        transition: "background 0.2s",
        "&:hover": {
            background: `${t.palette.primary.main}1f`,
        },
        [t.breakpoints.down('md')]: {
            height: "172px"
        }
    },
    title: {
        fontSize: "1.3rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        color: `${t.palette.grey[200]}bf`,
        fontWeight: "bold",
        [t.breakpoints.down('md')]: {
            fontSize: "1rem"
        },
        [t.breakpoints.down('sm')]: {
            fontSize: "0.9rem"
        }
    },
    chip: {
        background: `${t.palette.grey[100]}0f`,
        padding: "1px 6px",
        fontSize: "10px",
        borderRadius: "16px",
        color: t.palette.grey[500]
    },

    chipsContainer: {
        display: "flex",
        flexWrap: "wrap"
    },
    date: {
        color: t.palette.grey[700],
        fontWeight: "bold",
    },
    name: {
        color: t.palette.grey[500],
        fontWeight: "bold",
    },
    moreInfoContainer: {
        position: "absolute",
        bottom: '8px',
        display:"block",
    }
}))

export const BlogLink = withRouter(({match, config}) => {

    const c = useStyles()

    // console.log(config)
    const link = ToSlug(config.title)
    // console.log(link)
    // console.log(match.url)
    return (

        <Link to={`/blog/${link}`} replace={true} className={c.container}>
            <Typography className={c.title} variant="subtitle1">
                {config.title}
            </Typography><br />
            <div className={c.chipsContainer}>
                {
                    config.type.split(",").map((item, index) => {
                        return (
                            <div className={c.chip}>{item}</div>
                        )
                    })
                }
            </div>
            
            <div className={c.moreInfoContainer}>
                <Typography className={c.name} variant="subtitle2">
                    {config.author}
                </Typography>
                <Typography className={c.date} variant="subtitle2">
                    {ToDateFormat(parseInt(config.publishDate))}
                </Typography>
            </div>

            
        </Link>
    )
})