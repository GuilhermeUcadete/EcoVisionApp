export const getSatelliteData = async () => {
  try {
    const locations = [
      { lat: -3.1, lng: -60.0 },
      { lat: -10.0, lng: -55.0 },
      { lat: -15.7, lng: -47.9 },
      { lat: -23.5, lng: -46.6 },
      { lat: -12.9, lng: -38.5 },
      { lat: -8.0, lng: -34.9 }
    ];

    const results = await Promise.all(
      locations.map(async (loc, index) => {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current_weather=true`
        );

        const data = await response.json();
        const temp = data.current_weather.temperature;

        let risco = "baixo";
        const random = Math.random();

        if (temp >= 33 || random > 0.75) {
          risco = "queimada";
        } else if (temp >= 27 || random > 0.45) {
          risco = "desmatamento";
        }

        return {
          id: index,
          lat: loc.lat,
          lng: loc.lng,
          temperatura: temp,
          vegetacao: Math.floor(Math.random() * 100),
          risco
        };
      })
    );

    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
``