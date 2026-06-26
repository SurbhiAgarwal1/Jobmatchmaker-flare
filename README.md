# Job Marketplace (Flare Network)

### Contract Address  
**0x322FF41dbdf60757018bB8CAee932571CED63bBB**  
View on Explorer:  
https://coston2-explorer.flare.network/address/0x322FF41dbdf60757018bB8CAee932571CED63bBB
<img width="1918" height="843" alt="Screenshot 2025-11-28 134811" src="https://github.com/user-attachments/assets/73147ca1-a547-4e4a-b535-447dd875c2a8" />

---

## 📌 Project Description

This is a decentralized **Job Marketplace** built on the **Flare Network**.  
It enables employers and job seekers to interact through a trustless blockchain-based system.

Employers can post jobs, applicants can apply, and employers can hire directly on-chain.  
Funds are held in escrow until the job is completed, ensuring security  for both parties.

---

## 🚀 Features

### **Employer**
- Post a job with:
  - Title  
  - Description  
  - Budget (sent as FLR value)
- Automatically receives a Job ID.

### **Applicant**
- Apply to any job using:
  - Job ID  
  - Resume CID (IPFS / Filecoin hash encoded as bytes32)

### **Employer Hiring**
- View applications
- Hire an applicant using:
  - Job ID  
  - Applicant Index

### **Escrow Logic**
- Budget is locked when job is posted.
- Escrow releases when job is marked completed.

---

## 🎯 How It Solves the Problem

Traditional freelancing platforms:
- Charge high fees  
- Allow fake profiles  
- Delay payments  
- Allow disputes with no transparency  

This DApp solves these issues:

### ✔ **Trustless escrow**  
The blockchain holds the employer’s payment so neither party can cheat.

### ✔ **Transparent hiring**  
All applications and hiring events are publicly visible.

### ✔ **Decentralized identity**  
Applicants submit resume hashes, ensuring authenticity without storing files on-chain.

### ✔ **No intermediaries**  
No platform takes a cut—payments go directly from employer to worker.

---

## 🧩 Use Cases

- Freelancers seeking fair on-chain payments  
- Companies hiring remote workers globally  
- Trust-minimized recruitment workflows  
- Blockchain-based marketplaces  
- Gig economy automation

---

## 📦 Tech Stack

- **Next.js**  
- **Wagmi + viem**  
- **Flare Coston2 Testnet**  
- **Smart Contract: Solidity**  

---

## 📖 Summary

This Job Marketplace DApp is a complete decentralized solution enabling transparent job posting, applications, hiring, and escrow management—all powered by blockchain.  
It demonstrates a real-world use case of Web3: trustless work relationships.


