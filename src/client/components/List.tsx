import * as React from 'react';

import Todo from '../../data/Todo';

import ListItem from './ListItem';

export interface ListProps {
  items: Todo[],
  onComplete?: (itemId: number) => void
}

export default (props: ListProps) => {
  const onComplete = (itemId: number) => {
    if (typeof props.onComplete !== 'undefined') {
      props.onComplete(itemId);
    }
  };
  
  return (
    <ul>
      {props.items.map((todo) => (
        <ListItem
          key={todo.id}
          item={todo}
          onComplete={onComplete} />))}
    </ul>
  )
};