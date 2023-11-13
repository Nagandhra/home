import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import HouseIcon from "@mui/icons-material/House";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import PestControlIcon from '@mui/icons-material/PestControl';

export const mainListItems = ({ open }) => (
  <>
    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <HouseIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Home" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <EditIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Forms" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
           
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <DesktopMacOutlinedIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="UI Elements" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <CalendarViewMonthOutlinedIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Tables" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <BarChartIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Data Presentation" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <PestControlIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Additional Pages" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <DashboardIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Extras" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0,
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon sx={{ marginBottom: '0', marginRight: '4px' }}>
        <LaptopMacOutlinedIcon sx={{color:"#E7E7E7", marginBottom:'6px'}}/>
      </ListItemIcon>
      <ListItemText 
        primary="Landing Page" 
        sx={{
          color: "#E7E7E7",
          marginBottom: '6px',
          marginLeft: '-24px',
          opacity: open ? 1 : 0, 
        }}
        primaryTypographyProps={{ 
          style: { 
            fontSize: '15px', 
            fontFamily: "Helvetica Neue",
          },
        }}
      />
      <ExpandMoreOutlinedIcon sx={{ color: "#ECF0F1", opacity: open ? 1 : 0,}} />
    </ListItemButton>
  </>
  
);

