import React, { useEffect } from 'react'
import { useFetch } from './useFetchBlogs'
import { ConstructBlogPath, sText } from 'CommonConst'
import { Loading } from 'Components/Loader/Loading'
import { Grid, makeStyles } from '@material-ui/core'
import { BlogLink } from './BlogLink'
import { PostsContainer } from './ArticlesContainer'
import { BlogLoader } from 'Components/Loader/BlogLoader'

const BlogPosts = ({blogDetails}) => {

    return (
            <Grid container>
                {
                    blogDetails.filter((item) => item.isPublished == true).map((item, index) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <BlogLink config={item}/>
                        </Grid>
                    ))
                }
            </Grid>
    )

}

export const BlogHome = () => {

    const { loading, data, error } = React.useContext(PostsContainer.Context)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let ToRender = null
    if(loading == true) {
        ToRender = (<BlogLoader />)
    } else if(data != null) {
        console.log(data)
        ToRender = 
        (
            <>
                <BlogPosts blogDetails={data.hits} />
            </>
        )
    } else {
        ToRender = <div>Error</div>
    }

    return (
        <div className={sText().container}>
            {ToRender}
        </div>
    )
} 