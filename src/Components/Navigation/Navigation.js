import React, { useState } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {CreateClassList, FONT_SECONDARY, FONT_MAIN} from '../../CommonConst'
import {
    ImageList
} from './NavImages'
const useNavLinkCustomStyle = makeStyles((theme) => ({
    back: {
        width: "156px",
        height: "156px",
        textDecoration: "none",
        fontFamily: FONT_MAIN,
        fontSize: "0.8rem",
        color: theme.palette.text.secondary,
        borderRadius: '124px',
        display: "block",
        textAlign: "center",
        margin: "1rem",
        fontWeight: "700",
        background: `${theme.palette.primary.main}87`,
        [theme.breakpoints.down('md')]: {
            margin: "4px",
            width: "156px",
            height: "156px",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "4px",
            width: "156x",
            height: "156px",
        }
    },
    image: {
        display: 'block',
        margin: "auto",
        width: "48px",
        height: "48px",
        marginBottom: "1rem",
        objectFit: "contain"
    },
    textSelected: {
        color: '#d4aa00ff',
        textTransform: "Uppercase",
    },
    textNormal: {
        color: theme.palette.grey[400],
        textTransform: "Uppercase",
    },
    textInfo: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)" 
    }
    
}))

const NavLinkCustom = ({to, text, images}) => {

    // console.log(images)
    const c = useNavLinkCustomStyle()

    const [isHover, setHover] = useState(0)

    return (
        <Link to={to} className={CreateClassList([c.back])} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
            <div className={c.textInfo}>
                <img src={isHover ? images.sel : images.normal} className={c.image} />
                <Typography variant="title" className={isHover == 0 ? c.textNormal : c.textSelected}>{text}</Typography>
            </div>
        </Link>
    )
} 

const navigationItems = [
    {
        images:  ImageList.docImages,
        to: '/blog',
        text: "Blogs"
    },
    {
        images: ImageList.lapImages,
        to: "/resume",
        text: "Domain"
    },
    {
        images: ImageList.codeImages,
        to: "/projects",
        text: "Projects"
    },
    {
        images: ImageList.accountImages,
        to: '/about',
        text: "About",
    },
    {
        images: ImageList.contactImages,
        to: "/contact",
        text: "Contact Us"
    }
]


const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: FONT_SECONDARY,
        textAlign: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        color: `${theme.palette.primary.light}9f`
    },
    navContainer: {
        margin: "auto",
    }
}))

export const Navigation = () => {

    const c = useStyles()
    // console.log(navigationItems)
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" className={c.title}>Talex Studios</Typography>
            </Grid>
            <Grid item xs={12} style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    paddingBottom: "4rem",
                    paddingTop: "4rem"
                }}>
                {
                    navigationItems.map((i, index) => <NavLinkCustom key={`nav_link_${index}`} to={i.to} text={i.text} images={i.images} />)
                }
            </Grid>
        </Grid>
    )
} 