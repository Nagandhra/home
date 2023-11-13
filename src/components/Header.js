import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";

const Header = () => {
  const sections = [
    {
      icon: PersonIcon,
      title: "Total Users",
      value: "2500",
      percentage: "4%",
      color: "#73879C",
      upIcon: true,
    },
    {
      icon: AccessTimeIcon,
      title: "Average Time",
      value: "123.50",
      percentage: "3%",
      color: "#73879C",
      upIcon: true,
    },
    {
      icon: PersonIcon,
      title: "Total Males",
      value: "2,500",
      percentage: "34%",
      color: "#1ABB9C",
      upIcon: true,
    },
    {
      icon: PersonIcon,
      title: "Total Females",
      value: "4,567",
      percentage: "12%",
      color: "#73879C",
      upIcon: false,
    },
    {
      icon: PersonIcon,
      title: "Total Collections",
      value: "2,315",
      percentage: "34%",
      color: "#73879C",
      upIcon: true,
    },
    {
      icon: PersonIcon,
      title: "Total Connections",
      value: "7,325",
      percentage: "34%",
      color: "#73879C",
      upIcon: true,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0 2px",
        marginBottom:2,
        display: "flex",
        alignItems: "center",
      }}
    >
      {sections.map((section, index) => (
        <SectionWithDivider
          key={index}
          {...section}
          isLast={index === sections.length - 1}
        />
      ))}
    </Box>
  );
};

const SectionWithDivider = ({
  icon: Icon,
  title,
  value,
  percentage,
  color,
  upIcon,
  isLast,
}) => {
  return (
    <Box
      sx={{
        padding: "0 10px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: isLast ? "none" : "1px solid #6c757d",
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontSize: "15px",
              fontWeight: "500",
              color:'#73879C',
              whiteSpace: "nowrap",
            }}
            component="div"
            color="text.disabled"
            
          >
            <Icon sx={{ fontSize: "10px", marginRight: "2px", top: "2px" }} color="#585858" />
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue,sans-serif",
              fontSize: 28,
              fontWeight: "bold",
              color: value === "2,500" ? "#20c997" : color,
              whiteSpace: "nowrap",
            }}
            component="div"
          >
            {value}
          </Typography>
        </Box>
      </Box>
      <Box display="flex">
        <Typography
          sx={{
            fontFamily: "Helvetica Neue",
            fontSize: 11,
            paddingRight: 1,
            color: percentage === "12%" ? "#dc3545" : "#28a745",
            whiteSpace: "nowrap",
          }}
          variant="h6"
          gutterBottom
          component="div"
        >
          {upIcon ? (
            <ArrowDropUpIcon fontSize="20" sx={{ color: "#28a745" }} />
          ) : (
            <ArrowDropDownIcon fontSize="20" sx={{ color: "#dc3545" }} />
          )}
          {percentage}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          color="text.disabled"
          
          sx={{
            fontFamily: "Helvetica Neue, sans-serif",
            fontSize: 11,
            fontWeight: "500",
            color:'#73879C',
            whiteSpace: "nowrap",
          }}
        >
          From last Week
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
