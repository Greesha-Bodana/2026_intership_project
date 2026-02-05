import React from 'react'
import { Link } from 'react-router-dom'
export const Team = () => {
  var teams = [
    {teamId: 1, teamName: "Chennai Super Kings" },
    {teamId: 2, teamName: "Delhi Capitals" },
    {teamId: 3, teamName: "Gujarat Titians" },
    {teamId: 4, teamName: "Kolkata Knight Riders" },
    {teamId: 5, teamName: "Lucknow Super Giants" },
    {teamId: 6, teamName: "Mumbai Indians" },
    {teamId: 7, teamName: "Punjab Kings" },
    {teamId: 8, teamName: "Rajasthan Royals" },
    {teamId: 9, teamName: "Royal Challengers Bengaluru" },
    {teamId: 10, teamName: "Sunrisers Hyderabad" },

  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Teams</h1>
          {
              teams.map((team) => {
                return <li>
                  <Link to={`/watch/${team.teamName}`}>{team.teamName}</Link>
                </li>
              })
            }
          </div>
        );
      };