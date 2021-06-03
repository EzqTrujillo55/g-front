import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Head from 'next/head'
import Image from 'next/image'
import { GlobalStyle } from '../components/Main'
import styles from '../styles/Home.module.css'
import { main } from '../theme/Main'
import Login from './Auth/Login'
import React from 'react';
import { LoginBack } from '../components/LoginBack'

export default function Home() {
  return (
   <Login/>

  )
}
