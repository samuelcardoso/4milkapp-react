/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { graphql, createFragmentContainer } from 'react-relay';

const styles = {
  container: {
    maxWidth: 600,
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  content: {
    padding: '1em 2em',
    margin: '2em 0',
  },
};

class Home extends React.Component<{}> {
  render() {
    const { classes: s } = this.props;
    return (
      <div className={s.container}>
        <Card className={s.content}>
          <Typography variant="headline" gutterBottom>
            My Account
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome, {this.props.user && this.props.user.displayName}!
          </Typography>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(
  createFragmentContainer(
    Home,
    graphql`
      fragment Account on Query {
        me {
          id
          username
          displayName
          photoURL
        }
      }
    `,
  ),
);
