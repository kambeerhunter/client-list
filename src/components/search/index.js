import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterClientList } from '../../actions/clients';


class Search extends React.Component {
  state = {
    value: null,
  }

  static propTypes = {
    filteredElemets: PropTypes.arrayOf(PropTypes.shape({})),
    filterList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    filteredElemets: [],
  }

  textChange = (event) => {
    const { filterList } = this.props;

    filterList(event.currentTarget.value);
  }

  render() {

    const borderedBlock = {
      borderRadius: 5,
      border: "1px solid #ccc",
    };

    return (
      <div
        style={borderedBlock}
        className="form-group"
      >
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={this.textChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filteredElemets: state.clients.filteredElemets,
});

const mapDispatchToProps = {
  filterList: filterClientList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
