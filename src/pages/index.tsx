import { withRouter } from 'next/router';
import * as React from 'react';
import { Button } from 'antd';

interface Props {
  name: string;
}

class Index extends React.Component<Props> {
  static async getInitialProps({ name = 'hello world' }: Props) {
    return { name };
  }

  public render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <Button type='primary'>buttom</Button>
      </div>

    );
  }
}

export default withRouter(Index);
