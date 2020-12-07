import React, { useEffect } from "react"

import ButtonPost from "./ButtonPost"
import ListParticipant from "./ListParticipant"
import badges from "../../assets/badge/badge"
import Moment from "react-moment"
import "moment-timezone"
import "moment/locale/fr"
export default function Post({ postDefaultData, events, eventsValidate }) {
  useEffect(() => {
    console.log(eventsValidate)
  }, [postDefaultData.length, events])

  const URL = "http://localhost:3006/"

  return (
    <>
      <ul className="postList-ul">
        {" "}
        {postDefaultData.map((post, i) => (
          <li className="postList-li font-description" key={post.id}>
            <div className="postList-li-top">
              <div className="postList-li-top-content">
                <div className="postList-li-top-head">
                  <h2 className="font-name">{post.postName}</h2>
                  <h3>
                    <span className="red">#</span>
                    {post.category.categoryName}
                  </h3>
                </div>
                <h3 className="postList-li-top-description">
                  {post.postDescription}
                </h3>
                <h3 className="postList-li-top-where">{post.Parc.parcName}</h3>
                <h1 className="postList-li-top-when">
                  <Moment format="D MMM YYYY" withTitle>
                    {post.postDate}
                  </Moment>
                </h1>
              </div>
              <div className="postList-li-top-image">
                {post.User.userImage ? (
                  <img src={URL + post.User.userImage} alt="user avatar" />
                ) : null}
              </div>
              <div className="postList-li-top-user">
                <div className="postList-li-top-user-container">
                  <h3 className="font-name">{post.User.firstName}</h3>
                  <div className="postList-li-top-badge-container">
                    <img
                      alt="user badge"
                      className="postList-li-top-badge"
                      src={badges[`${post.User.userBadge}`].img}
                    />
                    <p className="font-badge postList-li-top-badge-descritpion">
                      "{badges[`${post.User.userBadge}`].name}"
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="postList-li-bottom">
              {eventsValidate ? (
                <ButtonPost post={post} eventValidate={eventsValidate[i]} />
              ) : null}

              {eventsValidate ? (
                <ListParticipant post={post} users={eventsValidate[i]} />
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
