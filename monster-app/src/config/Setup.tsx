import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route } from 'react-router-dom'
import App from '../App'

const Setup = () => {
  return (
    <ThemeProvider theme={""}>
        <CssBaseline />
        <Route path="*" element={<App />} />

    </ThemeProvider>
  )
}

export default Setup