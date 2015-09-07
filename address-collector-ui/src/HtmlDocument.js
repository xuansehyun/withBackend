import {
  default as React,
  Component,
  PropTypes,
} from "react";

export default class HtmlDocument extends Component {

  static propTypes = {
    componentString: PropTypes.string.isRequired,
    clientAssets: PropTypes.object.isRequired,
  }

  _render_link_to_stylesheet_ (clientAssets) {
    if (clientAssets.client) {
      return (
        <link rel="stylesheet" href={clientAssets.client.replace(/js$/, "css")} />
      );
    }
  }

  render () {
    const {clientAssets} = this.props;
    const innerHtml = {__html: this.props.componentString};

    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
          <title>Locarise</title>
          <link href="//fonts.googleapis.com/css?family=Roboto:400,300,500"/>
          {this._render_link_to_stylesheet_(clientAssets)}
        </head>
        <body>
          <div id="react-container" dangerouslySetInnerHTML={innerHtml} />
          <script src="//www.parsecdn.com/js/parse-1.4.2.min.js" />
          <script src={clientAssets["assets/client"] || clientAssets.client} />
        </body>
      </html>
    );
  }
}
