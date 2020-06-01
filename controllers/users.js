let users = [
  {
    id: 1,
    name: 'seokje',
    age: 40,
    gender: 'male',
  },
  {
    id: 2,
    name: 'dalnim',
    age: 39,
    gender: 'female',
  },
  {
    id: 3,
    name: 'jeoungho',
    age: 7,
    gender: 'male',
  },
];

const getUsers = () => {
  return users;
};

const getUser = (id) => {
  const user = users.filter((u) => id === u.id);
  return user[0];
};

const addUser = (name, age, gender) => {
  const user = {
    id: users[users.length - 1].id + 1,
    name,
    age,
    gender,
  };

  users.push(user);
  return user;
};

const updateUser = (id, body) => {
  users = users.map((u) => (u.id === id ? { ...u, ...body } : u));
  return users;
};

const deleteUser = (id) => {
  users = users.filter((u) => u.id !== id);
  return true;
};

export { getUser, getUsers, addUser, updateUser, deleteUser };
