import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import SystemReducer from "./System-Reducer";
import NewsletterReducer from "./Newsletter-Reducer";

import BannerReducer from "./Banner-Reducer";
import TextboxReducer from "./Textbox-Reducer";
import StoryReducer from "./Story-Reducer";
import ExpertiseReducer from "./Expertise-Reducer";
import TeamReducer from "./Team-Reducer";
import WorksReducer from "./Works-Reducer";
import TestimonialsReducer from "./Testimonials-Reducer";
import ContactReducer from "./Contact-Reducer";
import ContactFormReducer from "./Contact-Form-Reducer";
import ClientsReducer from "./Clients-Reducer";

import PageReducer from "./Page-Reducer";
import HeadlineReducer from "./Headline-Reducer";
import MapboxReducer from "./Mapbox-Reducer";
import ArticlesReducer from "./Articles-Reducer";
import ArticleReducer from "./Article-Reducer";

const reducers = {
  systemStore: SystemReducer,
  newsletterStore: NewsletterReducer,
  bannerStore: BannerReducer,
  textboxStore: TextboxReducer,
  storyStore: StoryReducer,
  expertiseStore: ExpertiseReducer,
  teamStore: TeamReducer,
  worksStore: WorksReducer,
  testimonialsStore: TestimonialsReducer,
  contactStore: ContactReducer,
  contactFormStore: ContactFormReducer,
  clientsStore: ClientsReducer,
  form: formReducer,

  pageStore: PageReducer,
  headlineStore: HeadlineReducer,
  mapboxStore: MapboxReducer,
  articlesStore: ArticlesReducer,
  articleStore: ArticleReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
