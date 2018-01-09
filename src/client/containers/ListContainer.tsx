import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { TodoStore } from '../@types/index';

import List, { ListProps } from '../components/List';

export interface ListStateProps {
  items: Todo[]
};

const mapStateToProps: MapStateToProps<ListStateProps, ListProps, TodoStore> = (state: TodoStore, ownProps: ListProps) => ({
  items: state.list
});

export default connect(mapStateToProps)(List);