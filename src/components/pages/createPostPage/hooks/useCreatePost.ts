import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { createPost } from '@/store/posts';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/paths';
import { CREATE_POST_STEPS } from '../constants';

export const useCreatePost = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessCreated, setIsSuccessCreated] = useState(false);
  const { loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const stepKeys = Object.keys(CREATE_POST_STEPS).map(Number);
  const stepLabels = stepKeys.map((key) => CREATE_POST_STEPS[key].label);

  const isNextDisabled = () => {
    if (activeStep === 0) return title.trim().length <= 3;
    if (activeStep === 1) return body.trim().length <= 5;

    return false;
  };

  const togglePreview = () => setIsPreviewOpen((prev) => !prev);

  const handleNext = () => {
    if (activeStep === stepLabels.length - 1) {
      setIsPreviewOpen(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleEdit = () => {
    setActiveStep(1);
    setIsPreviewOpen(false);
  };

  const handleCreate = () => {
    dispatch(createPost({ title, body, userId: 777 }));
    setIsPreviewOpen(false);
    setIsSuccessCreated(true);
    router.push(PATHS.posts);
  };

  return {
    activeStep,
    title,
    body,
    isPreviewOpen,
    isSuccessCreated,
    stepKeys,
    stepLabels,
    loading,
    error,
    setActiveStep,
    setTitle,
    setBody,
    setIsPreviewOpen,
    isNextDisabled,
    togglePreview,
    handleNext,
    handleBack,
    handleEdit,
    handleCreate,
  };
};
