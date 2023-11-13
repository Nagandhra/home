// DoughnutChart.js
import React, { useRef, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BuildIcon from "@mui/icons-material/Build";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chart from "chart.js/auto";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { fetchDoughnutChartData } from "../redux/action";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const dispatch = useDispatch();

  const doughnutChartData = useSelector((state) => state.doughnutChartData);
  const loadingChartData = useSelector((state) => state.loadingChartData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchDoughnutChartData());
  }, [dispatch]);

  useEffect(() => {
    if (!doughnutChartData) {
      // Data is still loading or is null, handle accordingly
      return;
    }

    const myChartRef = chartRef.current.getContext("2d");

    const chartData = {
      labels: doughnutChartData.labels,
      datasets: [
        {
          data: doughnutChartData.data,
          backgroundColor: [
            "rgb(53, 154, 222)",
            "rgb(35,185,154)",
            "rgb(155,87,191)",
            "rgb(191,196,200)",
            "rgb(233,94,79)",
          ],
        },
      ],
    };

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
            onClick: (e, legendItem) => {
              return false;
            },
            labels: {
              pointStyle: "square",
              boxWidth: 15,
              padding: 20,
              fontFamily: " Helvetica Neue, sans-serif",
            },
          },
          tooltip: {
            callbacks: {
              bodyFontFamily: "Helvetica Neue,sans-serif",
              bodyFontSize: 14,
              bodyFontWeight: "900",
              label: (context) => {
                const dataIndex = context.dataIndex;
                const label = chartData.labels[dataIndex];
                const value = chartData.datasets[0].data[dataIndex];
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [loadingChartData, doughnutChartData]);

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
            Device Usage
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

      <Box sx={{ width: "100%", height: "260px" }} display="flex" align-items="center">
        <Box sx={{ marginLeft: 2, width: "60.5%", padding: 2 }}>
          <Box
            sx={{ width: "70%" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"

          >
            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontSize: "15px",
                fontWeight: "700",
              }}
              variant="h6"
              // gutterBottom
              component="div"
              color="#73879c"
            >
              Top 5
            </Typography>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontSize: "15px",
                fontWeight: "700",
              }}
              variant="h6"

              component="div"
              color="#73879c"
            >
              Device
            </Typography>
          </Box>
         <div style={{marginBottom:'25px'}}>
          <canvas id="myChart" ref={chartRef} style={{ width: "100%"}} />
          </div>
        </Box>
        <Box
          sx={{
            padding: "16px",
          }}
          display="flex"
          flexDirection="column"  // Change to column layout
          alignItems="center"     // Center the items horizontally
        >
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontSize: "15px",
              fontWeight: "700",
            }}
            variant="h6"
            gutterBottom
            component="div"
            color="#73879c"
          >
            Progress
          </Typography>
          <Box display="flex">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1.2}
              style={{padding:'21px 0px 0px 0px '}}
            >
              {["30%", "10%", "20%", "15%", "30%"].map((label, index) => (
                <Grid item key={index} style={{paddingTop:'4.6px'}}>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica Neue",
                      fontSize: 15,
                      fontWeight: "400",
                      paddingRight: "2px",
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                    color="#73879c"
                  >
                    {label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>


      </Box>
    </Box>
  );
};

export default DoughnutChart;
