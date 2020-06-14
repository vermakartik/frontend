import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Grid } from '@material-ui/core';
import { CreateClassList, FONT_SECONDARY } from 'CommonConst';
import { Link, useRouteMatch, withRouter } from 'react-router-dom'
import 'Components/Tabs/Tabs.css'


const useTabStyles = makeStyles(t => ({
    tab: {
        textDecoration: "none",
        display: 'inline-block',
        padding: "1rem",
        color: t.palette.grey[600],
        fontSize: "16px",
        fontFamily: FONT_SECONDARY,
        transition: "all 0.2s",
        "&:hover": {
            color: `${t.palette.primary.light}`
        },
        [t.breakpoints.down('sm')]: {
            padding: "1rem 10px",
            fontSize: "16px"
        }
    },
    current: {
        color: t.palette.primary.light,
    }
}))

const Tab = withRouter(({match, link, text}) => {

    const c = useTabStyles()

    return (
        <Link to={link} replace={true} className={CreateClassList(match.url == link ? [c.tab, 'tab-selected', c.current] : [c.tab])}>
            {text}
        </Link>
    )
})

const URLS = [
    {link: "/blog", text: 'Blogs'},
    {link: "/projects", text: 'Projects'},
    {link: "/resume", text: 'Resume'},
    {link: "/about", text: 'About'},
    {link: "/contact", text: 'Contact'}
]

const useTabsContainer = makeStyles(t => ({
    container: {
        position: "sticky",
        top: "0",
        background: `${t.palette.grey[800]}`,
        marginBottom: "1rem",
        zIndex: "2",
        [t.breakpoints.down('md')]: {
            marginBottom: "2rem",
        },
        [t.breakpoints.down('sm')]: {
            marginBottom: "1rem",
        },
        borderBottom: `1px solid ${t.palette.grey[700]}`
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