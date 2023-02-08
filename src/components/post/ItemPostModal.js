import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useContext, useEffect } from 'react';
import { PostContext } from "../../contexts/PostContexts";
import api from "../../api/posts";
import { useDispatch } from "react-redux";
import { postSelected,postDelete } from "../../redux/posts";
const ItemPostModal = (props) => {

    const {setShowToast, setShowEditPostModal } = useContext(
        PostContext
    )
    
    const { id, type, number } = props.post;
    const dispatch = useDispatch();
    const choosePost = async postId => {
        const response = await api.get("/posts/" + postId);
        dispatch(postSelected(response.data));
        setShowEditPostModal(true);
        
    }
    const deletePost = async postId => {
        const response = await api.delete("/posts/" + postId);
        dispatch(postDelete(postId));
        setShowToast({ show: true, message: "Xóa thành công", type: response.status === 200 ? 'success' : 'danger' });
    }

    return (
        <Card className={`card_item`} data-id={id} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Sim {type}</Card.Title>
                <Card.Text>
                    Số điện thoại: {number}
                </Card.Text>
                <Button className={`margin_10`} variant="primary" onClick={choosePost.bind(this, id)}>Sửa</Button>
                <Button className={`margin_10`} variant="danger" onClick={deletePost.bind(this, id)}>Xóa</Button>
            </Card.Body>
        </Card>

    )
}

export default ItemPostModal