import WITHDRAWAL_FEE_MAP from './data/okex_withdrawal_fee_map';
import { WithdrawalFee } from './pojo/withdrawal_fee';

/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The symbol name
 * @returns WithdrawalFee
 */
// eslint-disable-next-line import/prefer-default-export
export function getWithdrawalFee(symbol: string): WithdrawalFee | WithdrawalFee[] {
  return WITHDRAWAL_FEE_MAP[symbol];
}
