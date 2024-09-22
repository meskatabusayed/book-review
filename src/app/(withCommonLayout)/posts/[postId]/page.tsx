import PostDetails from '@/components/ui/PostDetails'
import { getPost } from '@/services/PostServices'
import React from 'react'

type TProps = {
    params : {
        postId : string
    }
}

const PostDetailsPage = async({params} : TProps) => {
    const post =await getPost(params.postId);
    
  return (
    <div>
      <PostDetails post={post}/>
    </div>
  )
}

export default PostDetailsPage
