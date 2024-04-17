package com.unac.crudProgramacion.dao;

import com.unac.crudProgramacion.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

//primer parametro en la entidad, el segundo es el tipo de dato de la llave primaria
public interface UserDAO extends JpaRepository<UserEntity,Integer> {

}

