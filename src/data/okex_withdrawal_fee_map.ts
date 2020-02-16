import { WithdrawalFee } from '../pojo/withdrawal_fee';

const mapping: { [key: string]: WithdrawalFee | WithdrawalFee[] } = {
  '1ST': {
    min_withdraw_amount: 1,
    withdrawal_fee: 6,
  },
  AAC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  ABL: {
    min_withdraw_amount: 100,
    withdrawal_fee: 20,
  },
  ABT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  ACE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2.2,
  },
  ACT: {
    min_withdraw_amount: 10,
    withdrawal_fee: 0.01,
  },
  ADA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  AE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  AIDOC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 17,
  },
  ALGO: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.002,
  },
  ALV: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  AMM: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  ANKR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 100,
  },
  ARDR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2,
  },
  AST: {
    min_withdraw_amount: 1,
    withdrawal_fee: 8,
  },
  ATL: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1.5,
  },
  ATOM: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.005,
  },
  AUTO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 200,
  },
  AVT: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 1,
  },
  BCD: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.02,
  },
  BCH: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.0001,
  },
  BEC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 4,
  },
  BKX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  BLOC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  BNT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  BRD: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1.5,
  },
  BSV: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.00005,
  },
  BTC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.0004,
  },
  BTG: {
    min_withdraw_amount: 0.001,
    withdrawal_fee: 0.001,
  },
  BTM: {
    min_withdraw_amount: 10,
    withdrawal_fee: 5,
  },
  BTT: {
    min_withdraw_amount: 200,
    withdrawal_fee: 100,
  },
  BXA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  CAG: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2,
  },
  CAN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  CBT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  CHAT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  CIC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 150,
  },
  CIT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  CKB: {
    min_withdraw_amount: 61,
    withdrawal_fee: 10,
  },
  CMT: {
    min_withdraw_amount: 2,
    withdrawal_fee: 10,
  },
  CRO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  CTR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 7,
  },
  CTXC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  CVC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  CVT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  DAI: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  DASH: {
    min_withdraw_amount: 0.004,
    withdrawal_fee: 0.002,
  },
  DAT: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 2,
  },
  DCR: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.03,
  },
  DENT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 100,
  },
  DGB: {
    min_withdraw_amount: 100,
    withdrawal_fee: 0.2,
  },
  DGD: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.05,
  },
  DNA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  DNT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  DOGE: {
    min_withdraw_amount: 100,
    withdrawal_fee: 16,
  },
  DPY: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.8,
  },
  EC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  EDGE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  EDO: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 2,
  },
  EGT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  ELF: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  EM: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  ENG: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 5,
  },
  ENJ: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  EON: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  EOP: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  EOS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.1,
  },
  ETC: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.001,
  },
  ETEX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 8,
  },
  ETH: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.003,
  },
  EVX: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 1.5,
  },
  FAIR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  FCT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  FSN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  FTM: {
    min_withdraw_amount: 10,
    withdrawal_fee: 10,
  },
  FUN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  GAS: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0,
  },
  GNT: {
    min_withdraw_amount: 20,
    withdrawal_fee: 5,
  },
  GNX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 8,
  },
  GSC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  GTC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  GTO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  GUSD: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  HBAR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  HC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.005,
  },
  HIT: {
    min_withdraw_amount: 2000,
    withdrawal_fee: 2000,
  },
  HOT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  HPB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  HYC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  ICN: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 2,
  },
  ICX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.02,
  },
  INS: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 2.5,
  },
  INSUR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1000,
  },
  INT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  IOST: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  IOTA: {
    min_withdraw_amount: 0.001,
    withdrawal_fee: 0.5,
  },
  IPC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2.5,
  },
  ITC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  KAN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 100,
  },
  KARL: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0,
  },
  KCASH: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  KEY: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  KNC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 2,
  },
  LA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  LAMB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  LBA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  LEND: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  LEO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  LET: {
    min_withdraw_amount: 100,
    withdrawal_fee: 100,
  },
  LEV: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  LINK: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  LOL: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.1,
  },
  LRC: {
    min_withdraw_amount: 14,
    withdrawal_fee: 7,
  },
  LSK: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.4,
  },
  LTC: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.001,
  },
  MAG: {
    min_withdraw_amount: 1,
    withdrawal_fee: 34,
  },
  MANA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  MCO: {
    min_withdraw_amount: 0.4,
    withdrawal_fee: 0.2,
  },
  MDA: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 2,
  },
  MDT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 7,
  },
  MITH: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  MKR: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.002,
  },
  MOF: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  MOT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1.5,
  },
  MTH: {
    min_withdraw_amount: 1,
    withdrawal_fee: 35,
  },
  MTL: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.5,
  },
  MVP: {
    min_withdraw_amount: 1,
    withdrawal_fee: 200,
  },
  NANO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.2,
  },
  NAS: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.2,
  },
  NEO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0,
  },
  NGC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1.5,
  },
  NULS: {
    min_withdraw_amount: 4,
    withdrawal_fee: 2,
  },
  OAX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 6,
  },
  OF: {
    min_withdraw_amount: 1,
    withdrawal_fee: 600,
  },
  OKB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  OMG: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.1,
  },
  ONG: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  ONT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  ORBS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  ORS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  OST: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  PAX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  PAY: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  PLG: {
    min_withdraw_amount: 1,
    withdrawal_fee: 100,
  },
  PMA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2000,
  },
  POE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 30,
  },
  PPT: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.2,
  },
  PRA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 4,
  },
  PST: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  QTUM: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.01,
  },
  QUN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  QVT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  R: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2,
  },
  RCN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  RCT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  RDN: {
    min_withdraw_amount: 0.6,
    withdrawal_fee: 0.3,
  },
  READ: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  REF: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.2,
  },
  REN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  REQ: {
    min_withdraw_amount: 1,
    withdrawal_fee: 15,
  },
  RFR: {
    min_withdraw_amount: 1,
    withdrawal_fee: 200,
  },
  RNT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 13,
  },
  ROAD: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  SALT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  SAN: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 1,
  },
  SBTC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.1,
  },
  SC: {
    min_withdraw_amount: 10,
    withdrawal_fee: 0.1,
  },
  SDA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0,
  },
  SHOW: {
    min_withdraw_amount: 1,
    withdrawal_fee: 150,
  },
  SMT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 8,
  },
  SNC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  SNGLS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  SNM: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  SOC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  SPF: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  SPND: {
    min_withdraw_amount: 10,
    withdrawal_fee: 150,
  },
  SRCOIN: {
    min_withdraw_amount: 100,
    withdrawal_fee: 500,
  },
  STC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  STORJ: {
    min_withdraw_amount: 4,
    withdrawal_fee: 2,
  },
  SUB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 4,
  },
  SWFTC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 350,
  },
  TCT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  THETA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  TIO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2.5,
  },
  TNB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  TOPC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 20,
  },
  TRA: {
    min_withdraw_amount: 1,
    withdrawal_fee: 500,
  },
  TRIO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 200,
  },
  TRUE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2,
  },
  TRX: {
    min_withdraw_amount: 20,
    withdrawal_fee: 1,
  },
  TUSD: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  UBTC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.01,
  },
  UCT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  UGC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 12,
  },
  UKG: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2.5,
  },
  USDC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 1,
  },
  USDK: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  USDT: [
    {
      min_withdraw_amount: 2,
      subtype: 'ERC20',
      withdrawal_fee: 0.88,
    },
    {
      min_withdraw_amount: 2,
      subtype: 'TRC20',
      withdrawal_fee: 0,
    },
    {
      min_withdraw_amount: 2,
      subtype: 'OMNI',
      withdrawal_fee: 0.88,
    },
  ],
  UTK: {
    min_withdraw_amount: 1,
    withdrawal_fee: 3,
  },
  VCASH: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.01,
  },
  VEE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 100,
  },
  VIB: {
    min_withdraw_amount: 1,
    withdrawal_fee: 6,
  },
  VITE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  VIU: {
    min_withdraw_amount: 1,
    withdrawal_fee: 40,
  },
  VNT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  VSYS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.2,
  },
  WAVES: {
    min_withdraw_amount: 0.1,
    withdrawal_fee: 0.1,
  },
  WFEE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 500,
  },
  WIN: {
    min_withdraw_amount: 1,
    withdrawal_fee: 200,
  },
  WRC: {
    min_withdraw_amount: 1,
    withdrawal_fee: 48,
  },
  WTC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.4,
  },
  WXT: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  XAS: {
    min_withdraw_amount: 1,
    withdrawal_fee: 5,
  },
  XEM: {
    min_withdraw_amount: 1,
    withdrawal_fee: 4,
  },
  XLM: {
    min_withdraw_amount: 21,
    withdrawal_fee: 0.01,
  },
  XMR: {
    min_withdraw_amount: 0.001,
    withdrawal_fee: 0.04,
  },
  XPO: {
    min_withdraw_amount: 1,
    withdrawal_fee: 50,
  },
  XRP: {
    min_withdraw_amount: 21,
    withdrawal_fee: 0.1,
  },
  XTZ: {
    min_withdraw_amount: 1,
    withdrawal_fee: 0.5,
  },
  XUC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 5.8,
  },
  YEE: {
    min_withdraw_amount: 1,
    withdrawal_fee: 70,
  },
  YOU: {
    min_withdraw_amount: 1,
    withdrawal_fee: 10,
  },
  ZEC: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.001,
  },
  ZEN: {
    min_withdraw_amount: 0.01,
    withdrawal_fee: 0.07,
  },
  ZIP: {
    min_withdraw_amount: 1000,
    withdrawal_fee: 1000,
  },
  ZRX: {
    min_withdraw_amount: 1,
    withdrawal_fee: 2,
  },
};

export default mapping;
