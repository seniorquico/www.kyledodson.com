import * as React from 'react'
import { Kyle } from '../components/images/kyle'
import { Shell } from '../components/layouts/shell'

const Posts: React.StatelessComponent<{}> = () => (
  <Shell>
    <h1>Kyle</h1>
    <div style={{ height: 128, width: 128 }}>
      <Kyle />
    </div>
  </Shell>
)

export default Posts
