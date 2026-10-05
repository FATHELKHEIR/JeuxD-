import React, { Component } from "react";
import "./JeuxD.css";

export default class JeuxD extends Component {
  constructor(props) {
    super(props);

    this.finValue = Math.floor(Math.random() * 6) + 1;

    this.state = {
      facePic: null,
      face: null,
      compteur: 0,
      fin: false,
      btnMessage: "jouer",
      message: "commence tirée"
    };
  }

  initialiser() {
    this.finValue = Math.floor(Math.random() * 6) + 1;

    this.setState({
      face: null,
      compteur: 0,
      fin: false,
      btnMessage: "jouer",
      message: "commence tirée"
    });
  }

  jouer() {
    const value = Math.floor(Math.random() * 6) + 1;

    this.setState(
      this.finValue === value
        ? {
            face: value,
            compteur: this.state.compteur + 1,
            fin: true,
            btnMessage: "initialiser",
            message: "tu as trouver le numero cachée"
          }
        : {
            face: value,
            compteur: this.state.compteur + 1,
            fin: false,
            btnMessage: "jouer",
            message: "esseyer encore"
          }
    );
  }

  render() {
    return (
      <div className="game-page">
        <div className="game-card">

          <img
            className="main-dice"
            src="/images/init.PNG"
            alt="init"
          />

          <h1 className="game-title">
            JEU DE DÉ
          </h1>

          <p className="game-subtitle">
            Trouve le numéro caché
          </p>

          <div className="message-box">
            {this.state.message}
          </div>

          <div className="game-info">

            <div className="info-box">
              <span>Face</span>
              <strong>
                {this.state.face !== null
                  ? this.state.face
                  : "-"}
              </strong>
            </div>

            <div className="info-box">
              <span>Essais</span>
              <strong>{this.state.compteur}</strong>
            </div>

          </div>

          <div className="dice-area">

            {this.state.face !== null ? (
              <img
                className="dice-result"
                src={`/images/face${this.state.face}.PNG`}
                alt="dice"
              />
            ) : (
              <div className="waiting-dice">
                ?
              </div>
            )}

          </div>

          <button
            className={this.state.fin ? "game-btn reset-btn" : "game-btn"}
            onClick={() =>
              this.state.fin
                ? this.initialiser()
                : this.jouer()
            }
          >
            {this.state.btnMessage}
          </button>

        </div>
      </div>
    );
  }
}