import bcrypt from "bcryptjs"
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Dilan Eryilmaz',
    email: 'dilan@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Gokhan Eryilmaz',
    email: 'gokhan@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users