# okex-withdrawal-fee

Get OKEx withdrawal fees of all currencies.

## How to use

```javascript
/* eslint-disable import/no-unresolved,no-console */
const { getWithdrawalFee } = require('okex-withdrawal-fee');

console.info(getWithdrawalFee('BTC'));

console.info(getWithdrawalFee('USDT-ERC20'));
```

## API Manual

There is only one API in this library:

```typescript
/**
 * Get withdrawal fee of the symbol.
 *
 * @param symbol The symbol name
 * @returns WithdrawalFee
 */
export function getWithdrawalFee(symbol: string): WithdrawalFee;
```

Which returns a `WithdrawalFee`:

```typescript
export interface WithdrawalFee {
  withdrawal_fee: number;
  min_withdraw_amount: number;
}
```
