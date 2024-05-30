import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const profileData = [
  {
    avatar: {
      photoName: "./images/dib_sam_hirakud.jpg",
      altText: "dibyajyoti.jpg",
    },
    intro: {
      profileName: "Dibyajyoti Dash",
      introduction:
        "Full-stack developer at Infosys. When not coding or working, I like to play cricket.",
    },
    skills: [
      { skillName: "Java", emoji: "🍵", color: "blue" },
      { skillName: "SpringBoot", emoji: "⭐", color: "yellow" },
      { skillName: "React", emoji: "💫", color: "red" },
      { skillName: "HTML + CSS", emoji: "💪", color: "green" },
      { skillName: "Git and GitHub", emoji: "⚡", color: "orange" },
    ],
  },
  {
    avatar: {
      photoName: "./images/aquib.jpg",
      altText: "aquib.jpg",
    },
    intro: {
      profileName: "Md. Aquib Ansari",
      introduction:
        "Lawyer by profession. When not practising law, I like to play cricket.",
    },
    skills: [
      { skillName: "Criminal Law", emoji: "🍵", color: "pink" },
      { skillName: "Property Law", emoji: "⭐", color: "brown" },
      { skillName: "Legal Advice", emoji: "💫", color: "violet" },
      { skillName: "Judicial Matters", emoji: "💪", color: "indigo" },
    ],
  },
  {
    avatar: {
      photoName: "./images/suraj.jpg",
      altText: "suraj.jpg",
    },
    intro: {
      profileName: "Suraj Prasad Dash",
      introduction:
        "QA Automation Engineer. When not testing, I like to play cricket.",
    },
    skills: [
      { skillName: "Automation Testing", emoji: "🍵", color: "pink" },
      { skillName: "Java/Selenium", emoji: "⭐", color: "brown" },
      { skillName: "Scrum", emoji: "💫", color: "violet" },
      { skillName: "Prod Release", emoji: "💪", color: "indigo" },
    ],
  },
  {
    avatar: {
      photoName: "./images/suraj.jpg",
      altText: "suraj.jpg",
    },
    intro: {
      profileName: "Suraj Prasad Dash",
      introduction:
        "QA Automation Engineer. When not testing, I like to play cricket.",
    },
    skills: [
      { skillName: "Automation Testing", emoji: "🍵", color: "pink" },
      { skillName: "Java/Selenium", emoji: "⭐", color: "brown" },
      { skillName: "Scrum", emoji: "💫", color: "violet" },
      { skillName: "Prod Release", emoji: "💪", color: "indigo" },
    ],
  },
];

function App() {
  return (
    <ul className="cards">
      {profileData.map((profile) => (
        <li className="card" key={profile.intro.profileName}>
          <Avatar avatarObj={profile.avatar} />
          <div className="data">
            <Intro introObj={profile.intro} />
            <SkillList skillListObj={profile.skills} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Avatar(props) {
  return (
    <img
      src={props.avatarObj.photoName}
      className="avatar"
      alt={props.avatarObj.altText}
    />
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.introObj.profileName}</h1>
      <p>{props.introObj.introduction}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.skillListObj.map((skill) => (
        <Skill skillObj={skill} key={skill.skillName} />
      ))}
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.skillObj.color }}>
      <span>{props.skillObj.skillName}</span>
      <span>{props.skillObj.emoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
