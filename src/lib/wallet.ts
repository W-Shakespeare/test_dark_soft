import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function isMetaMaskInstalled(): boolean {
  return typeof window !== 'undefined' && 
         typeof window.ethereum !== 'undefined' && 
         window.ethereum.isMetaMask === true;
}

export async function connectWallet() {
  if (!isMetaMaskInstalled()) {
    throw new Error("MetaMask не установлен. Пожалуйста, установите MetaMask для использования этой функции.");
  }

  try {
    // Запрашиваем только текущий аккаунт
    const accounts = await window.ethereum.request({ 
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }]
    });

    if (accounts.length === 0) {
      throw new Error("Нет доступных аккаунтов. Пожалуйста, создайте или разблокируйте аккаунт в MetaMask.");
    }

    // Создаем провайдер и получаем баланс
    const provider = new ethers.BrowserProvider(window.ethereum);
    const address = accounts[0];
    const balance = ethers.formatEther(await provider.getBalance(address));

    return { address, balance };
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error("Вы отклонили запрос на подключение");
    }
    if (error.code === -32002) {
      throw new Error("MetaMask уже обрабатывает запрос на подключение");
    }
    throw new Error("Ошибка подключения к MetaMask: " + (error.message || "Неизвестная ошибка"));
  }
}

export async function getWalletDetails() {
  if (!isMetaMaskInstalled()) {
    return null;
  }

  try {
    const accounts = await window.ethereum.request({ 
      method: "eth_accounts",
      params: [{ eth_accounts: {} }]
    });

    if (accounts.length === 0) {
      return null;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const address = accounts[0];
    const balance = ethers.formatEther(await provider.getBalance(address));

    return { address, balance };
  } catch (error) {
    console.error("Ошибка получения данных кошелька:", error);
    return null;
  }
}