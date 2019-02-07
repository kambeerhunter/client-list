import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';


const Avatar = styled.div`
  width: 128px;
  height: 128px;
  float: left;
  margin: 0 30px 30px 0;
`;

class ClientDetail extends React.Component {
  static propTypes = {
    client: PropTypes.shape({}),
  }

  static defaultProps = {
    client: null,
  }

  render() {
    const { client } = this.props;

    return (
      <div
        style={{ padding: ' 20px 0' }}
      >
        {client && (
          <React.Fragment>
            <Avatar>
              <img
                src={client.general.avatar || '-'}
                alt="avatar"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Avatar>

            <h3>
              { client.general.firstName } { client.general.lastName }
            </h3>
            <p>
              {client.job.title} - {client.job.company}
            </p>
            <div className="clearfix" />
            {Object.keys(client).map((key, index) => (
              <div
                key={`client-${key}-${index}`}
              >
                {!['general', 'job'].includes(key) && (
                  <React.Fragment>
                    <h4>{key}</h4>
                    { Object.keys(client[key]).map(subkey => (
                      <p
                        key={`detail-${key}-${subkey}`}
                      >
                        {subkey}: {client[key][subkey]}
                      </p>
                    ))}
                  </React.Fragment>
                )}
              </div>
            ))}
          </React.Fragment>
        )}
        {!client && (
          <h3
            className="text-center"
          >
            Choose a client from the list
          </h3>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.clients.activeClient,
});

export default connect(mapStateToProps, null)(ClientDetail);
