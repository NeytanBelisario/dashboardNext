'use client'
import { useContext } from "react"
import { AppContext } from "../context/AppProvider"

export const usePost = () => {
    return useContext(AppContext)
}