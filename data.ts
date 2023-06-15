export const mystory = {
  description: [
    "My journey into the realm of coding has been quite the unconventional tale. I graduated from university in 2016 with a degree in Project Management, and soon thereafter, I embarked on a career as a junior analyst. Before long, I found myself managing a restaurant franchise. Though I found fulfillment in my business ventures, I couldn't shake the nagging desire to engage both the analytical and creative sides of my brain. This quest for a harmonious blend of logic and creativity led me to a Python-based course in 2019. The course was challenging, but as I began to understand the principles of high-level programming, my mind was ignited with the potential of what I could create. I was reminded of the words of Socrates who emphasized the importance of critical self-examination and the pursuit of knowledge. With these words at heart, I delved into a rigorous self-study of low-level programming concepts, such as Data Structures and Algorithms. A year later, my ambition had crystallized into a simple mantra: `I want to build cool shit that brings value to people.` This motivation steered me towards JavaScript, and later TypeScript, the lingua franca of modern web applications...",
    "As I grappled with new concepts daily and maintained a steady learning curve, I became proficient in frameworks and practices such as React, RESTful APIs, and UI/UX. Then, in 2020, I was introduced to blockchain technology. I was captivated by its potential to truly create a decentralized internet. This newfound fascination spurred me into writing my first smart contracts, and a new passion was kindled. My thirst for understanding only grew from there, leading me into an intensive study of Cryptography and Blockchain infrastructure. As a full-stack developer, I have found the ideal playground to nurture both my analytical and scientific left brain, along with my creative and imaginative right brain. This balance makes the role a perfect fit for me. Combining this with my strong organizational skills, my drive to initiate and complete projects, and my ability to collaborate effectively as a team player, I am confident that I am a formidable force as a developer. I am reminded of Aristotle's words, which serve as a fitting conclusion to my narrative: `All men by nature desire knowledge.`",
  ],
  imagePath1: "/images/HelmetEdit.png",
  imagePath2: "/images/scrollFinal.png",
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

      "Content Encryption",
      "Key Wrapping",
      "Message Signing and Verification",
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
  {
    title: "Restaurant Website",
    description: [
      "The Restaurant App project showcases my ability to blend creative design and advanced technical skills. This bespoke solution for a restaurant client features a responsive and dynamic design, engaging parallax effects, and an interactive beer menu. Its seamless CMS integration, accessible via Google Authentication, allows the owners to update the site's content in real-time, effortlessly.",
      "The app leverages modern technologies like React, Next.js, TypeScript, and Sanity.io, ensuring high performance through server-side rendering. The Instagram feed integration and aesthetic designs, initially prototyped in Figma, contribute to a visually appealing user interface. Although I cannot share the booking system code due to confidentiality reasons, this project embodies my dedication to creating engaging, functional, and easy-to-manage digital spaces.",
    ],
    skills: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Responsive Design",
      "CMS Integration",
      "Interactive Design",
    ],
    tech: [
      "Typescript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Sanity.io",
      "Frame Motion",
      "Figma",
      "JavaScript",
    ],
    links: [
      "https://github.com/Mr-Biskit/brewery-website/tree/main",
      "https://brewery-website-zf2s.vercel.app/",
    ],
    imagePath: "/images/Beer.png",
  },
];

export const socialLinks = [
  "https://github.com/Mr-Biskit",
  "https://twitter.com/mr__biskit",
  "https://www.linkedin.com/in/gabriel-vince-017059214/",
  "https://discordapp.com/users/MrBiskit#0483",
];

export const modalInfo = {
  title: "WELCOME TO BISKIT BOULDER",
  description: [
    "Enjoy exploring around the ancient boulder of Biskit. You can zoom into the boulder by scrolling, and rotate it by dragging.",
    "Click on the the floating clouds to navigate to the relevant sections",
    "Click on the Back button to return to the boulder",
    "The Boulder is still a WIP and everyday I am adding new features, animations and goodies. So keep checking back for more!",
    "The Comic Strip of the history of Biskit Boulder, is coming soon!",
  ],
  cloudPath: "/images/Cloud.png",
};
