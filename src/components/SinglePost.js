import React from 'react'

const SinglePost = ({post}) => {
        return (
                <div className='post'>
                        <img src={post.avatar} />
                        <h3> {post.username}</h3>
                        <p>{post.content} </p>
                        
                </div>
        )
}

export default SinglePost
