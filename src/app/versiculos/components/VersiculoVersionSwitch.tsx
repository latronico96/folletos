"use client";

import {ToggleButton, ToggleButtonGroup } from "@mui/material";

type Version = "rv" | "nvi";

interface Props {
  value: Version;
  onChange: (value: Version) => void;
}

export default function VersiculoVersionSwitch({ value, onChange }: Props) {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: Version | null
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

 return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      size="small"
      sx={{
        backgroundColor: "#000",
        borderRadius: 1,
        border: "1px solid #444",
      }}
    >
      <ToggleButton
        value="rv"
        sx={{
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#333",
            color: "#90caf9",
          },
        }}
      >
        Reina Valera
      </ToggleButton>
      <ToggleButton
        value="nvi"
        sx={{
          color: "white",
          "&.Mui-selected": {
            backgroundColor: "#333",
            color: "#90caf9",
          },
        }}
      >
        NVI
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
