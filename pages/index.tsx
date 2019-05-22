import { withRouter } from 'next/router';
import * as React from 'react';

interface Props {
  name: string;
}

class Index extends React.Component<Props> {
  static async getInitialProps({ name = 'hello world' }: Props) {
    return { name };
  }

  public render() {
    return (<div>{this.props.name}</div>);
  }
}

export default withRouter(Index);
