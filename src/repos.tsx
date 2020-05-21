import React, { Component } from "react";
import Axios from "axios";
import * as STYLE from "./styles";

class Repos extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    Axios("https://github-trending-api.now.sh/")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.error(err.response));
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div style={{ ...STYLE.TITLE_TXT }}>
          <h3>Trending GitHub Repos</h3>
        </div>
        <div style={{ ...STYLE.BODY }}>
          {data.length &&
            data.map((card: any, j: number) => (
              <div key={j} style={{ ...STYLE.CARD_CONTAINER }}>
                <div style={{ ...STYLE.CARD_BODY }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div style={{ ...STYLE.TITLE }}>
                      <i className="fa fa-book" />
                    </div>
                    <div>
                      <a href={card.url} style={{ textDecoration: "none" }}>
                        <h4 style={{ color: "#555" }}>
                          {card.author}/{card.name}
                        </h4>
                      </a>
                    </div>
                  </div>
                  <div style={{ marginBottom: 5, marginTop: 5 }}>
                    {card.description}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {card.language && (
                      <div style={{ ...STYLE.BOTTOM_LABEL }}>
                        <div
                          style={{
                            ...STYLE.LANG_ICON,
                            backgroundColor: card.languageColor,
                          }}
                        />
                        <span>{card.language}</span>
                      </div>
                    )}

                    <div style={{ ...STYLE.BOTTOM_LABEL }}>
                      <i
                        className="fa fa-star"
                        style={{
                          marginRight: 2,
                        }}
                      />
                      <span>{card.stars}</span>
                    </div>
                    <div style={{ ...STYLE.BOTTOM_LABEL }}>
                      <i
                        className="fa fa-code-fork"
                        style={{
                          marginRight: 2,
                        }}
                      />
                      <span>{card.forks}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 7, marginBottom: 3 }}>
                    <p>Build By</p>
                    {card.builtBy &&
                      card.builtBy.map((item: any, i: number) => (
                        <div key={i * i} style={{ ...STYLE.BUILDBY_CARD }}>
                          <img
                            src={item.avatar}
                            style={{ ...STYLE.IMG }}
                            alt={item.username}
                          />
                          <a href={card.url} style={{ textDecoration: "none" }}>
                            <p>{item.username}</p>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Repos;
