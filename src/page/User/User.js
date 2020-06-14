import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar";
import { getUserApi } from "../../api/user";

import "./User.scss";

function User(props) {
  // console.log(props);
  // Getting the ID of the user
  const { match } = props;
  const [user, setUser] = useState(null);
  // Getting the params in match object wit destructirung
  const { params } = match;
  // console.log(match.params.id);
  //Siempre que los params cambian, se vuelve a ejecuar
  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        console.log(response);
        setUser(response);
        if (!response) toast.error("User doesn't exist");
      })
      .catch(() => {
        toast.error("User doesn't exist");
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>{user ? `${user.name} ${user.lastName}` : "User doesn't exist"}</h2>
      </div>
      <BannerAvatar user={user} />
      <div>Users Info</div>
      <div className="user__posts">Post list</div>
    </BasicLayout>
  );
}

// Wrap the component
export default withRouter(User);
