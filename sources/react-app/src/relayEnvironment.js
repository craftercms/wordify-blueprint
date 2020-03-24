import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

export function fetchQuery(
  operation,
  variables
) {
  return fetch(process.env.REACT_APP_GRAPHQL_SERVER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
