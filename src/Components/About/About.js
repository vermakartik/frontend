import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Title } from 'Components/Title'
import { sText, CreateClassList } from 'CommonConst'

const useInfoStyles = makeStyles(t => ({
    container: {

    }
}))

const InfoContainer = ({info}) => {

    return (
        <div>
            <div></div>
        </div>
    )
}

const useAboutStyles = makeStyles(t => ({
    desc: {
        color: t.palette.text.secondary
    }
}))

export const About = () => {

    const c = useAboutStyles()

    return (
        <>
            <Title title="About Us"/>
            <div className={CreateClassList([sText().container])}>
                    <Typography variant='body1' className={CreateClassList([c.desc])}>
                        Talex Studios is aimed at developing next generation most innovative solutions. It is founded in December 2019. 
                    </Typography>
            </div>
        </>
    )
}