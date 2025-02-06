'use client'
import { useEffect, useState } from "react";
import { createContext } from "react";
import React from "react";

export const AppContext = createContext({
    posts: [{}],
    addPost: (post:any) => {},
    removePost: (i:number) => {},
    modifyPost: (i:number, post:any[]) => {}
})

export const AppProvider = ({children}:any) => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        const postsSalvos = localStorage.getItem('posts')
        setPosts(JSON.parse(postsSalvos? postsSalvos : '[]'))
    }, [])

    const addPost = (post:any[]) => {
        setPosts((prev:any) => {
            const newPost = [...prev, post]
            localStorage.setItem('posts', JSON.stringify(newPost))
            return newPost
        })
    }

    const removePost = (i:number) => {
        console.log(i)
        setPosts((prev:any) => {
            prev.splice(i, 1)
            const newPost = prev
            console.log(newPost)
            localStorage.setItem('posts', JSON.stringify(newPost))
            return newPost
        })
    }

    const modifyPost = (i:number, post:any[]) => {
        setPosts((prev:any) => prev.map((item:any, index:any) => {
            let newPost=[{}];
            index === i ? newPost = [...newPost , post] : [...newPost, item]
            localStorage.setItem('posts', JSON.stringify(newPost))
            return newPost
        }))
    }

    return(
        <AppContext.Provider value={{posts, addPost, removePost, modifyPost}}>
            {children}
        </AppContext.Provider>
    )
}