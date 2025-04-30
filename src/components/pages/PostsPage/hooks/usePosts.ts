import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { getPosts } from '@/store/posts';

export const usePosts = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    search,
    loading,
    filteredPosts,
    setSearch,
  };
};
