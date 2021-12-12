/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.usa.ciclo4.retos.repository;


import co.usa.ciclo4.retos.dmodel.Order;
import co.usa.ciclo4.retos.icrudrepository.OrderCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


/**
 *
 *clase Repositorio 'OrderRepository'
 */
@Repository
public class OrderRepository {
    
    /**
     * Atributo objeto 'orderCrudRepository' instancia de la interface
     * 'OrderCrudRepository'
     */
    @Autowired
    private OrderCrudRepository orderCrudRepository;

    /**
     * Metodo para obtener y retornar una lista de todos los registros de
     * documentos de ordenes hacia el metodo 'findAll' del 
     * MongoRepository
     * @return 
     */
    public List<Order> getAll() {
        return orderCrudRepository.findAll();
    }

    /**
     * Metodo para obtener y retornar un registro de documento de orden por
     * el valor de su atributo 'id', hacia el metodo 'findById' del 
     * MongoRepository
     * @param id
     * @return 
     */
    public Optional<Order> getOrderById(Integer id) {
        return orderCrudRepository.findById(id);
    }
    
    /**
     * Metodo para guardar y retornar un registro de documento de orden
     * hacia el metodo 'save' del MongoRepository
     * @param order
     * @return 
     */
    public Order save(Order order) {
        return orderCrudRepository.save(order);
    }

    /**
     * Metodo para actualizar y retornar un registro de documento de producto 
     * hacia el metodo 'update' del MongoRepository
     * @param order 
     */
    public void update(Order order) {
        orderCrudRepository.save(order);
    }
    
    /**
     * Metodo para eliminar y retornar un registro de documento de producto
     * hacia el metodo 'delete' del MongoRepository
     * @param order 
     */
    public void delete(Order order) {
        orderCrudRepository.delete(order);
    }
    
    /**
     * Metodo para obtener y retornar un registro de documento de la orden
     * cuyo valor de atributo 'id' sea el mayor, devuelto hacia el metodo 
     * 'findTopByOrderByIdDesc' del OrderCrudRepository
     * @return 
     */
    public Optional<Order> getOrderWithLastId(){
        return orderCrudRepository.findTopByOrderByIdDesc();
    }    
    
    /**
     * Metodo para obtener y retornar una lista de todos los registros de
     * documentos de ordenes, por el valor del atributo 'zone' 
     * hacia el metodo 'findByZone' del OrderCrudRepository
     * @param zone
     * @return 
     */
    public List<Order> getOrderByZone(String zone) {
        return orderCrudRepository.findByZone(zone);
    }
    
     /**
     * Metodo para obtener y retornar una lista de todos los registros de
     * documentos de ordenes, por el valor del atributo 'status' 
     * hacia el metodo 'findByStatus' del OrderCrudRepository
     * @param status
     * @return 
     */
    public List<Order> getOrderByStatus(String status) {
        return orderCrudRepository.findByStatus(status);
    }   
      
}
