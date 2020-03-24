import React from 'react';
import BaseLayout from '../shared/BaseLayout';

export default function NotFound() {
  return (
    <BaseLayout>
      <section style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1>Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </section>
    </BaseLayout>
  );
}

export function NotDeveloped() {
  return (
    <section>
      The page you've selected needs to be created by the site developers.
    </section>
  );
}
