
import React, { useEffect } from 'react';
import ItemPostModal from "./ItemPostModal";
import api from "../../api/posts";
import { useDispatch, useSelector } from 'react-redux';
import { postList } from '../../redux/posts';

const ListPostModal = () => {

    const dispatch = useDispatch();
    const fetchPosts = async () => {
        const response = await api.get("/posts")
        .catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(postList(response.data));
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    const posts = useSelector((state) => state?.posts);

    const renderPostList = posts?.map((post) => {
        return (
            <ItemPostModal
                post={post}
                key={post.id}
            />
        );
    });
    return (
        <div className={`list_item`}>
            {renderPostList}
        </div>
    );
}

export default ListPostModal