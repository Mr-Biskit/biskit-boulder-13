export const mystory = {
  start: "",
  main: `Hi, I'm Gabriel
    
    I began my coding journey 5 years ago and for the last 2 have been comitted myself to learning blockchain technologies.
    
    I have considerable experience with React, Typescript and multiple databases, which has become my stack of choice for most web applications.

    I also have experience with solidity and have deployed dozens of smart contracts fpr ethereum/polygon.

    I was born in Johannesburg and started my career in corporate being both an anlyst and manager, I moved to Europe when I was 23 and have been living in Amsterdam for the last 5 years and it has been the city where my love for coding blossomed.

    Through my career I have dabbled with several avenues of programming including data gathering, data science, and automation, though nothing has satisfied me quite like designing, developing and deploying web applications.

    Socrates emphasized the need for critical self-examination and the pursuit of knowledge. This is how I approach my life and my work, I am always looking to improve and challenge myself.
    `,
  mobile: `
    
    Began my coding journey 5 years ago and for the last 2 have been comitted myself to learning blockchain technologies.
    
    I have considerable experience with React, Typescript and multiple databases, which has become my stack of choice for most web applications.

    I also have experience with solidity and have deployed dozens of smart contracts for ethereum/polygon.
    
    `,
};

export const projects = [
  {
    title: "TrustMe",
    description: [
      "The project revolves around a groundbreaking Delivery versus Payment (DVP) contract, designed and built specifically for the Ethereum blockchain. It seeks to streamline over-the-counter (OTC) settlements between two parties, seamlessly blending trustlessness and security. The smart contract is crafted using Solidity, with its functionality thoroughly vetted through a series of Typescript-based tests. The TrustMe contract excels at facilitating secure, trustless trades, handling a variety of digital assets such as ERC-20 Tokens, ETH, and ERC-721 Tokens. It provides a unique trade ID for every transaction and allows trades to be added, confirmed, canceled, and expired.",
      "The frontend of the project adds a layer of accessibility to the TrustMe contract, coupling it with a user-friendly interface built on Next.js and TailwindCSS. This empowers users to utilize the smart contract's functions with ease. The frontend environment is scaffolded with high-quality code, utilizing ESLint and Prettier for ensuring code quality, and uses Git and GitHub for version control. Its setup is a smooth, streamlined process involving basic Node.js and Git operations, and connects with the Ethereum web3 browser extension wallet services for transactions. One of the distinguishing features of this frontend is the facility to get test tokens from Uniswap, allowing users to try out TrustMe Services with test trades, thereby demonstrating its promise of being Simple, Safe, and Efficient. The ambition to make the contract modular, potentially implementing Diamond Standard ERC-2535, and developing a Sub Graph for more efficient data rendering, shows the future growth and potential this project holds.",
    ],
    skills: [
      "Blockchain Development",
      "Frontend Development",
      "Backend Development",
      "Smart Contract Development",
      "Test Writing and Execution",
      "Version Control",
      "Modular Design and Development",
      "Data Structure Implementation",
    ],
    tech: [
      "Typescript",
      "Solidity",
      "React",
      "Next.js",
      "TailwindCSS",
      "Hardhat",
      "Ethers.js",
      "Node.js",
      "Git",
    ],
    links: [
      "https://vimeo.com/797639971",
      "https://github.com/Mr-Biskit/TrustMeBackend",
      "https://trust-me-settlements-nine.vercel.app/",
    ],
    imagePath: "/images/black-screen.png",
  },
  {
    title: "DID Messsaging Application",
    description: [
      'The "Decentralized Identity (DID) Messaging Application" is a chat application that uses the KILT DID key agreement pair for message encryption and decryption, and the users authentication key for signing messages. This strategy confirms the senders identity while maintaining data integrity. It utilizes the TweetNaCl.js cryptography library to generate a shared secret from public and private keys, resulting in enhanced security measures for messaging applications. Additionally, a verification function is implemented to check message signatures, further boosting the applications security by identifying potential message tampering or incorrect sender identities.',
      'The "DIDComm Message Encryption Implementation" project focuses on the encryption of DIDComm messages, using the X25519 elliptic curve for key agreement. It seeks to create an "anoncrypt" method, ensuring that messages are encrypted with the recipients Decentralized Identifiers (DIDs) without disclosing the senders identity. With content encryption through AES 256-bit keys, key wrapping with ECDH-ES+A256KW, and representation of keys in JWK format, the project aims to enhance security in digital communication.',
    ],
    skills: [
      "Database Management",
      "Real-time Communication",
      "Encryption & Decryption",
      "Key Agreement",
      "Message Signing and Verification",
      "Content Encryption",
      "Key Wrapping",
      "Cryptography",
      "Backend Development",
      "Frontend Development",
    ],
    tech: [
      "Typescript",
      "React",
      "JOSE",
      "TweetNaCl.js",
      "Node.js",
      "Git",
      "MongoDB",
      "Socket.io",
      "Express",
      "WebRTC",
    ],
    links: [
      "https://github.com/Mr-Biskit/kilt-didcomm-chatapp",
      "https://github.com/Mr-Biskit/didComm-anonCrypt",
    ],
    imagePath: "/images/didcomm.png",
  },
];
