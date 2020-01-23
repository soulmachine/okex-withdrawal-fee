# okex-withdrawal-fee

Get OKEx withdrawal fees of all currencies.

## Quick start

```bash
npx okex-withdrawal-fee USDT ERC20
```

## How to use

```javascript
/* eslint-disable import/no-unresolved,no-console */
const { getWithdrawalFee } = require('okex-withdrawal-fee');

console.info(getWithdrawalFee('BTC'));

console.info(getWithdrawalFee('USDT', 'ERC20'));
```

## API Manual

There is only one API in this library:

```typescript
/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The symbol name
 * @param subtype The subtype, optional
 * @returns WithdrawalFee or undefined
 */
export function getWithdrawalFee(symbol: string, subtype?: string): WithdrawalFee | undefined;
```

Which returns a `WithdrawalFee`:

```typescript
export interface WithdrawalFee {
  withdrawal_fee: number;
  min_withdraw_amount: number;
  subtype?: 'ERC20' | 'TRC20' | 'OMNI' | 'AAC' | 'BEP2';
}
```
