#!/usr/bin/env node
import { getWithdrawalFee } from './index';

const args = process.argv.slice(2);

if (args.length !== 1 && args.length !== 2) {
  console.error('Usage: okex-withdrawal-fee <symbol> [subtype]');
  process.exit(0);
}

console.info(getWithdrawalFee(args[0], args[1]));
