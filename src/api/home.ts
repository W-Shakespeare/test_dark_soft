import { Rates } from "../models";

export const fetchRates = async ({ fromCrypto, toCrypto }: any) => {
  try {
    // Используем CoinGecko API для получения курсов
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fromCrypto}&tsyms=${toCrypto}&api_key=fa676c6231676541a2609d8b92558dd093dcff7e12fd4a3efed882022b336f5d`
    );
    const data = await response.json();
    return data;
    // Преобразуем ответ в нужный формат, используя символы криптовалют из объекта
    // const formattedRates: Rates = {
    //   arb: data.arbitrum?.usd || 0,
    //   sushi: data.sushi?.usd || 0,
    //   etc: data["ethereum-classic"]?.usd || 0,
    //   bnb: data.binancecoin?.usd || 0,
    //   atom: data.cosmos?.usd || 0,
    //   ftt: data.fantom?.usd || 0,
    //   ada: data.cardano?.usd || 0,
    //   trx: data.tron?.usd || 0,
    //   usdt_trc20: data.tether?.usd || 1,
    //   usdt_erc20: data.tether?.usd || 1,
    // };
    // console.log("Полученные курсы:", formattedRates);
    // return formattedRates;
  } catch (error) {
    console.error("Ошибка при получении курсов:", error);
    return null;
  }
};

// `https://api.geckoterminal.com/api/v2/networks/${network}/tokens/${tokenAddress}`,

// `https://api.geckoterminal.com/api/v2/networks/${network}/tokens/${tokenAddress}`
