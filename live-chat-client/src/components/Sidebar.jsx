import { IconButton } from "@mui/material";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { ConversationsItem } from "./ConversationsItem";
import { useState } from "react";

export const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test #1",
      lastMessasge: "Last Message #1",
      timestamp : "today"
    },
    {
      name: "Test #2",
      lastMessasge: "Last Message #2",
      timestamp : "today"
    },
    {
      name: "Test #3",
      lastMessasge: "Last Message #3",
      timestamp : "today"
    },
    {
      name: "Test #4",
      lastMessasge: "Last Message #4",
      timestamp : "today"
    },
    {
      name: "Test #5",
      lastMessasge: "Last Message #5",
      timestamp : "today"
    }
  ])
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-searchbar">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation, index) => {
          return <ConversationsItem key={index} props= {conversation} />
        } )}
        
      </div>
    </div>
  );
};
