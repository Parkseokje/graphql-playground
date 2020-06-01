import {
  getUsers,
  getUser,
  deleteUser,
  addUser,
  updateUser,
} from '../controllers/users';
import { getMovies, getSuggestedMovie } from '../controllers/movies';

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { id }) => getUser(id),
    movies: (_, { limit }) => getMovies(limit),
    suggestion: (_, {id}) => getSuggestedMovie(id) 
  },
  Mutation: {
    addUser: (_, { name, age, gender }) => addUser(name, age, gender),
    updateUser: (_, { id, ...body }) => updateUser(id, body),
    deleteUser: (_, { id }) => deleteUser(id),
  },
};

export default resolvers;
