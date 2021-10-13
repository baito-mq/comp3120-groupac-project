import React from 'react'
import SinglePost from './SinglePost'




const Posts = ({posts}) => {
        return (
                <>
                        {posts.map((post) => (
                                <SinglePost key={post.id} post={post}/>
                                ))}

                </>
        )
}

export default Posts
