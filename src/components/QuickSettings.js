import React from "react";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedometerComponent from "./SpeedometerComponent";

const iconList = [
  CalendarTodayIcon,
  MenuIcon,
  TrendingUpIcon,
  BarChartIcon,
  TrendingUpIcon,
  BarChartIcon,
  TrendingUpIcon,
];

const QuickSettings = () => {
  return (
    <Box>
      <Box
        sx={{padding:"3px 6px 3px 8px" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ marginLeft:"16px" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontSize: "1.50rem",
              fontWeight: "normal",
              color: "#73879C",

            }}
            variant="h6"
            component="div"
          >
            Quick Settings
          </Typography>
        </Box>
        <Box
         sx={{ marginRight: 2 }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <KeyboardArrowUpIcon
            sx={{ fontSize: 25, color: "#73879C", fontWeight: "900", padding: "2px" }}
          />
          <BuildIcon
            sx={{
              fontSize: "20px",
              color: "#D0D0D0",
              transform: "rotate(95deg)",
              padding: "2px"
            }}
          />
          <CloseIcon sx={{ fontSize: "20px", color: "#73879C", padding: "2px" }} />
        </Box>
      </Box>
      <Divider variant="middle" sx={{ width: "90%", bgcolor: "#D0D0D0" }} />

      <Box display="flex" sx={{ paddingLeft: "20px" }}>
        <List sx={{ bgcolor: "background.paper", height: '260px',padding:"21px" }}>
          {[
            "Settings",
            "Subscription",
            "Auto Renewal",
            "Achievements",
            "Auto Renewal",
            "Achievements",
            "Logout",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "flex", padding:"0px 0px 6px 0px" }}
            >
              <ListItemIcon>
                {React.createElement(iconList[index % iconList.length], {
                  style: { color: "#5A738E", fontSize: "16px" },
                })}
              </ListItemIcon>
              <Box >
                <Typography
                  sx={{
                    color: "#5A738E",
                    fontSize: '14px',
                    fontWeight: '500',
                    fontFamily: "Helvetica Neue",
                   
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            border: "1px solid #1CBD9C",
            marginLeft: '20px',
            padding: '10px',
            height: '160px',  
            marginTop:'35px' ,
            marginRight:'20px'
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: '16px',
              fontWeight: '500',
              color: '#73879C',
              fontFamily: "Helvetica Neue",
            }}
          >
            Profile Completion
          </Typography>
          <SpeedometerComponent />
          <Box
            display="flex"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#73879C', }}>3,200%</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#73879C', }}>100%</Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default QuickSettings;
