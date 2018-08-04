import React, { Component } from 'react';
import { Player } from 'video-react';

import BackgroundImage from '../../../images/team-background.jpg';

import IconPlay from "react-icons/lib/io/play";

import 'video-react/dist/video-react.css'
import './Story.sass';


class Story extends Component {

  state = {
    video: false,
  }

  onClick = () => {
    this.setState({ video: true });
  }

  render() {
    const { story } = this.props
    return (
      <div className="story">
        <div className="story__overlay">
          <img className="story__background" src={BackgroundImage} alt={story.title} />
        </div>
        <div className="story__content">


          {
            this.state.video ?
              <Player
                src={story.video}
                playsInline
                poster={story.poster}
                autoPlay
              />
              :
              <div className="story__playbox" onClick={this.onClick}>
                <div className="story__play">
                  <IconPlay size={36} />
                  <span> {story.title} </span>
                </div>
              </div>

          }
        </div>
      </div>
    );
  }
}

export default Story;
