export const schedulesDB = {
  standard: [{ open: "13:00", close: "15:30" }, { open: "19:30", close: "22:30" }],
  continuous: [{ open: "13:00", close: "22:30" }],
  evening_only: [{ open: "17:00", close: "23:00" }]
};

export const locations = [
  {
    id: "andorra-la-vella",
    name: "Andorra la Vella",
    address: "Cap del Carrer, 9",
    postalCode: "AD500",
    parish: "Andorra la Vella",
    status: "open", 
    schedule: schedulesDB.standard,
    mapsQuery: "Burger Brothers Andorra la Vella"
  },
  {
    id: "escaldes",
    name: "Escaldes",
    address: "Botigues Molines, Carrer Copríncep François Mitterrand",
    postalCode: "AD700",
    parish: "Escaldes-Engordany",
    status: "open",
    schedule: schedulesDB.continuous,
    mapsQuery: "Burger Brothers Escaldes"
  },
  {
    id: "encamp",
    name: "Encamp",
    address: "Carrer Perdut, 2",
    postalCode: "AD200",
    parish: "Encamp",
    status: "open",
    schedule: schedulesDB.standard,
    mapsQuery: "Burger Brothers Encamp"
  },
  {
    id: "canillo",
    name: "Canillo",
    address: "Carretera General, Casa Nova Frances, Av. Sant Joan de Caselles",
    postalCode: "AD100",
    parish: "Canillo",
    status: "open",
    schedule: schedulesDB.standard,
    mapsQuery: "Burger Brothers Canillo"
  },
  {
    id: "tarter",
    name: "El Tarter",
    address: "Edifici L'Om, Urb. Sant Pere del Tarter",
    postalCode: "AD100",
    parish: "Canillo",
    status: "seasonal_closed", 
    schedule: schedulesDB.evening_only,
    mapsQuery: "Burger Brothers El Tarter"
  },
  {
    id: "la-massana",
    name: "La Massana",
    address: "Av. de Sant Antoni, 14", 
    postalCode: "AD400",
    parish: "La Massana",
    status: "open",
    schedule: schedulesDB.standard,
    mapsQuery: "Burger Brothers La Massana"
  },
  {
    id: "arinsal",
    name: "Arinsal",
    address: "Camí Prat de la Jaia, 2",
    postalCode: "AD400",
    parish: "La Massana",
    status: "coming_soon",
    schedule: schedulesDB.standard,
    mapsQuery: "Burger Brothers Arinsal"
  }
];
