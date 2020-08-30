import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea
} from '@chakra-ui/core';

import useGenerate from './useGenerate';

const Generate = () => {
  const [generate, generation] = useGenerate();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    return generate({ length: 500, ...data });
  };

  return (
    <Box bg="pink.300" minHeight="100%">
      <Box maxWidth={550} p={4} mx="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="text">Prompt</FormLabel>
            <Textarea
              id="text"
              name="text"
              ref={register({ required: true })}
              defaultValue="The quick brown fox jumps over the lazy dog."
              resize="none"
              height={200}
              borderColor="transparent"
              maxLength={1000}
            />
            {errors.text && <FormErrorMessage>Prompt text is required!</FormErrorMessage>}
          </FormControl>
          <Button type="submit" isLoading={generation.fetching} mb={4}>Generate</Button>
          {!!generation.data && (
            <p>{generation.data}</p>
          )}
          {!!generation.error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Uh oh!</AlertTitle>
              <AlertDescription>{generation.error.message}</AlertDescription>
            </Alert>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default Generate;
