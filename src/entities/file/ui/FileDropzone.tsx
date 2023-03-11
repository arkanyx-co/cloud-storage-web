import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormHelperText,
  Typography,
} from '@mui/material';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled, alpha } from '@mui/material/styles';

interface ContainerProps extends BoxProps {
  disabled?: boolean;
}

const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'disabled',
})<ContainerProps>(({ theme, disabled }) => ({
  height: '50vh',
  width: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(
    theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.common.black,
    0.15
  ),
  border: 2,
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.divider,
  borderStyle: 'solid',
  padding: theme.spacing(3, 1),
  '&:hover': {
    borderColor: disabled ? undefined : 'text.primary',
    borderStyle: 'dashed',
  },
  '&:focus-within': {
    borderColor: 'primary.main',
    borderWidth: 2,
  },
}));

interface FileDropzoneProps
  extends Omit<DropzoneOptions, 'onDrop' | 'onDropAccepted'> {
  title?: string;
  buttonText?: string;
  value?: File[];
  onChange: (files: File[]) => void;
}

const FileDropzone = ({
  value,
  onChange,
  title,
  buttonText,
  disabled,
  maxSize,
  ...options
}: FileDropzoneProps) => {
  const { fileRejections, getRootProps, getInputProps, open } = useDropzone({
    ...options,
    disabled,
    maxSize,
    onDropAccepted: onChange,
    noClick: true,
    noKeyboard: true,
  });

  const isFileTooLarge =
    maxSize !== undefined &&
    fileRejections.length > 0 &&
    fileRejections[0].file.size > maxSize;

  return (
    <Container {...getRootProps()}>
      <FormControl error={isFileTooLarge}>
        <input {...getInputProps()} />
        <CloudUploadIcon
          sx={{ fontSize: 72, alignSelf: 'center' }}
          color={disabled ? 'disabled' : 'primary'}
        />
        <Typography variant="subtitle1" textAlign="center" sx={{ paddingY: 1 }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          onClick={open}
          disabled={disabled}
          sx={{ marginBottom: 1 }}
        >
          {buttonText}
        </Button>
        <FormHelperText>
          {' '}
          {fileRejections[0]?.errors[0]?.message}{' '}
        </FormHelperText>
      </FormControl>
    </Container>
  );
};

export default FileDropzone;
