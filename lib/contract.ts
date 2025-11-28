export const contractAddress = "0x322FF41dbdf60757018bB8CAee932571CED63bBB";

export const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "jobId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "applicant", "type": "address" }
    ],
    "name": "ApplicantHired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "jobId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "applicant", "type": "address" }
    ],
    "name": "Applied",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "jobId", "type": "uint256" }
    ],
    "name": "JobClosed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "jobId", "type": "uint256" }
    ],
    "name": "JobCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "jobId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "employer", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "budget", "type": "uint256" }
    ],
    "name": "JobPosted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "Withdrawn",
    "type": "event"
  },

  // FUNCTIONS
  {
    "inputs": [
      { "internalType": "string", "name": "_title", "type": "string" },
      { "internalType": "string", "name": "_description", "type": "string" },
      { "internalType": "uint256", "name": "_budget", "type": "uint256" }
    ],
    "name": "postJob",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },

  {
    "inputs": [
      { "internalType": "uint256", "name": "jobId", "type": "uint256" },
      { "internalType": "bytes32", "name": "resumeCID", "type": "bytes32" }
    ],
    "name": "applyToJob",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  {
    "inputs": [{ "internalType": "uint256", "name": "jobId", "type": "uint256" }],
    "name": "getApplications",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "applicant", "type": "address" },
          { "internalType": "bytes32", "name": "resumeCID", "type": "bytes32" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
        ],
        "internalType": "struct JobMarketplace.Application[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },

  {
    "inputs": [
      { "internalType": "uint256", "name": "jobId", "type": "uint256" },
      { "internalType": "uint256", "name": "applicantIndex", "type": "uint256" }
    ],
    "name": "hireApplicant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  {
    "inputs": [],
    "name": "nextJobId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
