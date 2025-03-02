export const fetchRates = async ({ fromCrypto, toCrypto }: any) => {
  try {
    // Используем CoinGecko API для получения курсов
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fromCrypto}&tsyms=${toCrypto}&api_key=fa676c6231676541a2609d8b92558dd093dcff7e12fd4a3efed882022b336f5d`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении курсов:", error);
    return null;
  }
};
