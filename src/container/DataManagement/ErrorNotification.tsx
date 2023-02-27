import React from 'react';
import Flashbar, {
  FlashbarProps,
} from '@cloudscape-design/components/flashbar';
import { GraphQLError } from 'graphql';

type Errors = {
  errors: (GraphQLError | Error)[];
};

export function ErrorNotification({ errors }: Errors) {
  const [items, setItems] = React.useState([
    {
      type: 'error' as FlashbarProps.Type,
      dismissible: true,
      dismissLabel: 'Dismiss message',
      onDismiss: () => setItems([]),
      content: (
        <>
          {errors.map((e, i) => (
            <h3 key={i}>{e.message}</h3>
          ))}
        </>
      ),
    },
  ]);
  return <Flashbar items={items} />;
}
