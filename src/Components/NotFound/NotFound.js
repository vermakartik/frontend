import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FONT_SECONDARY, FONT_MAIN } from 'CommonConst'
import { Title } from 'Components/Title'

const uC = makeStyles(t => ({
    nFound: {
        textAlign: "center",
        fontFamily: FONT_SECONDARY,
        fontSize: "2rem",
        color: `${t.palette.grey[400]}`
    },
    emoji: {
        marginTop: "1rem",
        fontFamily: "Arial"
    }
}))

export const NotFound = () => {

    const c = uC()

    return (
        <>
            <Title title="Talex Studios" />
            <div className={c.nFound}>
                404 <br />
                Not Found <br />
                <div className={c.emoji}>
                    ¯\_(ツ)_/¯
                </div>
            </div>
        </>
    )
} 