const contractAddress = "0xA98E9b640E60bE56c416865c2581d013F732b904"; // Replace with your own contract address
const chain = 'rinkeby'; // rinkeby, polygon, or ethereum

const welcome_h1 = "Welcome to the Diamond Skull Gang NFT Project!!";
const welcome_h2 = "Connect to MetaMask to Get Started";
const welcome_p = 'The Diamond Skull Gang NFT Project is a decentralized, open-source project that aims to demonstrate how to develope and launch your own NFT Collection.';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Public minting is now open! 🎉";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your Special NFT";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Community";
const button_public_mint = "Mint Your NFT";
const mint_failed = "Minting failed. 😢 Please try again.";

const abi = [
    /*inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    */
    {
        "constant":true,
        "inputs":[],
        "name":"getInfo",
        "outputs":[{"name":"","type":"string"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[{"name":"_info","type":"string"}],
        "name":"setInfo",
        "outputs":[],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    }
];