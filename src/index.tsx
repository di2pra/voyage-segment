import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";

const resources = {
  en: {
    navbar: {
      "locations": "Locations",
      "flights": "Flights",
      "hotels": "Hotels",
      "activities": "Activities",
      "need_help": "Need Help ?",
      "login": "Login",
      "register": "Register"
    },
    topSection: {
      "Let’s make a tour" : "Let’s make a tour",
      "Discover the beauty" : "Discover the beauty",
      "From Where" : "From Where",
      "From To" : "From To",
      "Adult": "Adult",
      "Adults": "Adults",
      "Search Packages": "Search Packages",
      "Search Flights": "Search Flights",
      "Search Hotels": "Search Hotels",
      "Visit the greatest places": "Visit the greatest places",
      "Make your own plans" : "Make your own plans",
      "Save 50% on your next trip": "Save 50% on your next trip"
    },
    flashDealsSection: {
      "Flash Deals": "Flash Deals",
      "Per person" : "Per person"
    },
    footer: {
      "News": "News",
      "Terms & Conditions": "Terms & Conditions",
      "Privacy": "Privacy",
      "About Us": "About Us",
      "FAQs": "FAQs"
    }
  },
  fr: {
    navbar: {
      "locations": "Séjours",
      "flights": "Vols",
      "hotels": "Hôtels",
      "activities": "Activités",
      "need_help": "Besoin d'aide ?",
      "login": "Se connecter",
      "register": "S'inscrire"
    },
    topSection: {
      "Let’s make a tour" : "Rêvez de vos",
      "Discover the beauty" : "futures aventures",
      "From Where" : "Départ",
      "From To" : "Destination",
      "Adult": "personne",
      "Adults": "personnes",
      "Search Packages": "Rechercher un séjour",
      "Search Flights": "Rechercher un vol",
      "Search Hotels": "Rechercher un hôtel",
      "Visit the greatest places": "Visitez les meilleurs endroits au monde",
      "Make your own plans" : "Personnalisez vos séjours",
      "Save 50% on your next trip": "Economisez jusqu'à 50% pour vos prochains voyages"
    },
    flashDealsSection: {
      "Flash Deals": "Vente Flash",
      "Per person" : "Par personne"
    },
    footer: {
      "News": "Presse",
      "Terms & Conditions": "Conditions générales",
      "Privacy": "Politique de confidentialité",
      "About Us": "Qui sommes-nous ?",
      "FAQs": "Questions Fréquentes"
    }
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);