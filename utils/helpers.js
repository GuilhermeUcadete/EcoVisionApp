export const analyzeEnvironmentalRisk = (data) => {
  return data.map(item => {
    let risco = "baixo";

    if (item.temperatura > 35 && item.fumaça) {
      risco = "queimada";
    } else if (item.vegetacao < 30) {
      risco = "desmatamento";
    }

    return {
      ...item,
      risco
    };
  });
};