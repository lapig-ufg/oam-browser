import React from "react";
import createReactClass from "create-react-class";
import Reflux from "reflux";

import MenuIcon from "mdi-react/MenuIcon";

import actions from "actions/actions";
import Dropdown from "oam-design-system/dropdown";
import userStore from "stores/user_store";

export default createReactClass({
  displayName: "MainMenu",

  mixins: [Reflux.listenTo(userStore, "onUserStoreData")],

  getInitialState: function() {
    return {
      oamHealth: null
    };
  },

  // TODO:
  //   Refactor common user code into a decorator so that any component can be
  //   simply augmented to include the relevant user functions/listenerers, etc.
  //   Eg;
  //     https://auth0.com/blog/adding-authentication-to-your-react-flux-app/
  //     https://github.com/adambene/react-authenticate/blob/master/src/authenticate.js
  onUserStoreData: function(_triggered) {
    this.setState({
      user: userStore.storage.user,
      isUserLoggedIn: userStore.isLoggedIn()
    });
  },

  onLoginClick: function() {
    actions.openModal("login");
  },

  render: function() {
    return (
      <ul className="main-menu">
        <li className="bttn menu-signin-upload">
          <a onClick={this.onLoginClick} title="Envie suas imagens" target="_blank" rel="noopener noreferrer">
            <span>Contribuir</span>
          </a>
        </li>
        <li className="bttn menu-dropdown">
          <MenuIcon />
          <Dropdown
            triggerElement="a"
            triggerClassName="menu_dropdown_button"
            triggerText=""
            direction="down"
            alignment="right"
          >
            <ul className="drop__menu info-menu" role="menu">
              <li>
                <a
                  className="drop__menu-item"
                  href="http://openaerialmap.org/about"
                  title="Leia mais"
                  data-hook="dropdown:close"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Sobre</span>
                </a>
              </li>
              <li>
                <a
                  className="drop__menu-item"
                  href="http://docs.openaerialmap.org/browser/getting-started/"
                  title="Guia do usuário"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ajuda</span>
                </a>
              </li>
              {/* <li>
                <a
                  className="drop__menu-item"
                  title="Leave feedback"
                  data-hook="dropdown:close"
                  onClick={() => actions.openModal("feedback")}
                >
                  <span>Feedback</span>
                </a>
              </li> */}
              <li>
                <a
                  className="drop__menu-item"
                  href="mailto:lapig.cepf@gmail.com"
                  title="Entrar em contato"
                >
                  <span>Contato</span> <small>lapig.cepf@gmail.com</small>
                </a>
              </li>
            </ul>
          </Dropdown>
        </li>
      </ul>
    );
  }
});
