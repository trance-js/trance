import App, {Container} from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Link from 'next/link';
import * as React from 'react';

interface Props {
  name: string;
}

class Index extends React.Component<Props> {
  static async getInitialProps({ name = 'hello world' }: Props) {
    return { name };
  }

  public render() {
    return (
      <Container>
        <Head>
          <title>Trance装修系统</title>
        </Head>
          <div style={{ color: '#FFF' }}>
            <Link href='/about'><a>{this.props.name}</a></Link>
          </div>
      </Container>
    );
  }
}

export default withRouter(Index);
