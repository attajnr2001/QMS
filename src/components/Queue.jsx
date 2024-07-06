import React, { useState } from "react";
import Row from "./Row";
import { Box } from "@mui/material";
import { queueData } from "../helpers/static";
import ConfigLink from "../components/ConfigLink";

const Queue = () => {
  const [selectedType, setSelectedType] = useState("deposit");

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const filteredData = queueData.filter((item) => item.type === selectedType);

  return (
    <Box
      sx={{
        minWidth: "350px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid #e0e0e0",
      }}
    >
      <Box>
        <ConfigLink onSelect={handleTypeSelect} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
          padding: "16px",
        }}
      >
        {filteredData.map((item, index) => (
          <Row
            key={index}
            avatar={item.avatar}
            name={item.name}
            date={item.date}
            time={item.time}
            waitTime={item.waitTime}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Queue;
