import React, { useState ,useEffect} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, LinearProgress, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Chart as Chartjs,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import CustomCalendar from "./CustomCalendar";
import { fetchData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

Chartjs.register(
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);


const LineChart = ({ drawerWidth }) => {

  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.data);
  const campaignNames = useSelector((state) => state.campaignNames);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (!chartData || !campaignNames) {
    return <div>Loading...</div>;
  }


 

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const initialProgressValues = [80, 60, 35, 45];


  const yaxisOptions = {
    scales: {
      x: {
        CategoryPercentage: 1,
        barPercentage: 1,
      },
      y: {
        ticks: {
          min: 0,
          max: 150,
          stepSize: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      interaction: {
        mode: "index",
      },
    },
  };

  return (
    <Box >
      <Box
        sx={{
          
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid #E6E9ED",
        }}
      >
        <Box sx={{ display: "flex", }}>
          <Typography
            sx={{
              fontSize: "1.75rem",
              padding: "10px",
              color: "#73879C",
              fontFamily: "Helvetica Neue",
              fontWeight: "normal",
            }}
          >
            Network Activities
          </Typography>
          <Typography
            sx={{
              fontSize: "1.25rem",
              padding: "5px",
              p: 2.2,
              fontWeight: "400",
              color: "#73879C",
              fontFamily: "Helvetica Neue",
              height:10
            }}
          >
            Graph title sub-title
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #ccc",
            cursor: "pointer",
            margin: "09px 11px",
            background: "#fff",
           
          }}
        >
          <Button onClick={toggleCalendar}>
          <CalendarMonthIcon sx={{marginTop:'2px',color: "#BDBDBD"}} />
            <Typography sx={{ color: "#BDBDBD",marginTop:'4px',paddingLeft:'2px' }}>
              October 11, 2023 - November 9, 2023
            </Typography>
          </Button>
        </Box>

      </Box>
      <Grid container sx={{ display: "flex" ,padding:"5px"}}>
      <Grid item md={12} lg={9} sx={{ height: "280px", paddingRight: "20px" }}>
          <Line
            data={chartData}
            options={{
              ...yaxisOptions,
              responsive: true,
              maintainAspectRatio: false,
            }}
            height={350}
          />
        </Grid>

        <Grid  item md={12} lg={3} sx={{ height: "300px",paddingRight: "20px" }}>
          <Box sx={{ borderBottom: "2px solid #E6E9ED", mb:'10px'}}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                padding: "10px",
                fontFamily: "Helvetica Neue",
                color: "#73879C",
              }}
            >
              Top Campaign Performance  
            </Typography>
          </Box>
          {campaignNames.map((name, index) => (
            <div key={index}>
              <Typography
                sx={{
                  color: "#73879C",
                  fontFamily: "Helvetica Neue",
                  fontSize: "13px",
                  fontWeight: "400",
                  paddingLeft: "15px",
                }}
              >
                {name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={initialProgressValues[index]}
                sx={{
                  height: "10px",
                  mb: "15px",
                  mt:'5px',
                  marginLeft: "15px",
                  marginRight: "15px",
                  backgroundColor: "#F5F5F5", 
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#1ABB9C",
                  },
                }}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LineChart;
