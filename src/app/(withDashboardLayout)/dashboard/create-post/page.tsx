import { createPost, getAllPosts } from '@/services/PostServices'
import { TPost } from '@/types'
import { revalidateTag } from 'next/cache'

import React from 'react'

const CreatePostPage = async() => {

    

    const handleCreatePost = async (fromData : FormData) => {
        "use server"
        const posts = await getAllPosts();
        const data = {
            id : JSON.stringify(posts.length +1),
            name : fromData.get("name"),
            description : fromData.get("description"),
            category : fromData.get("category"),
            image : fromData.get("image")
        }
        const res = await createPost(data as TPost);
        if(res){
            revalidateTag("posts");
            console.log("Post created successfully")
        }
    }
  return (
    <div className=" shadow-xl bg-base-100 w-[80%] my-12">
    <h1 className="text-center text-4xl">
      Add Your <span className="text-fuchsia-900">Book Review</span>
    </h1>
    <form action={handleCreatePost} className="p-5">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Book Name</span>
        </label>
        <input
          name='name'
          type="text"
          placeholder="Book Name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
         name='description'
          placeholder="Description"
          className="textarea textarea-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input
         name='category'
          type="text"
          placeholder="Fantasy, Fiction, etc."
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
        name='image'
          type="url"
          placeholder="Image URL"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-accent btn-outline">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreatePostPage
