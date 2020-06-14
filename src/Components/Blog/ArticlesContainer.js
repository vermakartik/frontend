import React from 'react'
import createContainer from 'constate'
import { ConstructBlogPath } from 'CommonConst'
import { useFetch } from './useFetchBlogs'


const POST_PATH = ConstructBlogPath(['posts'])

const useArticles = () => {

    const {data, loading, error} = useFetch(POST_PATH)

    return {
        data,
        loading, 
        error
    }

}

export const PostsContainer = createContainer(useArticles) 