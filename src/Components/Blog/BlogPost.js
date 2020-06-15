import React, { useEffect } from 'react'
import { Grid, makeStyles, colors, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetchBlogs'
import { ConstructBlogPath, CreateClassList, sText, FONT_SECONDARY, ToDateFormat } from 'CommonConst'
import ReactMarkdown from 'react-markdown'
import './Blog.css'
import CodeBlock from './CodeBlock'
import { PostLoader } from 'Components/Loader/PostLoader'
import { SimilarBlogs } from './RecentSimilarBlogs'
import Readline from 'readline-js'

const useText = makeStyles((t) => ({

    text: {
        color: t.palette.grey[400],
        padding: "8px"
    },
    title: {
        fontFamily: FONT_SECONDARY,
        color: t.palette.primary.light,
        [t.breakpoints.down('md')]: {
            fontSize: "28px"
        }
    },
    name: {
        color: t.palette.grey[500],
        fontSize: "0.8rem",
        display: "inline-block",
        fontWeight: "bold"
    },
    date: {
        color: t.palette.grey[500],
        fontSize: "0.8rem",
        display: "inline-block",
        fontWeight: "bold"
    },
    titleContainer: {
        background: `${t.palette.grey[900]}6f`,
        borderRadius: "2px",
        padding: "2rem",
        [t.breakpoints.down('md')]: {
            padding: "1rem",
        }
    },
    seperator: {
        color: `${t.palette.grey[600]}`
    }

}))

const RenderedBlog = ({config}) => {
    
    console.log(config)
    const c = useText()


    useEffect(() => {
        let readline = new Readline({
            height: '2px',
            color: "#5e92f3",
            target: "blog-target"
        })
        return () => {
            readline.destroy();
        }
    })

    return (
        <Grid container>
            <Grid item xs={12} className={c.titleContainer}>
                <Typography variant="h3" className={c.title}>{config.title}</Typography>
                <Typography variant="subtitle1" className={c.name}>{config.author} </Typography>
                <strong className={c.seperator}> &bull; </strong>
                <Typography variant="subtitle2" className={c.date}>{ToDateFormat(parseInt(config.publishDate))}</Typography>
            </Grid>
            <Grid item xs={12}>
                <div id="blog-target" className={CreateClassList(['article-source', c.text])}>
                    <ReactMarkdown
                        source={config.text}
                        renderers={{
                            code: CodeBlock
                        }}
                    />
                </div>
            </Grid>
        </Grid>
    )

}

export const BlogPost = () => {

    const {id} = useParams()
    const {data, loading, error} = useFetch(ConstructBlogPath(['posts', id]))

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    let ToRender = null
    if(loading) {
        ToRender = <PostLoader />
    } else if(data != null) {
        ToRender = (
            <>
                <RenderedBlog config={data.data}/>
                <SimilarBlogs truth={data.data}/>
            </>
        )
    } else if(error != null) {
        ToRender = <div>Error</div>
    }

    return (
        <div className={CreateClassList([sText().container])}>
            {ToRender}
        </div>
    )
} 