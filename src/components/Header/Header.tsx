import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../routes";
import FormModal from "../SignInSignUpForm/FormModal";

const links = [
  {
    name: "Лікарі",
    path: RouteNames.DOCTORS,
  },
  {
    name: "Клініки",
    path: RouteNames.CLINICS,
  },
  {
    name: "Про beHealth",
    path: RouteNames.ABOUT,
  },
];

const styledBox = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const Header: FC = (props) => {
  const [city, setCity] = useState("Cherkasy");
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  return (
    <AppBar className="appBar" position="static">
      <Container className="_containerHeader">
        <Box sx={styledBox}>
          <NavLink to={RouteNames.HOME}>
            <Typography className="_logo" width="180px" height="32px">
              beHealth
            </Typography>
          </NavLink>
          <Select
            // disableUnderline
            labelId="select-city"
            id="select-city"
            value={city}
            label="City"
            onChange={handleChange}
            IconComponent={() => <KeyboardArrowDownIcon fontSize="small" />}
            sx={{
              p: 0,
              "& .MuiOutlinedInput-input": { p: 0 },
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
            // class doesnt work wtf !!!
            className="_selectChooseCity"
          >
            <MenuItem value={"Cherkasy"}>
              <Typography variant="caption">Черкаси</Typography>
            </MenuItem>
            <MenuItem value={"Kyiv"}>
              <Typography variant="caption">Київ</Typography>
            </MenuItem>
            <MenuItem value={"Termopil"}>
              <Typography variant="caption">Тернопіль</Typography>
            </MenuItem>
          </Select>
        </Box>
        <Box sx={styledBox}>
          <Box sx={styledBox}>
            {links.map(({ name, path }) => {
              return (
                // <NavLink to={path} key={name}>
                //   <Link variant="body2" className="_headerNavLink">
                //     {name}
                //   </Link>
                // </NavLink>
                <NavLink
                  to={path}
                  key={name}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "none", color: "#000000" }}
                  >
                    {name}
                  </Typography>
                </NavLink>
              );
            })}
          </Box>

          <Button variant="contained" className="_headerAppointmentButton">
            {"Записатися"}
          </Button>

          <Button
            variant="outlined"
            className="_headerSingInButton"
            onClick={handleModalOpen}
            startIcon={<PersonIcon fontSize="small" />}
          >
            {
              // userIsLoggedIn ?  "Особистий кабінет" :
              "Увійти"
            }
          </Button>

          <FormModal open={open} handleModalClose={handleModalClose} />
          
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;