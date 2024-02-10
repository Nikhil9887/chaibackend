// console.log("Chai aur Code");

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Nikhil9887",
  id: 96690642,
  node_id: "U_kgDOBcNh0g",
  avatar_url: "https://avatars.githubusercontent.com/u/96690642?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Nikhil9887",
  html_url: "https://github.com/Nikhil9887",
  followers_url: "https://api.github.com/users/Nikhil9887/followers",
  following_url:
    "https://api.github.com/users/Nikhil9887/following{/other_user}",
  gists_url: "https://api.github.com/users/Nikhil9887/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Nikhil9887/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Nikhil9887/subscriptions",
  organizations_url: "https://api.github.com/users/Nikhil9887/orgs",
  repos_url: "https://api.github.com/users/Nikhil9887/repos",
  events_url: "https://api.github.com/users/Nikhil9887/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Nikhil9887/received_events",
  type: "User",
  site_admin: false,
  name: "Nikhil Malusare",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 24,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-12-26T14:21:08Z",
  updated_at: "2023-11-20T07:39:02Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Nikhil Malusare Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at Chai aur Code");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
