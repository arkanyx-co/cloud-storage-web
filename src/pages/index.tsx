import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { file } from '@/shared/api';
import { FileDropzone } from '@/entities/file';

interface IndexProps {
  files: unknown[];
}

const Index = (_props: IndexProps) => {
  const { t } = useTranslation();

  const onChange = async ([fileToUpload]: File[]) => {
    const response = await file.uploadFile(fileToUpload);
    console.log(response);
  };

  return (
    <FileDropzone
      multiple={false}
      title={t<string>('fileDropzone.title')}
      buttonText={t<string>('fileDropzone.buttonText')}
      onChange={onChange}
    />
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  locale,
}) => {
  const { data: files } = await file.getFiles();
  return {
    props: {
      files,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};

export default Index;
