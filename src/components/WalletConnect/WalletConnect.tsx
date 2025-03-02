import { useEffect, useState } from "react";
import {
  connectWallet,
  getWalletDetails,
  isMetaMaskInstalled,
} from "../../lib/wallet";
import { TokenIcon } from "@web3icons/react";
import { toast } from "react-toastify";
import styles from "./WalletConnect.module.scss";

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      const { address, balance } = await connectWallet();
      setAddress(address);
      setBalance(balance);
      toast.success("Подключено к MetaMask");
    } catch (error) {
      toast.error("Ошибка подключения");
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    const checkWallet = async () => {
      try {
        const details = await getWalletDetails();
        if (details) {
          setAddress(details.address);
          setBalance(details.balance);
        }
      } catch (error) {
        console.error("Ошибка получения данных кошелька:", error);
      }
    };
    checkWallet();

    // Слушаем изменения аккаунта
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", checkWallet);
      window.ethereum.on("chainChanged", () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", checkWallet);
      }
    };
  }, []);

  if (!isMetaMaskInstalled()) {
    return (
      <div className={styles.wrapperWallet}>
        <div className={styles.wallet}>
          <div className={styles.walletHeader}>
            <TokenIcon symbol={"eth"} variant="branded" size="32" />
            Требуется MetaMask
          </div>
          <div className={styles.connectedWallet}>
            <div>
              MetaMask не установлен. Пожалуйста,{" "}
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noopener noreferrer"
              >
                установите MetaMask
              </a>{" "}
              для использования этой функции.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapperWallet}>
      <div className={styles.wallet}>
        <div className={styles.walletHeader}>
          <TokenIcon symbol={"eth"} variant="branded" size="32" />
          <span>Кошелек MetaMask</span>
        </div>

        {!address ? (
          <button onClick={handleConnect} disabled={isConnecting}>
            {isConnecting ? "Подключение..." : "Подключить MetaMask"}
          </button>
        ) : (
          <div className={styles.connectedWallet}>
            <div className={styles.address}>
              <p>Адрес кошелька</p>
              <p>{address}</p>
            </div>
            <div className={styles.balance}>
              <p className={styles.balanceText}>Баланс</p>
              <p className={styles.balanceAmount}>{balance} ETH</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
