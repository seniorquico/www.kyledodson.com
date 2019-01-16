import * as React from 'react'
import { Footer } from './footer'
import { Header } from './header'
import './shell.css'

export const Shell: React.StatelessComponent<{}> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
