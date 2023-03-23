import React from "react";
import userData from "../assets/user.json";
import { ImLocation, ImTwitter, ImLink } from "react-icons/im";
import { IoMdBusiness } from "react-icons/io";
import moment from "moment";

const UserCard = ({ user }) => {
  user = user && user.login ? user : userData;
  return (
    <section className="mt-8 w-full max-w-6xl px-12 py-10 rounded-3xl shadow-lg flex bg-white dark:bg-[#1E2A47] text-gray-500 dark:text-white">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="rounded-full w-[117px] h-[117px] hidden md:block md:mr-16"
      />
      <div className="w-full">
        {/* Top Area */}
        <div className="flex items-center">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="rounded-full w-[75px] h-[75px] md:hidden"
          />
          <div className="grid ml-8 md:grid-cols-2 md:w-full md:ml-0">
            <strong className="text-3xl">{user.name}</strong>
            <span className="text-[#0079ff] text-lg font-bold md:mt-2">
              {" "}
              <a href={`https://github.com/${user.login}`}>@{user.login}</a>
            </span>
            <span className="mt-4 text-xl md:col-span-2 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 md:justify-self-end">
              Joined {moment(user.created_at).format("MMM Do yyyy")}
            </span>
          </div>
        </div>
        <p className="text-2xl mt-14 mr-0 ml-0 mb-9 leading-[192%] font-bold">
          {user.bio ? user.bio : "This user has no bio"}
        </p>

        {/* Stats Area */}
        <div className="flex items-center justify-between w-full bg-[#F6F8FF] dark:bg-[#141d2f] list-none rounded-xl p-8 font-sans">
          <li className="flex flex-col items-start justify-center md:items-center">
            <span className="text-[1.3rem] text-center leading-7 ">Repos</span>
            <strong className="font-bold text-3xl">{user.public_repos}</strong>
          </li>
          <li className="flex flex-col items-start justify-center md:items-center">
            {" "}
            <span className="text-[1.3rem] text-center leading-7">
              Followers
            </span>
            <strong className="font-bold text-3xl">{user.followers}</strong>
          </li>
          <li className="flex flex-col items-start justify-center md:items-center">
            {" "}
            <span className="text-[1.3rem] text-center leading-7">
              Following
            </span>
            <strong className="font-bold text-3xl">{user.following}</strong>
          </li>
        </div>

        {/* Links Area */}
        <div className="grid mt-12 space-y-8 md:grid-cols-2 md:gap-16 md:space-y-0">
          <li className="flex items-center gap-4">
            <ImLocation size={20} />
            <span className="text-2xl font-bold">{user.location}</span>
          </li>
          <li className="flex items-center gap-4">
            <ImTwitter size={20} />
            <span className="text-2xl font-bold">
              {" "}
              {user.twitter_username ? user.twitter_username : "Not Available"}
            </span>
          </li>
          <li className="flex items-center gap-4">
            <ImLink size={20} />
            <span className="text-2xl font-bold">
              {" "}
              {user.blog ? user.blog : "Not Available"}
            </span>
          </li>
          <li className="flex items-center gap-4">
            <IoMdBusiness size={20} />
            <span className="text-2xl font-bold">
              {user.company ? user.company : "Not Available"}
            </span>
          </li>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
