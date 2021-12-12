/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package co.usa.ciclo4.retos.icrudrepository;

import co.usa.ciclo4.retos.dmodel.Clone;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * 
 * Interface CloneCrudRepository hereda los metodos y atributos de la clase
 * MongoRepository
 */
public interface CloneCrudRepository extends MongoRepository<Clone, Integer>{
    
    /**
     * Metodo Query para seleccionar el registro de documento de producto, con 
     * el valor mayor en el atributo 'id'
     * @return 
     */
    public Optional<Clone> findTopByOrderByIdDesc();
   
}
