import { TPost } from "@/types";
import { delay } from "@/utils/delay";

export const getAllPosts = async (type?: string , wait = false) => {
  let fetchOptions = {};
  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  }else if(type === "isr"){
    fetchOptions = {
        next : {
            tags : ["posts"],
        }

    }
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/posts`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error("Faild To Fetch DAta");
  }

  if(wait){
    delay(10000);
  }
  return res.json();
};

export const getPost = async (id : string, wait = false) => {

  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`,
     
    );
    if (!res.ok) {
      throw new Error("Faild To Fetch DAta");
    }
  
    if(wait){
      delay(10000);
    }
    return res.json();
  };

export const createPost =  async (data : TPost) => {
    const res =await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data),
        cache : "no-store"
    });
    return res.json();
}
