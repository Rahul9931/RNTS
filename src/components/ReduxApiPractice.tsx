import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux2/slice/userSlice';
import { RootState, AppDispatch } from '../redux2/store/store';
import { NativeBaseProvider, Box, Text, Spinner, FlatList } from 'native-base';

const ReduxApiPractice: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="lightBlue.50" p={4}>
        {loading && (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Spinner size="lg" />
            <Text mt={3}>Loading...</Text>
          </Box>
        )}
        {error && (
          <Text color="red.500" fontSize="lg" textAlign="center">
            {error}
          </Text>
        )}
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box p={4} bg="white" borderRadius="md" mb={3} shadow={1}>
              <Text fontSize="xl" bold>
                {item.name}
              </Text>
              <Text>{item.email}</Text>
            </Box>
          )}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default ReduxApiPractice;
