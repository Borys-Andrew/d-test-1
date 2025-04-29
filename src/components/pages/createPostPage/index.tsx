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
} from '@mui/material';
import { CREATE_POST_STEPS } from './constants';
import { Save, Title, Subject } from '@mui/icons-material';

export const CreatePostPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const stepKeys = Object.keys(CREATE_POST_STEPS).map(Number);
  const stepLabels = stepKeys.map((key) => CREATE_POST_STEPS[key].label);
  const isNextDisabled = () => {
    if (activeStep === 0) {
      return title.length <= 3;
    }
    if (activeStep === 1) {
      return body.length <= 5;
    }
    if (activeStep === 2) {
      return title.length <= 3 || body.length <= 5;
    }
    return false;
  };

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

  const handleConfirm = () => {
    setIsPreviewOpen(false);
    alert(`${title} ${body}`);
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

      <Dialog
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        fullWidth
      >
        <DialogTitle>Preview post</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">{title}</Typography>
          <Typography
            variant="body1"
            sx={{ whiteSpace: 'pre-wrap' }}
          >
            {body}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setActiveStep(1);
              setIsPreviewOpen(false);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
