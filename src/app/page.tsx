"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { CommentProps } from "@/libs/types";
import { nanoid } from "nanoid";
export default function Home() {

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner/>

        {/* Comment Example */}
        {comments.map((comment:CommentProps) => (
          <Comment
            key={nanoid()}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))
        }

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
        
      </div>
    </div>
  );
}
