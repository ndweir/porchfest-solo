/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 React base styles
import colors from "../theme-dark/base/colors";
import breakpoints from "../theme-dark/base/breakpoints";
import typography from "../theme-dark/base/typography";
import boxShadows from "../theme-dark/base/boxShadows";
import borders from "../theme-dark/base/borders";
import globals from "../theme-dark/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "../theme-dark/functions/boxShadow";
import hexToRgb from "../theme-dark/functions/hexToRgb";
import linearGradient from "../theme-dark/functions/linearGradient";
import pxToRem from "../theme-dark/functions/pxToRem";
import rgba from "../theme-dark/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "../theme-dark/components/sidenav";
import list from "../theme-dark/components/list";
import listItem from "../theme-dark/components/list/listItem";
import listItemText from "../theme-dark/components/list/listItemText";
import card from "../theme-dark/components/card";
import cardMedia from "../theme-dark/components/card/cardMedia";
import cardContent from "../theme-dark/components/card/cardContent";
import button from "../theme-dark/components/button";
import iconButton from "../theme-dark/components/iconButton";
import input from "../theme-dark/components/form/input";
import inputLabel from "../theme-dark/components/form/inputLabel";
import inputOutlined from "../theme-dark/components/form/inputOutlined";
import textField from "../theme-dark/components/form/textField";
import menu from "../theme-dark/components/menu";
import menuItem from "../theme-dark/components/menu/menuItem";
import switchButton from "../theme-dark/components/form/switchButton";
import divider from "../theme-dark/components/divider";
import tableContainer from "../theme-dark/components/table/tableContainer";
import tableHead from "../theme-dark/components/table/tableHead";
import tableCell from "../theme-dark/components/table/tableCell";
import linearProgress from "../theme-dark/components/linearProgress";
import breadcrumbs from "../theme-dark/components/breadcrumbs";
import slider from "../theme-dark/components/slider";
import avatar from "../theme-dark/components/avatar";
import tooltip from "../theme-dark/components/tooltip";
import appBar from "../theme-dark/components/appBar";
import tabs from "../theme-dark/components/tabs";
import tab from "../theme-dark/components/tabs/tab";
import stepper from "../theme-dark/components/stepper";
import step from "../theme-dark/components/stepper/step";
import stepConnector from "../theme-dark/components/stepper/stepConnector";
import stepLabel from "../theme-dark/components/stepper/stepLabel";
import stepIcon from "../theme-dark/components/stepper/stepIcon";
import select from "../theme-dark/components/form/select";
import formControlLabel from "../theme-dark/components/form/formControlLabel";
import formLabel from "../theme-dark/components/form/formLabel";
import checkbox from "../theme-dark/components/form/checkbox";
import radio from "../theme-dark/components/form/radio";
import autocomplete from "../theme-dark/components/form/autocomplete";
import container from "../theme-dark/components/container";
import popover from "../theme-dark/components/popover";
import buttonBase from "../theme-dark/components/buttonBase";
import icon from "../theme-dark/components/icon";
import svgIcon from "../theme-dark/components/svgIcon";
import link from "../theme-dark/components/link";
import dialog from "../theme-dark/components/dialog";
import dialogTitle from "../theme-dark/components/dialog/dialogTitle";
import dialogContent from "../theme-dark/components/dialog/dialogContent";
import dialogContentText from "../theme-dark/components/dialog/dialogContentText";
import dialogActions from "../theme-dark/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
