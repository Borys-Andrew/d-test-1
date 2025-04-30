'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import { CREATE_POST_STEPS } from './constants';
import { Save, Title, Subject } from '@mui/icons-material';
import { PreviewPostModal } from './components';
import { useAppDispatch, useAppSelector } from '@/store';
import { createPost } from '@/store/posts';
import { Loader } from '@/components/loader';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/paths';

export const CreatePostPage = () => {
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

  if (loading) return <Loader />;

  if (error)
    return (
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        message={error}
      />
    );

  const handleCreate = async () => {
    try {
      await dispatch(createPost({ title, body, userId: 777 }));
      setIsPreviewOpen(false);
      setIsSuccessCreated(true);
      router.push(PATHS.posts);
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', pt: '50px' }}>
      <Paper
        elevation={3}
        sx={{ p: 4 }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
        >
          {stepKeys.map((key) => (
            <Step key={key}>
              <StepLabel>{CREATE_POST_STEPS[key].label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4 }}>
          {activeStep === 0 && (
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputProps={{
                startAdornment: <Title sx={{ mr: '14px' }} />,
              }}
            />
          )}

          {activeStep === 1 && (
            <TextField
              fullWidth
              label="Post text"
              multiline
              value={body}
              onChange={(e) => setBody(e.target.value)}
              InputProps={{
                startAdornment: <Subject sx={{ mr: '14px' }} />,
              }}
            />
          )}

          {activeStep === 2 && (
            <Typography>Click &quot;Save&quot; to preview</Typography>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="text"
            >
              Back
            </Button>
            <Button
              disabled={isNextDisabled()}
              variant="contained"
              onClick={handleNext}
              endIcon={<Save />}
            >
              {activeStep === stepLabels.length - 1 ? 'Save' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <PreviewPostModal
        title={title}
        body={body}
        isPreviewOpen={isPreviewOpen}
        onTogglePreview={togglePreview}
        onHandleCreate={handleCreate}
        onHandleEdit={handleEdit}
      />

      {/* Snackbar success */}
      <Snackbar
        open={isSuccessCreated}
        autoHideDuration={3000}
        onClose={() => setIsSuccessCreated(false)}
        message="Post created 🎉"
      />
    </Box>
  );
};
