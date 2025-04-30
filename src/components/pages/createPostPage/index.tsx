'use client';

import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Paper,
  Snackbar,
} from '@mui/material';
import { CREATE_POST_STEPS } from './constants';
import { Save, Title, Subject } from '@mui/icons-material';
import { PreviewPostModal } from './components';
import { Loader } from '@/components/loader';
import { useCreatePost } from './hooks';

export const CreatePostPage = () => {
  const {
    activeStep,
    title,
    body,
    isPreviewOpen,
    isSuccessCreated,
    stepKeys,
    stepLabels,
    loading,
    error,
    setTitle,
    setBody,
    isNextDisabled,
    togglePreview,
    handleNext,
    handleBack,
    handleEdit,
    handleCreate,
  } = useCreatePost();

  if (loading) return <Loader />;

  if (error)
    return (
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        message={error}
      />
    );

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

      <Snackbar
        open={isSuccessCreated}
        autoHideDuration={5000}
        message="Post created 🎉"
      />
    </Box>
  );
};
