import WITHDRAWAL_FEE_MAP from './data/okex_withdrawal_fee_map';
import { WithdrawalFee } from './pojo/withdrawal_fee';

/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The symbol name
 * @param platform The platform, optional
 * @returns WithdrawalFee or undefined
 */
// eslint-disable-next-line import/prefer-default-export
export function getWithdrawalFee(symbol: string, platform?: string): WithdrawalFee | undefined {
  if (!(symbol in WITHDRAWAL_FEE_MAP)) return undefined;

  if (platform) {
    const arr = WITHDRAWAL_FEE_MAP[symbol] as WithdrawalFee[];
    return arr.find(x => x.platform === platform);
  }
  return WITHDRAWAL_FEE_MAP[symbol] as WithdrawalFee;
}
