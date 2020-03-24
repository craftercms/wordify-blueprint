import React from 'react';
import CircularProgressSpinner from './CircularProgressSpinner';
import environment from '../relayEnvironment';
import { QueryRenderer } from 'react-relay';
import byUrlQuery from './byUrlQuery';

export default function ({ error, props, retry, render }) {
  if (error) {
    return <h1>Oops an error occurred.</h1>;
  } else if (!props) {
    return <CircularProgressSpinner />;
  } else {
    return render(props);
  }
}

export const createRenderProp = (render) => (
  ({ error, props, retry }) => {
    if (error) {
      return <h1>Oops an error occurred.</h1>;
    } else if (!props) {
      return <CircularProgressSpinner />;
    } else {
      return render(props);
    }
  }
);

export const ByUrlQuery = ({ render, url }) => (
  <QueryRenderer
    variables={{ url: `.*${url === '/' ? 'website/index' : url}.*` }}
    render={createRenderProp(render)}
    environment={environment}
    query={byUrlQuery}
  />
);
