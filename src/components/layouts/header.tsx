import { Link } from 'gatsby'
import 'normalize.css'
import * as React from 'react'
import headerStyles from './header.module.css'

export const Header: React.StatelessComponent<{}> = () => (
  <header className={headerStyles.header}>
    <nav className={headerStyles.navigation}>
      <ul>
        <li>
          <Link to="/">Kyle Dodson</Link>
        </li>
        <li className={headerStyles.selected}>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
)
