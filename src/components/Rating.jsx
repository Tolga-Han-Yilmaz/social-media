import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating() {
  const random = Math.floor(Math.random() * 4);
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={random + 2} precision={1} />
    </Stack>
  );
}
