import React from "react";
import moment from "moment";
// import localization from "moment/locale/es-us";
import { Location, BirthDate, Link } from "../../../utils/Icons";

import "./UserInfo.scss";

export default function UserInfo(props) {
  const { user } = props;
  console.log(user);

  return (
    <div className="user-info">
      <h2 className="name">
        {user?.name} {user?.lastName}
      </h2>
      <p className="email">{user?.email}</p>
      {user?.bio && <div className="description">{user.bio}</div>}
      <div className="more-info">
        {user?.location && (
          <p>
            <Location />
            {user.location}
          </p>
        )}
        {user?.webSite && (
          <a
            href={user.webSite}
            alt={user.webSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link /> {user.webSite}
          </a>
        )}
        {user?.birthDate && (
          <p>
            <BirthDate />
            {/* {moment(user.brithDate).locale("es-us", localization).format("LL")} */}
            {moment(user.birthDate).format("LL")}
          </p>
        )}
      </div>
    </div>
  );
}
