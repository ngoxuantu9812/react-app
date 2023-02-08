import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import api from "../../api/posts";
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from "../../contexts/PostContexts";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "../../redux/posts";
const EditPostModal = () => {
    const { setShowToast, showEditPostModal, setShowEditPostModal } = useContext(PostContext)
    const dispatch = useDispatch()

    const onSubmit = async event => {
        event.preventDefault();
        const response = await api.put("/posts/" + post.id, updatedPost);
        setShowToast({ show: true, message: "Sửa thành công", type: response.status === 200 ? 'success' : 'danger' })
        closeDialog();
        dispatch(postUpdated(response.data));
    }

    let post = useSelector((state) => state?.post)
    const [updatedPost, setUpdatedPost] = useState(post)

    useEffect(() => setUpdatedPost(post), [post])

    const { type, number } = updatedPost || {type: "" , number : ""}

    const resetAddPostData = () => {
        setShowEditPostModal(false)
    }
    const onChangeNewPostForm = event => setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value })

    const closeDialog = () => {
        resetAddPostData()
    }
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={showEditPostModal} onHide={closeDialog}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Sửa sim
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Text id="type-help" muted>Loại mạng</Form.Text>
                        <Form.Control type="text" name="type" value={type} required aria-describedby='type-help' onChange={onChangeNewPostForm} placeholder="VD:Viettel, Vina, Mobi" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text id="number-help" muted>Số điện thoại</Form.Text>
                        <Form.Control type="number" name="number" value={number} required aria-describedby='number-help' onChange={onChangeNewPostForm} placeholder="0123456789" />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDialog}>Đóng</Button>
                    <Button variant="primary" type="submit">Lưu</Button>
                </Modal.Footer>
            </Form>

        </Modal>
    )
}

export default EditPostModal