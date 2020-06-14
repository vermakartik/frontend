import React from 'react'
import { Grid, Typography, makeStyles, colors } from '@material-ui/core'
import {Link} from 'react-router-dom'
const useFooterStyles = makeStyles((theme) => ({
    container: {
        background: `${theme.palette.grey[900]}4f`,
        textAlign: "center",
        padding: "4em",
        color: `${theme.palette.grey[600]}`,
        marginTop: "1rem",
        fontSize: "12px"
    },
    socialContainer: {
        [theme.breakpoints.up('md')]: {
            textAlign: "right",
            borderRight: `1px solid ${theme.palette.grey[800]}`
        }
    }, 
    LinkTitle: {
        textDecoration: 'none',
        color: theme.palette.grey[600],
        fontWeight: "bold",
        padding: "2px 1rem",
    },
    socialFollowContainer: {
        paddingTop: "1rem",
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
            padding: "0px 1rem",
        }
    },
    develop: {
        fontSize: "10px"
    },
    licon: {
        fontSize: "12px"
    }
}))

const useStyles = makeStyles(t => ({
    icon: {
        textAlign: "center",
        display: "inline-block",
        textDecoration: "none",
        fontSize: "14px",
        padding: "5px",
        width: "32px",
        height: "32px",
        fontWeight: "bold",
        borderRadius: "100px",
        border: `1px solid ${t.palette.primary.light}2f`,
        margin: "4px",
        color: `${t.palette.grey[600]}6f`,
        transition: "all 0.2s",
        "&:hover": {
            color: t.palette.primary.main,
            background: `${t.palette.primary.dark}2f`,
            border: `1px solid ${t.palette.primary.dark}6f`
        }
    }
}))

const SocialLink = ({link, icon}) => {
    const c = useStyles()
    return (<a target="blank" href={link} className={c.icon}><i className={icon} /></a>)
}

const useNLinkStyles = makeStyles(t => ({
    link: {
        textDecoration: 'none',
        color: t.palette.grey[700],
        padding: "2px 1rem",
        fontSize: "10px",
        '&:hover': {
            color: t.palette.primary.light
        }
    }
}))

const NLink = ({link, text}) => {

    const c = useNLinkStyles()
    return (<><Link to={link} className={c.link}>{text}</Link><br /></>)
}

export const Footer = () => {

    const c = useFooterStyles()

    return (
        <Grid container className={c.container}>
            <Grid item xs={12} md={6} className={c.socialContainer}>
                <Typography variant="title" className={c.LinkTitle}>Links</Typography><br />
                {
                    [
                        {link: "/", text: "Home"},
                        {link: "/blog", text: "Blogs"},
                        {link: "/about", text: "About"},
                        {link: "/projects", text: "Projects"},
                        {link: "/resume", text: "Our Domain"},
                        {link: "/contact", text: "Contact Us"},
                    ].map((item, index) => <NLink key={index} {...item}/>)
                }
            </Grid>
            <Grid item xs={12} md={6} className={c.socialFollowContainer}>
                <Typography variant="title" className={c.LinkTitle}>Follow Us on</Typography><br />
                {
                    [
                        {link: "https://www.facebook.com/kartik.verma.39948/", icon: "fab fa-facebook-f"},
                        {link: "https://www.instagram.com/me.kartik.verma/", icon: "fab fa-instagram"},
                        {link: "https://twitter.com/kvs1297", icon: "fab fa-twitter"},
                     ].map((item, index) => <SocialLink key={index} {...item} />)
                }
            </Grid>
            <Grid item xs={12} style={{paddingTop: "2rem"}}>
                <Typography variant="title" style={{fontWeight: "bold"}}>About Developers</Typography><br />
                <Typography variant="title" className={c.develop}>
                    Developed By Kartik Verma with <br /> <i className={`fas fa-laptop ${c.licon}`}></i> and <i className={`fas fa-mug-hot ${c.licon}`}></i>
                </Typography>
            </Grid>
            <Grid item xs={12} style={{paddingTop: "1rem"}}>
                <Typography variant="title" style={{fontWeight: "bold", fontSize: "10px"}}>Copyright &copy; 2020. Talex Studios</Typography>
            </Grid>
        </Grid>
    )
}