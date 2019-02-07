import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 5px 10px;
  display: flex;
  min-height: 70px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const Info = styled.div`
  width: calc(100% - 90px);
  padding: 5px 10px;
  font-family: arial;
  font-size: 12px;
  color: #333;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
`;

class ClientListItem extends React.PureComponent {
  static propTypes = {
    client: PropTypes.shape({}),
    setActiveClient: PropTypes.func.isRequired,
  };

  static defaultProps = {
    client: {},
  }

  showClientDetail = () => {
    const { setActiveClient, client } = this.props;
    setActiveClient(client);
  }

  render() {
    const { client } = this.props;

    return (
      <StyledItem
        onClick={() => {this.showClientDetail()}}
      >
        <Avatar>
          <img
            src={client.general.avatar}
            style={{ display: 'block', width: '100%' }}
            alt="avatar"
          />
        </Avatar>
        <Info>
          <div>{client.general.firstName} {client.general.lastName}</div>
          <div>{client.job.title}</div>
        </Info>
      </StyledItem>
    )
  }
};

export { ClientListItem };
