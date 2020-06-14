import React from 'react'
import { Grid, makeStyles, Typography, Link } from '@material-ui/core'
import { FONT_SECONDARY, CreateClassList, sText } from 'CommonConst'
import { ProjectsInfo } from './ProjectsInfo'
import { Title } from 'Components/Title'

const useResumeStyles = makeStyles(t => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        padding: "2rem 0rem",
        fontFamily: FONT_SECONDARY,
        color: t.palette.primary.main,
        [t.breakpoints.down('md')]: {
            padding: "1.5rem 0rem",
            fontSize: "32px"
        }
    },
    pContainers: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}))

const useNProjectStyles = makeStyles(t => ({
    container: {
        margin: "1rem",
        overflow: "hidden",
        borderRadius: "8px",
        width: "420px",
        paddingBottom: "1rem",
        border: `1px solid ${t.palette.grey[500]}00`,
        transition: "background 0.2s, border 0.2s",
        background: `${t.palette.grey[500]}0f`,
        "&:hover": {
            background: `${t.palette.grey[500]}0f`,
            border: `1px solid ${t.palette.grey[500]}4f`,
        },
        position: "relative",
        [t.breakpoints.down('lg')]: {
            width: "360px",
        },
        [t.breakpoints.down('md')]: {
            width: "320px",
        },
        [t.breakpoints.down('sm')]: {
            width: "280px",
        }
    },
    img: {
        height: '228px',
        width: "100%",
        // padding: "4px",
        objectFit: "cover",
        [t.breakpoints.down('sm')]: {
            height: "156px",
        }
    },
    title: {
        fontSize: "1rem",
        color: `${t.palette.grey[300]}bf`,
        fontWeight: "bold"
    },
    desc: {
        fontSize: "10px",
        color: t.palette.grey[500],
        height: "3rem",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    tags: {
        display: "flex",
        flexWrap: "wrap", 
        padding: "0px",
        paddingTop: "10px",
    },
    linkContainer: {
        marginTop: "1rem"
    },
    linkProject: {
        textDecoration: "none",
        fontSize: "10px",
        background: `${t.palette.secondary.dark}3f`,
        padding: "8px 12px",
        fontWeight: "500",
        color: `${t.palette.grey[300]}af`,
        borderRadius: "2px",
        border: `1px solid ${t.palette.secondary.light}7f`,
        "&:hover": {
            color: `${t.palette.primary.light}`
        }
    },
    liveLink: {
        textDecoration: "none",
        fontSize: "10px",
        fontWeight: "bold",
        padding: "8px",
        color: t.palette.grey[500],
        "&:hover": {
            color: `${t.palette.primary.light}`
        }
    }
}))

const useChips = makeStyles(t => ({
    chip: {
        padding: "0px 4px",
        display: "inline-block",
        fontSize: "10px",
        margin: "2px",
        background: `${t.palette.primary.main}2f`,
        borderRadius: "10px",
        border: `1px solid ${t.palette.primary.light}2f`,
        color: `${t.palette.primary.light}`
    }
}))

const Chip = ({title}) => {

    const c = useChips()
    return (
        <div className={c.chip}>{title}</div>
    )
}

const NProject = ({config}) => {

    const c = useNProjectStyles()
    console.log(config)
    return  (
        <div className={c.container}>
            <img src={config.image} className={c.img} />
            <div style={{padding: "0px 8px"}}>
                <Typography className={c.title} variant="subtitle1">{config.name}</Typography>
                <Typography className={c.desc} variant="body1">{config.description}</Typography>
                <div className={c.tags}>
                    {
                        config.tags.split(",").map((i, index) => {
                            const w = i;
                            console.log(w);
                            return <Chip title={i.trim(" ")}/>
                        })
                    }
                </div>
                <Grid container className={c.linkContainer}>
                    <Grid item xs={6}>
                        <a target="_blank" className={c.linkProject} href={config.projectLink}>Github Project</a>
                    </Grid>
                    {
                        config.isLive ?
                        <Grid item xs={6} style={{textAlign: 'right'}}>
                            <a target="_blank" href={config.liveLink} className={c.liveLink}>View Live <i className='fas fa-arrow-right'></i></a>
                        </Grid> :
                        null
                    }
                </Grid>
            </div>
        </div>
    )
}

export const Project = () => {

    const c = useResumeStyles()

    return (
        <>         
            <Title title="Our Projects"/>
            <div className={CreateClassList([c.pContainers])}>
                {
                    ProjectsInfo.map((item, index) => <NProject key={index} config={item} />)   
                }
            </div>
        </>
    )
}