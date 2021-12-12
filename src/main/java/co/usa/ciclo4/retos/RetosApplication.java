package co.usa.ciclo4.retos;


import co.usa.ciclo4.retos.icrudrepository.CloneCrudRepository;
import co.usa.ciclo4.retos.icrudrepository.OrderCrudRepository;
import co.usa.ciclo4.retos.icrudrepository.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;


/**
 * 
 * Clase Application que implementa la interface 'CommandLineRunner'
 */
//@EntityScan(basePackages = {"co.usa.ciclo4.retos.model"})
@Component
@SpringBootApplication
public class RetosApplication implements CommandLineRunner {

        /**
         * Atributo objeto 'userCrudRepository' instanciado de la clase
         * 'UserCrudRepository'
         */
        @Autowired
        private UserCrudRepository userCrudRepository;
        
        /**
         * Atributo objeto 'cloneCrudRepository' instanciado de la clase
         * 'CloneCrudRepository'
         */
        @Autowired
        private CloneCrudRepository cloneCrudRepository;

        /**
         * Atributo objeto 'orderCrudRepository' instanciado de la clase
         * 'OrderCrudRepository'
         */        
        @Autowired
        private OrderCrudRepository orderCrudRepository;
        
        /**
         * Metodo 'main' del aplicativo.
         * @param args 
         */
	public static void main(String[] args) {
		SpringApplication.run(RetosApplication.class, args);
	}
        
        /**
         * Metodo 'run' del aplicativo, que con la anotación '@Override'
         * sobreescribe la clase 'main'
         * @param args
         * @throws Exception 
         */
        @Override
        public void run(String... args) throws Exception {
            
            /**
             * Metodo que implementa la función de eliminación de Mongo 
             * Repository sobre los documentos de la base de datos.
             * 
             */
            userCrudRepository.deleteAll();
            cloneCrudRepository.deleteAll();
            orderCrudRepository.deleteAll();
            

            //System.out.println("Usuario: " + userCrudRepository.findTopByOrderByIdDesc().get().getName());
        }

}
