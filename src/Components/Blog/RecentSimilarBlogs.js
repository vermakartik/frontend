import React from 'react'
import { PostsContainer } from './ArticlesContainer'
import { BlogLoader } from 'Components/Loader/BlogLoader'
import { BlogLink } from './BlogLink'
import { Typography, makeStyles, Grid } from '@material-ui/core'

const MatchTags = (truth, match) => {
    const t1 = truth.split(", ").map(i => i.trim(" ").toLowerCase())
    const t2 = match.split(", ").map(i => i.trim(" ").toLowerCase()) 

    let matchCount = 0

    t1.forEach((item, index) => {
        matchCount += t2.includes(item) ? 1 : 0
    })

    return (matchCount / t1.length)
}

const useFilterStyles = makeStyles(t => ({
    title: {
        fontWeight: 'bold',
        color: `${t.palette.text.secondary}`,
        paddingBottom: "1rem"
    },
    container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "1rem",
        borderTop: `1px solid ${t.palette.grey[600]}2f`
    },
    noSimilarPosts: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
        color: `${t.palette.grey[800]}5f`,
        display: "block",
        width: "100%"
    }
}))

const FilteredPosts = ({truth, data}) => {

    const c = useFilterStyles()

    let items = []
    // console.log(data)
    data.map((item, index) => {

        if(item.title == truth.title) {
            items.push({id: index, c: 0})
        } else {
            const i = MatchTags(truth.type, item.type)
            // console.log(i)
            items.push({id: index, c: i})
        }
    })

    items.sort((a, b) => a.c > b.c ? -1 : 1)
    const cItems = items.filter(i => i.c > 0.4)

    let ToRender = null

    if(cItems.length > 0) {
        ToRender = cItems.slice(0, 6).map((item, index) => {
            // console.log(item)
            return (
                <Grid item xs={12} md={4}>
                    <BlogLink config={data[item.id]} match='/blog' />
                </Grid>
            )
        })
    } else {
        ToRender = data.slice(0, 6).filter(item => item.title != truth.title).map((item, index) => {
            // console.log(item)
            return (
                <Grid item xs={12} md={4}>
                    <BlogLink config={item} match='/blog' />
                </Grid>
            )
        })
    }


    return (
        <Grid container className={c.container}>
            <Grid item xs={12}>
                <Typography variant="h5" className={c.title}>More Posts</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                        {ToRender}
                </Grid>
            </Grid>
        </Grid>
    )

}

export const SimilarBlogs = ({truth}) => {

    const {data, loading, error} = React.useContext(PostsContainer.Context)

    let ToRender = null
    if(loading == true) {
        ToRender = <BlogLoader />
    } else if(data != null) {
        // console.log(data)
        ToRender = <FilteredPosts truth={truth} data={data.hits.filter(i => i.isPublished == true)} />
    } else {
        ToRender = <div>Error</div>
    }

    return (
        <>
            {ToRender}
        </>
    )

}