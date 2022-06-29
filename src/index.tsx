import i18n from "i18next";
import ReactDOM from 'react-dom';
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './providers/UserProvider';

const resources = {
  en: {
    navbar: {
      "locations": "Locations",
      "flights": "Flights",
      "hotels": "Hotels",
      "activities": "Activities",
      "need_help": "Need Help ?",
      "login": "Login",
      "register": "Register",
      "Log out": "Log out"
    },
    topSection: {
      "Let’s make a tour": "Let’s make a tour",
      "Discover the beauty": "Discover the beauty",
      "From Where": "From Where",
      "From To": "From To",
      "Adult": "Adult",
      "Adults": "Adults",
      "Search Packages": "Search Packages",
      "Search Flights": "Search Flights",
      "Search Hotels": "Search Hotels",
      "Visit the greatest places": "Visit the greatest places",
      "Make your own plans": "Make your own plans",
      "Save 50% on your next trip": "Save 50% on your next trip"
    },
    flashDealsSection: {
      "Flash Deals": "Flash Deals",
      "Per person": "Per person",
      "priceWithCurrency": "{{val, currency(USD)}}",
      "Trending": "Trending",
      "Adult": "Adult",
      "Adults": "Adults"
    },
    placeSection: {
      "Popular places": "Popular places",
      "place_desc": "Enjoy the benefits of our packages to the sites where our visitors have more fun. Properly arranged with low costing.",
      "place_more": "Wanna travel to the most thrilling spot on the planet? We've set a bunch of surprises for you.",
      "Packages": "Packages",
      "Click to view more": "Click to view more"
    },
    flightSection: {
      "Flights to Popular Places at the Best Costs": "Flights to Popular Places at the Best Costs",
      "startingPriceWithCurrency": "From {{val, currency(USD)}}"
    },
    hotelSection: {
      "Discover our best hotels to stay": "Discover our best hotels to stay",
      "hotel_desc": "Bundle tickets to any hotel to save on your whole order. Follow bundle it! method by picking the right hotel accommodation once you add your tickets to your cart.",
      "Starts from": "Starts from",
      "Per Person": "Per Person",
      "priceWithCurrency": "{{val, currency(USD)}}",
      "Click to view more": "Click to view more",
      "more_desc": "In our offers, we have more hotels. Just to make your stay easy for your best interests."
    },
    login: {
      "Login": "Login",
      "Username": "Username",
      "Password": "Password"
    },
    register: {
      "Register": "Register",
      "Username": "Username",
      "Password": "Password",
      "Confirm Password": "Confirm Password",
      "Email": "Email",
      "Confirm Email": "Confirm Email",
      "Phone Number": "Phone Number"
    },
    footer: {
      "News": "News",
      "Terms & Conditions": "Terms & Conditions",
      "Privacy": "Privacy",
      "About Us": "About Us",
      "FAQs": "FAQs",
      "support@voyage.com": "support@voyage.com",
      "+1-764-456-4595": "+1-764-456-4595",
      "23 fleet st, Boston, MA": "23 fleet st, Boston, MA",
      "United States of America": "United States of America"
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
      "register": "S'inscrire",
      "Log out": "Se déconnecter"
    },
    topSection: {
      "Let’s make a tour": "Rêvez de vos",
      "Discover the beauty": "futures aventures",
      "From Where": "Départ",
      "From To": "Destination",
      "Adult": "personne",
      "Adults": "personnes",
      "Search Packages": "Rechercher un séjour",
      "Search Flights": "Rechercher un vol",
      "Search Hotels": "Rechercher un hôtel",
      "Visit the greatest places": "Visitez les meilleurs endroits au monde",
      "Make your own plans": "Personnalisez vos séjours",
      "Save 50% on your next trip": "Economisez jusqu'à 50% pour vos prochains voyages"
    },
    flashDealsSection: {
      "Flash Deals": "Vente Flash",
      "Per person": "Par personne",
      "priceWithCurrency": "{{val, currency(EUR)}}",
      "Trending": "En tendance",
      "Adult": "personne",
      "Adults": "personnes"
    },
    placeSection: {
      "Popular places": "Idées Voyages",
      "place_desc": "Trouvez l'inspiration pour vos vacances",
      "place_more": "Voyage de rêve tout compris et dernières minutes avec voyage.com",
      "Packages": "Séjours",
      "Click to view more": "Voir plus d'idées"
    },
    flightSection: {
      "Flights to Popular Places at the Best Costs": "Vols vers les endroits populaires aux meilleurs prix",
      "startingPriceWithCurrency": "À partir de {{val, currency(EUR)}}"
    },
    hotelSection: {
      "Discover our best hotels to stay": "Trouver un hôtel de rêve",
      "hotel_desc": "Réserver votre hôtel avec voyage.com, c’est l’assurance de dénicher facilement et rapidement un établissement offrant des prestations de qualité au meilleur prix en France comme à l'étranger.",
      "Starts from": "À partir de",
      "Per Person": "par personne",
      "priceWithCurrency": "{{val, currency(EUR)}}",
      "Click to view more": "Voir les offres",
      "more_desc": "Recherchez votre bonheur parmi notre large sélection de plus de 500 000 hôtels pas cher allant de l’Ibis Budget à l'hôtel 5 étoiles. A chacun sa formule, selon ses exigences."
    },
    login: {
      "Login": "Se connecter",
      "Username": "Nom d'utilisateur",
      "Password": "Mot de passe"
    },
    register: {
      "Register": "S'inscrire",
      "Username": "Nom d'utilisateur",
      "Password": "Mot de passe",
      "Confirm Password": "Confirmez votre mot de passe",
      "Email": "E-mail",
      "Confirm Email": "Confimez votre E-mail",
      "Phone Number": "Numéro de téléphone"
    },
    footer: {
      "News": "Presse",
      "Terms & Conditions": "Conditions générales",
      "Privacy": "Politique de confidentialité",
      "About Us": "Qui sommes-nous ?",
      "FAQs": "Questions Fréquentes",
      "support@voyage.com": "contact@voyage.com",
      "+1-764-456-4595": "0849453984",
      "23 fleet st, Boston, MA": "97 rue Saint-Honoré, 75001 Paris",
      "United States of America": "France"
    }
  }
};


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);