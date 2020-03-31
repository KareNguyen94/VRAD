export const getAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json());
}

export const getAreaDetails = (details) => {
  return fetch('http://localhost:3001' + details)
    .then(response => response.json());
}

export const getListing = (listing) => {
  return fetch('http://localhost:3001' + listing)
    .then(response => response.json());
}
