// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="cache-control" content="max-age=0" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="format-detection" content="address=no" />
        </Head>
        <body className="custom_class">
        <style>{`
          body {
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            font-family: "proxima-nova-soft", sans-serif;
            -webkit-user-select: none;
            overflow: hidden;
          }
          body .vertical-centered-box {
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          body .vertical-centered-box:after {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
          }
          body .vertical-centered-box .content {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            font-size: 0;
          }
          * {
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
          body {
            background: #282828;
          }
          .loader-circle {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
            margin-left: -60px;
            margin-top: -60px;
          }
          .loader-line-mask {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 60px;
            height: 120px;
            margin-left: -60px;
            margin-top: -60px;
            overflow: hidden;
            -webkit-transform-origin: 60px 60px;
            -moz-transform-origin: 60px 60px;
            -ms-transform-origin: 60px 60px;
            -o-transform-origin: 60px 60px;
            transform-origin: 60px 60px;
            -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));
            -webkit-animation: rotate 1.2s infinite linear;
            -moz-animation: rotate 1.2s infinite linear;
            -o-animation: rotate 1.2s infinite linear;
            animation: rotate 1.2s infinite linear;
          }
          .loader-line-mask .loader-line {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          }
          #particles-background,
          #particles-foreground {
            left: -51%;
            top: -51%;
            width: 202%;
            height: 202%;
            -webkit-transform: scale3d(0.5, 0.5, 1);
            -moz-transform: scale3d(0.5, 0.5, 1);
            -ms-transform: scale3d(0.5, 0.5, 1);
            -o-transform: scale3d(0.5, 0.5, 1);
            transform: scale3d(0.5, 0.5, 1);
          }
          #particles-background {
            background: #2c2d44;
            background-image: -moz-linear-gradient(45deg, #3f3251 2%, #002025 100%);
            background-image: -webkit-linear-gradient(45deg, #3f3251 2%, #002025 100%);
            background-image: linear-gradient(45deg, #3f3251 2%, #002025 100%);
          }
          lesshat-selector { -lh-property: 0; }
          @-webkit-keyframes rotate{ 0% { -webkit-transform: rotate(0deg);} 100% { -webkit-transform: rotate(360deg);}}
          @-moz-keyframes rotate{ 0% { -moz-transform: rotate(0deg);} 100% { -moz-transform: rotate(360deg);}}
          @-o-keyframes rotate{ 0% { -o-transform: rotate(0deg);} 100% { -o-transform: rotate(360deg);}}
          @keyframes rotate{ 0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);} 100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg);}}
          [not-existing] {
            zoom: 1;
          }
          lesshat-selector { -lh-property: 0; }
          @-webkit-keyframes fade{ 0% { opacity: 1;} 50% { opacity: 0.25;}}
          @-moz-keyframes fade{ 0% { opacity: 1;} 50% { opacity: 0.25;}}
          @-o-keyframes fade{ 0% { opacity: 1;} 50% { opacity: 0.25;}}
          @keyframes fade{ 0% { opacity: 1;} 50% { opacity: 0.25;}}
          [not-existing] {
            zoom: 1;
          }
          lesshat-selector { -lh-property: 0; }
          @-webkit-keyframes fade-in{ 0% { opacity: 0;} 100% { opacity: 1;}}
          @-moz-keyframes fade-in{ 0% { opacity: 0;} 100% { opacity: 1;}}
          @-o-keyframes fade-in{ 0% { opacity: 0;} 100% { opacity: 1;}}
          @keyframes fade-in{ 0% { opacity: 0;} 100% { opacity: 1;}}
          [not-existing] {
            zoom: 1;
          }
        `}</style>
          <noscript>Sorry, we need js to run correctly!</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
