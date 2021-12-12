/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package co.usa.ciclo4.retos.dmodel;


import java.util.Date;
import java.util.Map;
//import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 
 * Clase Modelo Documento User
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "orders")
public class Order {
    
    /**
     * Atributo constante 'PENDING' del Documento
     */
    public static String PENDING = "Pendiente";
    
    /**
     * Atributo constante 'APROVED' del Documento
     */
    public static String APROVED = "Aprobada";
    
    /**
     * Atributo constante 'REJECTED' del Documento
     */
    public static String REJECTED = "Rechazada";

    /**
     * Atributo 'id' del Documento
     */
    @Id
    private Integer id;
    
    /**
     * Atributo 'registerDay' del Documento
     */
    private Date registerDay;
    
    /**
     * Atributo 'status' del Documento
     */
    private String status;
    
    /**
     * Atributo 'salesMan' del Documento
     */
    private User salesMan;

    /**
     * Atributo 'products' del Documento
     */
    private Map<String, Clone> products;
    
    /**
     * Atributo 'qualities' del Documento
     */
    private Map<String, Integer> quantities;

}
