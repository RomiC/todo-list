import * as React from 'react';

import Todo from '../../data/Todo';

export interface ListItemProps {
  item: Todo,
  onComplete?: (itemId: number) => void
}

export default (props: ListItemProps) => {
  const onClick = () => {
    if (typeof props.onComplete !== 'undefined') {
      props.onComplete(props.item.id);
    }
  };

  return (
    <li>
      {
        props.item.complete === true ? (
          <s>{props.item.label}</s>
        ) : (
          <span>{props.item.label}</span>
        )
      }

      {
        props.item.complete === false && (
          <button
            type="button"
            onClick={onClick}>
            Complete
          </button>
        )
      }
    </li>
  )
};