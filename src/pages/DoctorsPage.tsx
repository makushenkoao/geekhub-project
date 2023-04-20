import {
  Box,
  Container,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import {
  BreadcrumbsUkr,
  PaginationBottomBar,
  SelectedItemsBox,
  SelectTopBar,
} from "~/components/atomic";

import { FilterDoctors, SearchBar } from "~/components/doctorsPage";

import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";

const data = [
  { key: 0, label: "Приватна клініка" },
  { key: 1, label: "Добре" },
  { key: 2, label: "Дуже добре" },
  { key: 3, label: "Вища освіта" },
  { key: 4, label: "Бімба! :)" },
];

export const DoctorsPage = () => {
  const { palette } = useTheme();
  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />

      <Typography
        variant="h4"
        color={palette.custom.primary20}
        sx={{ mt: "26px", mb: "32px" }}
      >
        Лікарі
      </Typography>

      <SearchBar />

      <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
        <Box sx={{ flex: "0 1 328px" }}>
          <SelectedItemsBox data={data} />

          <FilterDoctors />
        </Box>

        <Box sx={{ flex: "1 0 auto", maxWidth: "1000px" }}>
          <SelectTopBar />

          <HeaderCardDoctor />

          <PaginationBottomBar />
        </Box>
      </Stack>
    </Container>
  );
};
