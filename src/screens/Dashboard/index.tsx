import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Container, Header, Icon, Title, Form, Button, Lista } from './styles';
import { InputForm } from '../Components/InputForm';
import { UserCard } from '../Components/UserCard';
import { FlatList } from 'react-native';

interface FormData {
  name: string;
  email: string;
  telefone: number;
}

export interface userData {
  id: string;
  name: string;
  email: string;
  telefone: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .required('Email é obrigatório')
    .email('Email é obrigatório'),
  telefone: Yup.number().required('Telefone é obrigatório'),
});

export function Dashboard() {
  const dataKey = `@cadastro:unifoa`;

  const [user, setUser] = useState<userData[]>([]);

  async function userStorageLoading() {
    const response = await AsyncStorage.getItem('@cadastro:unifoa');
    const userCAD = response ? JSON.parse(response) : [];

    setUser(userCAD);
  }

  useEffect(() => {
    userStorageLoading();
  }, [user]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {
    const newRegister = {
      id: String(uuid.v4()),
      name: form.name,
      email: form.email,
      telefone: form.telefone,
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newRegister];

      await AsyncStorage.setItem(
        '@cadastro:unifoa',
        JSON.stringify(dataFormatted)
      );

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemove(id: string) {
    const userNovo = user.filter((user) => user.id !== id);
    setUser(userNovo);

    await AsyncStorage.setItem('@cadastro:unifoa', JSON.stringify(userNovo));
  }

  return (
    <Container>
      <Header>
        <Icon name="codepen" />
        <Title>Register</Title>
      </Header>

      <Form>
        <InputForm
          control={control}
          name="name"
          placeholder="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
          font="poppins"
        />
        <InputForm
          control={control}
          name="email"
          placeholder="Email"
          error={errors.email && errors.email.message}
          font="nunito"
        />
        <InputForm
          control={control}
          name="telefone"
          placeholder="Telefone"
          keyboardType="numeric"
          error={errors.telefone && errors.telefone.message}
          font="roboto"
        />

        <Button onPress={handleSubmit(handleRegister)}>
          <Feather name="arrow-right-circle" size={36} color="#ffff00" />
        </Button>
      </Form>

      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard data={item} onPress={() => handleRemove(item.id)} />
        )}
      />
    </Container>
  );
}
