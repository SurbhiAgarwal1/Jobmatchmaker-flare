"use client"

import { useState } from "react"
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
  usePublicClient
} from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"
import { parseEther } from "viem"

export const useJobContract = () => {
  const publicClient = usePublicClient()
  const [isLoading, setIsLoading] = useState(false)

  // Read next job ID
  const { data: nextJobId, refetch: refetchJobId } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "nextJobId",
  })

  // Write contract hooks
  const {
    writeContractAsync,
    data: txHash,
    isPending,
    error
  } = useWriteContract()

  const {
    isLoading: confirming,
    isSuccess: confirmed
  } = useWaitForTransactionReceipt({ hash: txHash })

  // ----------------------
  // POST JOB
  // ----------------------
  const postJob = async (title: string, description: string, budget: string) => {
    try {
      setIsLoading(true)

      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "postJob",
        args: [title, description, BigInt(budget)],
        value: parseEther(budget),
      })

      refetchJobId()
    } catch (err) {
      console.error("Post Job Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // ----------------------
  // APPLY TO JOB
  // ----------------------
  const applyToJob = async (jobId: number, resumeCID: string) => {
    try {
      setIsLoading(true)

      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "applyToJob",
        args: [BigInt(jobId), resumeCID as `0x${string}`],
      })
    } catch (err) {
      console.error("Apply To Job Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // ----------------------
  // GET APPLICATIONS (fixed!)
  // ----------------------
  const getApplications = async (jobId: number) => {
    try {
      const data = await publicClient.readContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "getApplications",
        args: [BigInt(jobId)],
      })

      return data || []
    } catch (err) {
      console.error("Get Applications Error:", err)
      return []
    }
  }

  // ----------------------
  // HIRE APPLICANT
  // ----------------------
  const hireApplicant = async (jobId: number, index: number) => {
    try {
      setIsLoading(true)

      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "hireApplicant",
        args: [BigInt(jobId), BigInt(index)],
      })
    } catch (err) {
      console.error("Hire Applicant Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // ----------------------
  // RETURN OBJECT
  // ----------------------
  return {
    postJob,
    applyToJob,
    getApplications,
    hireApplicant,
    nextJobId,
    state: {
      isLoading: isLoading || isPending || confirming,
      isPending,
      confirming,
      confirmed,
      error,
      txHash,
    },
  }
}
