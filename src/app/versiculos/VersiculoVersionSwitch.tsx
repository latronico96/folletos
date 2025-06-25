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
      color="primary"
      aria-label="versión de la Biblia"
    >
      <ToggleButton value="rv">Reina Valera</ToggleButton>
      <ToggleButton value="nvi">NVI</ToggleButton>
    </ToggleButtonGroup>
  );
}
