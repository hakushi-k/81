/**
 * ローカルストレージから現在の入力情報を取得
 *
 * @param key {string} 入力情報を取得するkey
 */
export const lsGet = <T>(key: string): T | undefined => {
  const json = localStorage.getItem(key);
  if (!json) {
    return undefined;
  }
  return JSON.parse(json);
};

/**
 * ローカルストレージに入力情報を格納
 *
 * @param data {T} 格納する入力情報
 * @param key {string} 入力情報を格納するkey
 */
export const lsSet = <T>(data: T, key: string) => {
  const json = JSON.stringify(data);
  localStorage.setItem(key, json);
};

/**
 * ローカルストレージの指定keyの入力情報を全削除
 *
 * @param key {string} 入力情報を削除するkey
 */
export const lsRemove = (key: string) => {
  localStorage.removeItem(key);
};
