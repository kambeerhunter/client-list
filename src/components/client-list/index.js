import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getClients, setActiveClient } from '../../actions/clients';
import { Preloader } from '../preloader';
import { ClientListItem } from './ClientListItem';

class ClientList extends React.PureComponent {
  static propTypes = {
    getClientsAction: PropTypes.func.isRequired,
    clients: PropTypes.arrayOf(PropTypes.shape({})),
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    clients: [],
    isLoading: false,
  }

  componentDidMount() {
    const { getClientsAction } = this.props;
    getClientsAction();
  }

  render() {
    const { isLoading, clients, setActiveClientAction } = this.props;

    const borderedBlock = {
      borderRadius: 5,
      border: "1px solid #ccc",
      height: "calc(100vh - 103px)",
      overflow: "auto",
    };

    return (
      <React.Fragment>
      { isLoading && (
        <Preloader />
      )}

        <div
          className="client-list"
          style={borderedBlock}
        >
          {clients.map((item, index) => (
            <ClientListItem
              key={`${item.general.firstName}-${index}`}
              client={item}
              setActiveClient={setActiveClientAction}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.filteredElements,
  isLoading: state.clients.isLoading,
});

const mapDispatchToProps = {
  getClientsAction: getClients,
  setActiveClientAction: setActiveClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
