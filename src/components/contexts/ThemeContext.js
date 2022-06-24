import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSelector} from "react-redux";

const MaterialThemeProvider = (props) => {
    const themeMode = useSelector((state) => state.authReducer.theme);
    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MaterialThemeProvider;
