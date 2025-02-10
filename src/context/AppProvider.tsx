'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react";
import React from "react";

export const AppContext = createContext({
    posts: [{}],
    addPost: (post:any) => {},
    removePost: (i:number) => {},
    modifyPost: (i:number, post:any[]) => {},
    postsNoticias: [{}], 
    mudarTema: (tema: string) => {},
    tema: ''
})

export const AppProvider = ({children}:any) => {
    const [posts, setPosts] = useState<any[]>([])
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const [postsNoticias, setPostsNoticias] = useState<any>([])
    const [tema, setTema] = useState<string>('geral')

    useEffect(() => {
        pegarNoticias()
    }, [tema])
    
    const pegarNoticias = async () => {
        await axios.get(`${API_URL}/v2/everything?q=${tema}&language=pt&apiKey=${API_KEY}`)
            .then((response) => {
                console.log(response)
                setPostsNoticias(response.data.articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }

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

    const mudarTema = (tema:string) => {
        console.log('oi')
        setTema(tema)
        setPostsNoticias([])
    }

    return(
        <AppContext.Provider value={{posts, addPost, removePost, modifyPost, postsNoticias, mudarTema, tema}}>
            {children}
        </AppContext.Provider>
    )
}