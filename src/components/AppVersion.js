import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import BuildIcon from "@mui/icons-material/Build";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from 'react-redux';
import { setProgressValues } from '../redux/action';

const AppVersion = () => {
  const dispatch = useDispatch();
  const progressValues = useSelector((state) => state.progressValues);

  const versions = [
    { left: "0.1.5.2", right: "123k" },
    { left: "0.1.5.3", right: "53k" },
    { left: "0.1.5.4", right: "23k" },
    { left: "0.1.5.5", right: "3k" },
    { left: "0.1.5.6", right: "1k" },
  ];

  useEffect(() => {
    // Fetch progress values from Redux or API and set in the Redux store
    dispatch(setProgressValues([80, 60, 35, 45, 15])); // Example values, replace with actual data
  }, [dispatch]);
  return (
    <Box >
      <Box
        sx={{ padding: "3px 6px 3px 8px" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ marginLeft: "16px" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue",
              fontSize: "1.50rem",
              fontWeight: "normal",
              color: "#73879C",

            }}
            // gutterBottom
            variant="h6"
          >
            App versions
          </Typography>
        </Box>
        <Box
          sx={{
            // width: "15%",
            marginRight: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: "25px", fontWeight: "900", color: "#73879C", padding: "2px" }} />
          <BuildIcon sx={{ fontSize: "20px", color: "#D0D0D0", transform: "rotate(95deg)", padding: "2px" }} />
          <CloseIcon sx={{ fontSize: "20px", color: "#73879C", padding: "2px" }} />

        </Box>
      </Box>
      <Divider variant="middle" sx={{ width: "90%", bgcolor: "#D0D0D0" }} />

      <Box sx={{ padding: "9px", height: "260px" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: '500', color: '#73879C', padding: "1px", fontFamily: "Helvetica Neue", marginLeft: 1 }}>
          App Usage across versions
        </Typography>
        {versions.map((version, index) => (
          <Box key={index} display="flex" alignItems="center" marginTop="10px" height={30} >
            <Typography fontSize="13px" paddingLeft={1} color={"#73879C"} fontFamily={"Helvetica Neue"}>{version.left}</Typography>

            <LinearProgress
              variant="determinate"
              value={progressValues[index]}
              sx={{
                width: "250px",
                height: "18px",
                ml: 4,
                mr: 5 + index,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#1Abb9c",
                },
                "&.MuiLinearProgress-root": {
                  backgroundColor: "#f2f7f5",
                },
              }}
            />
           <Typography fontSize="20px" paddingRight={3} color={"#73879C"} fontFamily={"Helvetica Neue"}>{version.right}</Typography>
           </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AppVersion;
