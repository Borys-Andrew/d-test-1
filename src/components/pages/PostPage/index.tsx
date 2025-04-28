type PostDetailsPageProps = {
  id: string;
};

export const PostDetailsPage = ({ id }: PostDetailsPageProps) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Post Details</h1>
      <p>Showing details for post ID: {id}</p>
    </div>
  );
};
