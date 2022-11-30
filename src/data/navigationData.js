import {
  Dashboard,
  Apartment,
  PeopleAlt,
  Ballot,
  Explore ,
  Edit
} from "@material-ui/icons";
import { FaBoxes } from 'react-icons/fa';
export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Stock poubelles",
    icon: FaBoxes,
    url: `/stock`,
  },
  {
    name: "Zone de travail",
    icon: Explore ,
    url: `/ZoneDeTravail`,
  },
  {
    name: "Établissement",
    icon: Apartment,
    url: `/posts`,
    navigationData: [
      {
        name: "Tous les établissements",
        icon: Ballot,
        url: `/posts/all`,
      },
      {
        name: "Gestion d'établissement",
        icon: Edit,
        url: `/posts/editor`,
      },
      
    ],
  },

  {
    name: "Profile",
    icon: PeopleAlt,
    url: `/users`,
  },
];
