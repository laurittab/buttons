import React from "react";
//Import features from Material UI libraries
import {Button, ButtonGroup, Checkbox, Grid, IconButton, Stack} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import Item from "@mui/material/Stack";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SaveIcon from "@mui/icons-material/Save";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

export default function Buttons() {
  return (
    <div>
      <Grid className="containter_centred" container spacing={2}>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <Button>
                  <IconButton type="submit" size="medium">
                    <HomeIcon color="default" fontSize="inherit" />
                  </IconButton>
                </Button>
                <Button>
                  <IconButton type="submit" size="medium">
                    <SaveIcon color="success" fontSize="inherit" />
                  </IconButton>
                </Button>
                <Button>
                  <IconButton type="submit" size="medium">
                    <DeleteIcon color="error" fontSize="inherit" />
                  </IconButton>
                </Button>
                <Button>
                  <IconButton type="submit" size="medium">
                    <SystemUpdateAltIcon color="secondary" fontSize="inherit" />
                  </IconButton>
                </Button>
                <Button>
                  <IconButton type="submit" size="medium">
                    <CancelPresentationIcon color="error" fontSize="inherit" />
                  </IconButton>
                </Button>
              </ButtonGroup>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                size="large"
                startIcon={<CancelIcon />}
                onClick={() => {}} //clearFunction
              >
                clear
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="contained"
                color="error"
                size="medium"
                startIcon={<DeleteIcon />}
                disabled={""} //disabledConditions
                onClick={() => {}} //deleteFunction
              >
                delete
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<ListIcon />}
                onClick={() => {}} //launchFunction
              >
                display
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="outlined"
                color="success"
                size="large"
                startIcon={<EditIcon />}
                onClick={() => {}} //launchFunction
              >
                edit
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                className="flt_rt"
                type="button"
                variant="outlined"
                color="error"
                size="large"
                startIcon={<CancelPresentationIcon />}
                onClick={() => {}} //exitFunction
              >
                exit
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="contained"
                color="success"
                size="medium"
                startIcon={<SaveIcon />}
                disabled={""} //disabledConditions
                onClick={() => {}} //saveFunction
              >
                save
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={3} md={1}>
          <Stack spacing={2}>
            <Item>
              <form>
                <IconButton type="submit" size="large">
                  <HomeIcon color="default" fontSize="inherit" />
                </IconButton>
              </form>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={3} md={1}>
          <Stack spacing={2}>
            <Item>
              <form>
                <IconButton
                  type="submit"
                  size="large"
                  onClick={() => {}} //logoutHandler
                >
                  <LogoutIcon color="default" fontSize="inherit" />
                </IconButton>
              </form>
            </Item>
          </Stack>
        </Grid>{" "}
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<PersonSearchIcon />}
                disabled={""} //disabledConditions
                onClick={() => {}} //searchFunction
              >
                search
              </Button>
            </Item>
          </Stack>
        </Grid>{" "}
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <form>
                <Button
                  type="submit"
                  variant="outlined"
                  color="error"
                  size="large"
                  startIcon={<RefreshOutlinedIcon />}
                >
                  try Again
                </Button>
              </form>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SystemUpdateAltIcon />}
                disabled={""} //disabledConditions
                onClick={() => {}} //updateFunction
              >
                update
              </Button>
            </Item>
          </Stack>
        </Grid>
        <Grid item sm={6} md={2}>
          <Stack spacing={2}>
            <Item>
              <Button
                className="wdth-44"
                type="button"
                variant="outlined"
                color="success"
                size="large"
                startIcon={<PreviewOutlinedIcon />}
                disabled={""} //disabledConditions
                onClick={() => {}} //viewFunction
              >
                view Changes
              </Button>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
