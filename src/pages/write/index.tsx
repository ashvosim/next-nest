import WriteForm from 'components/WriteForm';
import MainLayout from 'layouts/MainLayout';

const EditPost = () => (
  <MainLayout hideComments hideMenu className="writeContainer">
    <WriteForm />
  </MainLayout>
);

export default EditPost;
