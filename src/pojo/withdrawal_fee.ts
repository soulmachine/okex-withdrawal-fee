export interface WithdrawalFee {
  withdrawal_fee: number;
  min_withdraw_amount: number;
  platform?: 'Ethereum' | 'TRON' | 'Omni';
}
