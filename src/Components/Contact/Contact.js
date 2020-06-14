import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { Title } from 'Components/Title'
import { CreateClassList, sText } from 'CommonConst'

const useContactStyles = makeStyles((t) => ({
    container: {
        padding: "1rem",
    },
    contactEmail: {
        textAlign: "center",
        fontSize: "20px",
        color: `${t.palette.primary.light}`,
        fontWeight: "bold",
        marginBottom: "1rem"
    },
    contactDesc: {
        color: `${t.palette.text.secondary}`
    },
    cDescCenter: {
        color: `${t.palette.grey[400]}`,
        textAlign: "center"
    }
}))

export const Contact = () => {

    const c = useContactStyles()

    return (
        <>
        <Title title="Contact Us" />
        <div className={CreateClassList([sText().container])}>
            <Typography variant="subtitle1" className={c.contactDesc}>
                Our works include:
                <ul>
                    <li>Freelancing for Web, Android</li>
                    <li>3D Modelling</li>
                    <li>Graphics Desigining, Logo Designing</li>
                    <li>Game Development</li>
                    <li>Video Editing</li>
                </ul>
            </Typography>
            <Typography variant="subtitle1" className={c.cDescCenter}>
                You can contact us for any of the above mentioned on 
            </Typography>
            <Typography className={c.contactEmail} variant="subtitle2" >
                kartar.ytb@gmail.com
            </Typography>
        </div>
        </>
    )
}