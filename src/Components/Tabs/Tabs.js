import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Grid } from '@material-ui/core';
import { CreateClassList, FONT_SECONDARY, FONT_MAIN } from 'CommonConst';
import { Link, useRouteMatch, withRouter } from 'react-router-dom'
import 'Components/Tabs/Tabs.css'
import { ImageList } from 'Components/Navigation/NavImages';

const useTabStyles = makeStyles(t => ({
    tab: {
        margin: "0px 4px",
        textDecoration: "none",
        display: 'inline-block',
        padding: "0.2rem 1rem",
        background: `${t.palette.grey[900]}6f`,
        color: t.palette.text.secondary,
        fontSize: "14px",
        fontFamily: FONT_MAIN,
        fontWeight: "100",
        textTransform: "uppercase",
        transition: "all 0.2s",
        borderRadius: "40px",
        border: `1.2px solid ${t.palette.grey[50]}1f`,
        [t.breakpoints.down('sm')]: {
            padding: "1rem 10px",
            fontSize: "16px"
        }
    },
    current: {
        color: t.palette.grey[800],
        background: t.palette.primary.main,
        fontWeight: "bold"
    }
}))

const Tab = withRouter(({match, link, text}) => {

    const c = useTabStyles()

    return (
        <Link to={link} replace={true} className={CreateClassList(match.url == link ? [c.tab, c.current] : [c.tab])}>
            {text}
        </Link>
    )
})

const URLS = [
    {link: "/blog", text: 'Blogs', image: ImageList.docImages},
    {link: "/projects", text: 'Projects', image: ImageList.codeImages},
    {link: "/resume", text: 'Domain', image: ImageList.lapImages},
    {link: "/about", text: 'About', image: ImageList.accountImages},
    {link: "/contact", text: 'Contact', image: ImageList.contactImages}
]

const useTabsContainer = makeStyles(t => ({
    container: {
        // position: "sticky",
        top: "0",
        background: `#303030`,
        marginBottom: "1rem",
        zIndex: "2",
        [t.breakpoints.down('md')]: {
            marginBottom: "2rem",
        },
        [t.breakpoints.down('sm')]: {
            marginBottom: "1rem",
        }
    }
}))

export const Tabs = () => {

    const c = useTabsContainer()

    return (
        <div className={CreateClassList([c.container])}>
            {
                URLS.map((item, index) => {
                    return (
                        <Tab key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

const useMobileTabs = makeStyles(t => ({
    container: {
        zIndex: "1000",
        position: "fixed",
        display: "flex",
        justifyContent: "space-evenly",
        bottom: "0px",
        left: "0px",
        width: "100%",
        background: `${t.palette.grey[900]}`,
        textAlign: "center",
        borderTop: `1px solid ${t.palette.grey[300]}3f`
    }   
}))

const tabMobileIcon = makeStyles(t => ({
    linkContainer: {
        display: "block",
        width: "100%",
        padding: "8px",
        position: "relative",
        boxSizing: "borderBox",
        textDecoration: "none",
        textTransform: "uppercase",
        borderRadius: "60px / 100px",
        // border: "1px solid red"
        [t.breakpoints.down('xs')]: {
            borderRadius: "30px / 70px"
        }
    },
    img: {
        width: "1rem",
        height: "1rem",
        objectFit: "contain"
    },
    text: {
        fontWeight: "bold",
        color: t.palette.grey[500],
        fontSize: "0.6rem", 
    },
    selected: {
        background: `${t.palette.primary.main}1f`
    }
}))

const TabMobile = withRouter(({match, link, image, text}) => {

    const c = tabMobileIcon()

    return (
        <>
            <Link to={link} replace={true} className={CreateClassList(match.url == link ? [c.linkContainer, c.selected] : [c.linkContainer])} >
                <img className={c.img} src={image.normal} /><br/>
                <div className={c.text}>{text}</div>
            </Link>
        </>
    )
})

export const TabsMobileBottom = () => {
    const c = useMobileTabs()
    return (
        <div className={c.container}>
            {URLS.map((item, index) => <TabMobile key={index} {...item} />)}
        </div>
    )
}