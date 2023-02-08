import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import api from "../../api/posts";
import React, { useContext, useState } from 'react';
import { PostContext } from "../../contexts/PostContexts";
import { useDispatch } from "react-redux";
import { postAdded } from "../../redux/posts";
const AddPostModal = () => {
    const { setShowToast, showAddPostModal, setShowAddPostModal } = useContext(PostContext)
    const [newPost, setNewPost] = useState({
        type: '',
        number: '',
    })
    const closeDialog = () => {
        resetAddPostData()
    }
    const dispatch = useDispatch();
    const onChangeNewPostForm = event => setNewPost({ ...newPost, [event.target.name]: event.target.value })
    const onSubmit = async event => {
        event.preventDefault();
        const response = await api.post("/posts", newPost);
        setShowToast({ show: true, message: "Thêm mới thành công", type: response.status === 201 ? 'success' : 'danger' });
        resetAddPostData();
        dispatch(postAdded(response.data));
    }
    const resetAddPostData = () => {
        setNewPost({ type: '', number: '' });
        setShowAddPostModal(false);

    }
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={showAddPostModal} onHide={closeDialog}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Thêm sim
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Text id="type-help" muted>Loại mạng</Form.Text>
                        <Form.Control type="text" name="type" required aria-describedby='type-help' onChange={onChangeNewPostForm} placeholder="VD:Viettel, Vina, Mobi" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text id="number-help" muted>Số điện thoại</Form.Text>
                        <Form.Control type="number" name="number" required aria-describedby='number-help' onChange={onChangeNewPostForm} placeholder="0123456789" />
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

export default AddPostModal