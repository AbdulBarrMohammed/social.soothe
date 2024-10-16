import { Link } from "react-router-dom"
import { getPosts } from "../controller"
import { createPost } from "../controller"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as jwt_decode from "jwt-decode"


export function Posts() {
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        //load journal data from mongodb
        async function loadPosts() {
            //grab user token
            //const token = sessionStorage.getItem("User")
            //const decodedUser = jwt_decode.jwtDecode(token)
            const allPosts = await getPosts()
            setPosts(allPosts)
            //setUser(decodedUser)

        }
        loadPosts()
    }, [])

    async function handlePostSubmit() {
        let newPost = {
            content: content,
            dateCreated: new Date(),
            author: 'null Tester',

        }
        await createPost(newPost)
        //navigate('/posts')
        window.location.reload();

    }




    return (
        <div className="grid grid-cols-4 bg-bgDeepBlue text-white">
            <sidebar className="h-screen col-span-1 border-r">
                <ul>
                    <li>Messages</li>
                    <li>Posts</li>
                </ul>
            </sidebar>
            <div className="col-span-2">
                <form onSubmit={handlePostSubmit} className="flex flex-col border-b p-2">
                        <textarea className="text-lg h-16 rounded-lg p-2 bg-bgDeepBlue" onChange={(e) => setContent(e.target.value)} maxLength={500} required placeholder={`Speak to the community...`}/>
                        <div>
                            <button type="submit" className="bg-[#4470AD] text-white  p-4 rounded-full text-sm font-bold shadow-md">Post</button>
                        </div>

                </form>
                {posts.map((post) => {
                            return (
                                post.content

                            )
                })}

            </div>
            <div className="flex flex-col border-l border-zinc-300">

            </div>


        </div>
    )
}
