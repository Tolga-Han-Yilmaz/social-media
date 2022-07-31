import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating() {
  const random = Math.floor(Math.random() * 5);
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={random + 1} precision={1} />
    </Stack>
  );
}
