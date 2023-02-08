import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Toast } from "react-bootstrap";
import { uuid } from "uuidv4";
import AddPostModal from "../components/post/AddPostModal";
import { Router, Switch, Route } from "react-router-dom";
import ListPostModal from "../components/post/ListPostModal";
import { PostContext } from "../contexts/PostContexts";
import EditPostModal from "../components/post/EditPostModal";

export const Dashboard = () => {
  
  const {
    showToast: { show, message, type },
    setShowToast,
    setShowAddPostModal
  } = useContext(PostContext)
  
  
  return (
    <>
      <Button variant="primary" onClick={setShowAddPostModal.bind(this, true)}>
        Thêm sim
      </Button>
      <AddPostModal></AddPostModal>
      <EditPostModal></EditPostModal>

      <ListPostModal ></ListPostModal>
      <Toast
        show={show}
        style={{ position: 'fixed', top: '20%', right: '10px' }}
        className={`bg-${type} text-white`}
        onClose={setShowToast.bind(this, {
          show: false,
          message: '',
          type: null
        })}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </>

  )
}

export default Dashboard