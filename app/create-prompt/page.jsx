'use client'
import React,{useState} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from '@components/Form'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setpost] = useState({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e) => {

  }

  return (
    <Form 
    type ="Create"
    post={post}
    setpost={setpost}
    submitting={submitting}
    handlesubmit={createPrompt}
    />
  )
};

export default CreatePrompt;
