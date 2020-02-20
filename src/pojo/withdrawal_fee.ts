export interface WithdrawalFee {
  withdrawal_fee: number;
  min_withdraw_amount: number;
  platform?: 'ERC20' | 'TRC20' | 'OMNI';
}
