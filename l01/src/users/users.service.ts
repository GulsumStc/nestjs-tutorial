import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private users =  [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'INTERN'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'INTERN'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'INTERN'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'ENGINEER'
    },
    {
      id: 5,
      name: 'Chris Lee',
      email: 'chris.lee@example.com',
      role: 'ADMIN'
    }
  ];


  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter(user => user.role === role);
    }
    return this.users;
    
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
   
    const usersByHighestID = [...this.users].sort((a, b) => b.id - a.id); //
    console.log(usersByHighestID);
    const newUsers = {...createUserDto, id: usersByHighestID[0].id + 1};
    this.users.push(newUsers);
    return this.users;

  }

  /**
   * Update a user with the given id with the provided update user data.
   * If the update user data contains a name, email, or role, it will be updated.
   * If the update user data does not contain any of these fields, the user will not be updated.
   * 
   * @param id The id of the user to update.
   * @param updateUser An object containing optional name, email, and role fields to update the user with.
   * @returns The updated user object with the matching id.
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    // Loop through each user and update the user with the matching id
    this.users = this.users.map(user => {
      if (user.id === id) {
        // If the user has a matching id, update the user with the provided update user data
        return {...user, ...updateUserDto};
      }
      return user;
    })

    // Return the updated user object with the matching id
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
    return removeUser;

  }
  
}
