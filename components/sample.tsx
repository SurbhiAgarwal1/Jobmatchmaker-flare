"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useJobContract } from "@/hooks/useContract"

const SampleIntegration = () => {
  const { isConnected } = useAccount()
  const { postJob, applyToJob, hireApplicant, nextJobId, state } = useJobContract()

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [budget, setBudget] = useState("")

  const [jobId, setJobId] = useState("")
  const [resumeCID, setResumeCID] = useState("")

  const [hireJobId, setHireJobId] = useState("")
  const [hireIndex, setHireIndex] = useState("")

  if (!isConnected)
    return (
      <div className="p-6 text-center">
        <p>Please connect your wallet.</p>
      </div>
    )

  return (
    <div className="p-6 max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Job Marketplace</h1>

      {/* POST JOB */}
      <div className="border p-4 rounded-lg space-y-3">
        <h2 className="font-semibold">Post Job</h2>
        <input placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Budget (FLR)" value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-2 border rounded" />
        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={() => postJob(title, desc, budget)}
          disabled={state.isLoading}
        >
          {state.isLoading ? "Posting..." : "Post Job"}
        </button>
      </div>

      {/* APPLY TO JOB */}
      <div className="border p-4 rounded-lg space-y-3">
        <h2 className="font-semibold">Apply to Job</h2>
        <input placeholder="Job ID" value={jobId} onChange={(e) => setJobId(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Resume CID (bytes32)" value={resumeCID} onChange={(e) => setResumeCID(e.target.value)} className="w-full p-2 border rounded" />
        <button
          className="w-full bg-green-600 text-white p-2 rounded"
          onClick={() => applyToJob(Number(jobId), resumeCID)}
          disabled={state.isLoading}
        >
          {state.isLoading ? "Applying..." : "Apply"}
        </button>
      </div>

      {/* HIRE */}
      <div className="border p-4 rounded-lg space-y-3">
        <h2 className="font-semibold">Hire Applicant</h2>
        <input placeholder="Job ID" value={hireJobId} onChange={(e) => setHireJobId(e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Applicant Index" value={hireIndex} onChange={(e) => setHireIndex(e.target.value)} className="w-full p-2 border rounded" />
        <button
          className="w-full bg-purple-600 text-white p-2 rounded"
          onClick={() => hireApplicant(Number(hireJobId), Number(hireIndex))}
          disabled={state.isLoading}
        >
          {state.isLoading ? "Hiring..." : "Hire Applicant"}
        </button>
      </div>

      {/* Status */}
      {state.txHash && (
        <div className="p-3 bg-gray-100 rounded">
          <p className="text-xs break-all">Tx: {state.txHash}</p>
        </div>
      )}
    </div>
  )
}

export default SampleIntegration
