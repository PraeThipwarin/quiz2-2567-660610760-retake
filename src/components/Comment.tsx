"use client";

import { CommentProps, ReplyProps } from "@/libs/types";
import Reply from "./Reply";
import { nanoid } from "nanoid";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}:CommentProps) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
          </div>
        </div>
      {/* You can use map-loop to render Reply component here */}
      {replies.map((reply:ReplyProps) => (
          <Reply
            key={nanoid()}
            userImagePath={reply.userImagePath}
            username={reply.username}
            replyText={reply.replyText}
            likeNum={reply.likeNum}
          />
        ))}
    </div>
  );
}
