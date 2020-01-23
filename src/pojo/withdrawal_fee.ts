export interface WithdrawalFee {
  withdrawal_fee: number;
  min_withdraw_amount: number;
  subtype?: 'ERC20' | 'TRC20' | 'OMNI' | 'AAC' | 'BEP2';
}
