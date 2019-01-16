import * as React from 'react'

export interface HTMLProps {
  htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>
  headComponents: React.ReactNodeArray
  bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
  preBodyComponents: React.ReactNodeArray
  body: string
  postBodyComponents: React.ReactNodeArray
}

export default class HTML extends React.Component<HTMLProps> {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This website works best with JavaScript enabled.
          </noscript>
          <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
