import {
  Dashboard,
  Apartment,
  PeopleAlt,
  Ballot,

  
  Edit
} from "@material-ui/icons";
export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
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
      {
        name: "Affecter",
        icon: Edit,
        url: `/posts/affecter`,
      },
    ],
  },
  {
    name: "Profile",
    icon: PeopleAlt,
    url: `/users`,
  },
];
