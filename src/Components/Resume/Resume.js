import React, { useEffect } from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { results } from './ResumeImages'
import { CreateClassList, sText, FONT_SECONDARY } from 'CommonConst'
import { SkillInfo } from './Info'
import { Title } from 'Components/Title'


const useImageStyles = makeStyles(t => ({
    image: {
        
        width: "48px",
        height: "48px",
        objectFit: "contain",
        position: 'relative',
        left: "50%",
        transform: "translateX(-50%)",
        [t.breakpoints.down('lg')]: {
            width: "48px",
            height: "48px",
        },
        [t.breakpoints.down('md')]: {
            width: "36px",
            height: "36px",
        }
    },
    oContainer: {
        width: "156px",
        height: "156px",
        borderRadius: "80px",
        border: `1.2px solid ${t.palette.grey[500]}1f`,
        display: "inline-block",
        margin: "1rem",
        background: `${t.palette.grey[300]}1f`,
        [t.breakpoints.down('lg')]: {
            width: "156px",
            height: "156px",
        },
        [t.breakpoints.down('md')]: {
            width: "128px",
            height: "128px",
        },
        "&:hover": {
            background: `${t.palette.grey[300]}2f`,
        }
    },
    iContainer: {
        display: "inline-block",
        position: "relative",
        top: "50%",
        left: "50%",
        transform:"translate(-50%, -50%)",
    },
    name: {
        textAlign: "center",
        fontSize: "10px",
        color: `${t.palette.grey[400]}`,
    }
}))

const SkillImage = ({config}) => {
    const c = useImageStyles()
    return (
        <div className={c.oContainer}>
            <div className={c.iContainer}>
                <img src={config.imageIcon} className={c.image}/>
                <Typography className={c.name} variant="subtitle2">{config.name}</Typography>
            </div>
        </div>
    )
}

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
    }
}))


export const Resume = () => {

    const c = useResumeStyles()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>           
            <Title title="Our Work Domain"/>
            <div className={CreateClassList([sText().container, c.container])}>
            {
                SkillInfo.map((item, index) => <SkillImage key={index} config={item}/>)
            }
            </div>
        </>
    )
} 