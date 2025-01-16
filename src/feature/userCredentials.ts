export interface UserCredentials {
  name: string;
  email: string;
  password: string;
}

export const validUsers: UserCredentials[] = [
  {
    name: "asdf",
    email: "asdf@gmail.com",
    password: "1234"
  },
  {
    name: "asd",
    email: "asd@gmail.com",
    password: "123"
  }
];

export const validateCredentials = (email: string, pwd: string) => {
  // return validUsers.some(
  //   (user) => user.email === email && user.password === pwd
  // );
  return validUsers.find(
    (user) => user.email === email && user.password === pwd
  );
};
