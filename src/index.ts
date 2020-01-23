import WITHDRAWAL_FEE_MAP from './data/okex_withdrawal_fee_map';
import { WithdrawalFee } from './pojo/withdrawal_fee';

/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The symbol name
 * @param subtype The subtype, optional
 * @returns WithdrawalFee or undefined
 */
// eslint-disable-next-line import/prefer-default-export
export function getWithdrawalFee(symbol: string, subtype?: string): WithdrawalFee | undefined {
  if (!(symbol in WITHDRAWAL_FEE_MAP)) return undefined;

  if (subtype) {
    const arr = WITHDRAWAL_FEE_MAP[symbol] as WithdrawalFee[];
    return arr.find(x => x.subtype === subtype);
  }
  return WITHDRAWAL_FEE_MAP[symbol] as WithdrawalFee;
}
