import { createContext, useReducer, useRef, useState } from "react"
export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })


    const [postEdit, setPostEdit] = useState({
        type: '',
        number: '',
    })
    const [showAddPostModal, setShowAddPostModal] = useState(false);
    const [showEditPostModal, setShowEditPostModal] = useState(false);

    const PostContextData = { showToast, setShowToast, showAddPostModal, setShowAddPostModal, showEditPostModal, setShowEditPostModal, postEdit, setPostEdit }
    return (
        <PostContext.Provider value={PostContextData}>
            {children}
        </PostContext.Provider>
    )


}
export default PostContextProvider