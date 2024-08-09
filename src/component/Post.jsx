import React from "react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { GlobalDataContext } from "../store/context";

function Post({ story }) {
  const { removeStory } = useContext(GlobalDataContext);
  const [like, setLike] = useState(0);
  const [love, setLove] = useState(0);

  return (
    <div className="card storyCard">
      <div className="card-body storyCard-body">
        <h5 className="card-title">{story.title}</h5>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => removeStory(story.id)}
        >
          <MdDeleteForever />
        </span>
        <p className="card-text">{story.body}</p>
        {story.tags.map((tag, i) => (
          <span className="badge bg-info text-dark post-tag" key={`i${i}`}>
            #{tag}
          </span>
        ))}

        <div className="btn-container">
          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={() => setLike(like + 1)}
          >
            Like <AiFillLike />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {like}
            </span>
          </button>

          <button
            type="button"
            className="btn btn-danger position-relative"
            onClick={() => setLove(love + 1)}
          >
            Love <FcLikePlaceholder />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {love}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
