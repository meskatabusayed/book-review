import { delay } from "@/utils/delay";

export const getCommentById = async (postId : string, wait = false) => {

  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${postId}`,
     
    );
    if (!res.ok) {
      throw new Error("Faild To Fetch DAta");
    }
  
    if(wait){
      delay(10000);
    }
    return res.json();
  };