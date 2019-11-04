import PropTypes from "prop-types";
import React from "react";

import ResultsListCard from "components/results_list_card";
import mapStore from "stores/map_store";

export default class ResultsList extends React.Component {
  static displayName = "ResultsList";

  static propTypes = {
    query: PropTypes.object,
    params: PropTypes.object,
    map: PropTypes.object,
    results: PropTypes.array
  };

  homeBlurb() {
    return (
      <div>
        <p className="title-plataforma-cepf">
          Plataforma de conhecimento do Cerrado: Imagens Aéreas
        </p>
        <h2>Últimos uploads</h2>
      </div>
    );
  }

  squareBlurb() {
    return (
      <div>
        <h2
          className="pane-title"
          title={
            "Imagens disponíveis para quadrados" /* +
            this.props.params.square */
          }
        >
          {this.props.results.length} imagens dentro do quadrado da grade selecionada
        </h2>
      </div>
    );
  }

  userBlurb() {
    let user = mapStore.getImageryOwner();
    return (
      <div className="profile">
        <div className="profile-header">
          <div className="profile-pic-wrapper">
            <img src={user.profile_pic_uri} alt="Provider's profile" />
          </div>
          <div className="profile-details">
            <h2 className="pane-title" title={"Imagens para o usuário " + user.name}>
              {user.name}
            </h2>
            <div>
              <a href={user.website}>{user.website}</a>
            </div>
          </div>
        </div>
        <div className="profile-bio">
          <p>{user.bio}</p>
        </div>
      </div>
    );
  }

  paneBlurb() {
    let blurb;
    if (this.props.params.user_id) {
      blurb = this.userBlurb();
    } else if (this.props.params.square_id) {
      blurb = this.squareBlurb();
    } else {
      blurb = this.homeBlurb();
    }
    return <div className="oam-blurb">{blurb}</div>;
  }

  render() {
    var square = this.props.params.square_id;
    var results = this.props.results.map(o => {
      return (
        <ResultsListCard
          key={o._id}
          query={this.props.query}
          params={this.props.params}
          map={this.props.map}
          selectedSquareQuadkey={square}
          data={o}
        />
      );
    });

    return (
      <section className="results-hub">
        <header id="sidebar-header">{this.paneBlurb()}</header>
        <div id="sidebar-body">
          <ol className="results-list">{results}</ol>
        </div>
        <footer className="pane-footer" />
      </section>
    );
  }
}
