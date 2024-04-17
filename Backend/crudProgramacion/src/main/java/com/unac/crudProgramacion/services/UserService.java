package com.unac.crudProgramacion.services;

import com.unac.crudProgramacion.dto.UserDTO;

import java.util.List;

public interface UserService {
// userDTO es el return lo que va a devolver el metodo , saveUser(UserDTO userDTO) esta es la funcion
    UserDTO  saveUser(UserDTO userDTO);
    List<UserDTO> getUsers();
}
