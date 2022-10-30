import React from "react";

const UserInfo = ({ user }) => (
  <div className="user-info">
    <img
      src={user.avatar_url}
      className="rounded-circle"
      width="220"
      height="220"
      alt="User"
    />
    <div className="user">
      <h3>{user.name}</h3>
      <p>{user.login}</p>
      <div className="infos">
        {user.location && (
          <div className="info">
            <i className="fa fa-map-marker pr-1" />
            <span>  {user.location}</span>
          </div>
        )}
        {user.blog && (
          <div className="info">
            <i className="fa fa-globe pr-1" />
            <span>  {user.blog} </span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <i className="fa fa-envelope pr-1" />
            <span>  {user.email} </span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <i className="fa fa-twitter pr-1" />
            <span>  {user.twitter_username} </span>
            <br />
          </div>
        )}

        {user.followers && (
          <div className="info">
            <i className="fa fa-group" />
            <span>  {user.followers} Followers </span>
          </div>
        )}
        {user.following && (
          <div className="info">
            <i className="fa fa-heart pr-1" />
            <span>  {user.following} Following </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(UserInfo);