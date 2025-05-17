const axios = require('axios');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const readline = require('readline');
const { clear } = require('console');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { SocksProxyAgent } = require('socks-proxy-agent');
const https = require('https');

const API_BASE_URL = 'https://prod.interlinklabs.ai/api/v1';
const TOKEN_FILE_PATH = path.join(__dirname, 'token.txt');
const PROXIES_FILE_PATH = path.join(__dirname, 'proxies.txt');
const CLAIM_INTERVAL_MS = 4 * 60 * 60 * 1000;

const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const logger = {
  info: (msg) => console.log(`${colors.green}[✓] ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}[⚠] ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}[✗] ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}[✅] ${msg}${colors.reset}`),
  loading: (msg) => console.log(`${colors.cyan}[⟳] ${msg}${colors.reset}`),
  step: (msg) => console.log(`${colors.white}[➤] ${msg}${colors.reset}`),
  banner: () => {
    console.log(`${colors.cyan}${colors.bold}`);
    console.log(`---------------------------------------------`);
    console.log(`🍉🍉🍉 19Seniman From Insider - PLEASE SUPPORT PALESTINE ON YOUR SOCIAL MEDIA 🍉🍉🍉 `);
    console.log(`---------------------------------------------${colors.reset}`);
    console.log();
  }
};
