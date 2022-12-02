import {
  Dashboard,
  Apartment,
  PeopleAlt,
  Ballot,
  Explore ,
  Edit,
} from "@material-ui/icons";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PinDropIcon from '@mui/icons-material/PinDrop';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import WarehouseIcon from '@mui/icons-material/Warehouse';
export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Stock poubelles",
    icon: WarehouseIcon,
    url: `/stock`,
  },
  {
    name: "Zone de travail",
    icon: Explore ,
    url: `/ZoneDeTravail`,
  },
  {
    name: "Zone de dépôt",
    icon: PinDropIcon ,
    url: `/ZoneDepot`,
  },
  {
    name: "Camion",
    icon: LocalShippingIcon ,
    url: `/Camion`,
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
  },{
    name: "Personnels",
    icon: PersonAddIcon,
    url: `/person`,
    navigationData: [
      {
        name: "Tous les établissements",
        icon: Ballot,
        url: `/person/ouvrier`,
      },
      {
        name: "Gestion d'établissement",
        icon: Edit,
        url: `/person/respetab`,
      },
      
    ],
  },

  {
    name: "Profile",
    icon: PeopleAlt,
    url: `/users`,
  },
];
