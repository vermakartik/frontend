import React from 'react'
import { BlogLink } from './BlogLink'
import { Grid } from '@material-ui/core'

export const BlogListFiletered = ({blogData}) => {
    return (
            <Grid container>
                {
                    blogData.map((item, index) => {
                        return (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <BlogLink config={item} />
                        </Grid>
                        )
                    })
                }
            </Grid>
    )
} 