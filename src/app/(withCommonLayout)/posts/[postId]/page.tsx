import React from 'react'

type TProps = {
    params : {
        postId : string
    }
}

const PostDetailsPage = ({params} : TProps) => {
  return (
    <div>
      <h1>Posts Details</h1>
    </div>
  )
}

export default PostDetailsPage
