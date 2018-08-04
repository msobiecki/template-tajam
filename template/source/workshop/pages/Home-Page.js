import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import Banner from '../components/banner/Banner';
import Textbox from '../components/textbox/Textbox';
import Story from '../components/story/Story';
import Expertise from '../components/expertise/Expertise';
import Team from '../components/team/Team';
import Works from '../components/works/Works';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

import { fetchBanner } from '../../actions/Banner-Actions';
import { fetchTextbox } from '../../actions/Textbox-Actions';
import { fetchStory } from '../../actions/Story-Actions';
import { fetchExpertise } from '../../actions/Expertise-Actions';
import { fetchTeam } from '../../actions/Team-Actions';
import { fetchWorks } from '../../actions/Works-Actions';
import { fetchTestimonials } from '../../actions/Testimonials-Actions';
import { fetchContact, sendContact } from '../../actions/Contact-Actions';
import { fetchClients } from '../../actions/Clients-Actions';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchBanner();
    this.props.fetchTextbox();
    this.props.fetchStory();
    this.props.fetchExpertise();
    this.props.fetchTeam();
    this.props.fetchWorks();
    this.props.fetchTestimonials();
    this.props.fetchContact();
    this.props.fetchClients();
  }

  sendContact = (contact) => {
    let errors = {};

    this.props.contact.data.map((item) => {
      if (!contact[item.name]) {
        errors[item.name] = {
          message: `You need to provide ${item.name}`
        }
      }
    })

    if (Object.keys(errors).length > 0) {
      this.props.stateContact.errors = errors;
      throw new SubmissionError(this.props.stateContact.errors);
    } else {
      return this.props.sendContact(contact)
        .then(respone => {
          //TODO: Success
        })
        .catch(err => {
          throw new SubmissionError(this.props.stateContact.errors);
        });
    }
  }

  render() {
    return (
      <div className="home-page">
        <Banner banner={this.props.banner} />
        <Textbox textbox={this.props.textbox} />
        <Story story={this.props.story} />
        <Expertise expertise={this.props.expertise} />
        <Team team={this.props.team} />
        <Works works={this.props.works} />
        <Testimonials testimonials={this.props.testimonials} />
        <Contact contact={this.props.contact} sendContact={this.sendContact} stateContact={this.props.stateContact} clients={this.props.clients} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    banner: state.bannerStore,
    textbox: state.textboxStore,
    story: state.storyStore,
    expertise: state.expertiseStore,
    team: state.teamStore,
    works: state.worksStore,
    testimonials: state.testimonialsStore,
    contact: state.contactStore,
    clients: state.clientsStore,
    stateContact: state.contactFormStore
  }
}

export default connect(mapStateToProps, { fetchBanner, fetchTextbox, fetchStory, fetchExpertise, fetchTeam, fetchWorks, fetchTestimonials, fetchContact, sendContact, fetchClients })(HomePage);
