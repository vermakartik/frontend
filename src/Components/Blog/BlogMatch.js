import React from 'react'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import { BlogHome } from './BlogHome'
import { BlogPost } from './BlogPost'
import { PostsContainer } from './ArticlesContainer'
import { Typography, makeStyles } from '@material-ui/core'
import { FONT_SECONDARY, CreateClassList, sText } from 'CommonConst'
import { Title } from 'Components/Title'

export const BlogMatch = withRouter(({match}) => {

    const routes = (
        <Switch>
            <Route exact path={match.url}>
                <BlogHome />
            </Route>
            <Route path={`${match.url}/:id`}>
                <BlogPost />
            </Route>
        </Switch>
    ) 

    return (
        <PostsContainer.Provider>
            <Title title="Talex Blogs" link="/blog" />
            {routes}
        </PostsContainer.Provider>
    )
})