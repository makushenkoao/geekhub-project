import React from "react";
import { SvgIconsProps } from "~/common";
import SvgIcon from "@mui/material/SvgIcon";

export const Youtube = (props: SvgIconsProps) => {
  return (
    <SvgIcon {...props}>
        <path
          d="M19.543 2.498C20 4.28 20 8 20 8C20 8 20 11.72 19.543 13.502C19.289 14.487 18.546 15.262 17.605 15.524C15.896 16 10 16 10 16C10 16 4.107 16 2.395 15.524C1.45 15.258 0.708 14.484 0.457 13.502C2.98023e-08 11.72 0 8 0 8C0 8 2.98023e-08 4.28 0.457 2.498C0.711 1.513 1.454 0.738 2.395 0.476C4.107 -1.78814e-07 10 0 10 0C10 0 15.896 -1.78814e-07 17.605 0.476C18.55 0.742 19.292 1.516 19.543 2.498ZM8 11.5L14 8L8 4.5V11.5Z"
          fill="#00382A"
        />
    </SvgIcon>
  );
};
