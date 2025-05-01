import { useState } from 'react';
import { deletePost } from '@/store/posts/postsApi';
import { useAppDispatch } from '@/store/hooks';
import { Post } from '@/types';

type UsePostCardProps = {
  post: Post;
};

export const usePostCard = ({ post }: UsePostCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const userId = `User ${post.userId}`;
  const avatarInitial = post.title.charAt(0).toUpperCase();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    dispatch(deletePost(+post.id));
    toggleModal();
  };

  return {
    isOpen,
    userId,
    avatarInitial,
    toggleModal,
    handleDelete,
  };
};
