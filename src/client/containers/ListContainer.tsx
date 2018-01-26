import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { TodoStore } from '../@types/index';

import List, { ListProps } from '../components/List';

interface StateFromProps {
  items: Todo[]
};

const mapStateToProps = (state: TodoStore, ownProps: ListProps) => ({
  items: state.list
});

export default connect<StateFromProps>(mapStateToProps)(List);