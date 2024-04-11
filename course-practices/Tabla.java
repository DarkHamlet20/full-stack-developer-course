import java.util.Scanner;

public class Tabla {
        
        public static void main(String[] args) {
         
         Scanner numero = new Scanner(System.in);
         
         
         System.out.print("Introduce el numero para la tabla: ");
         
          int entero = numero.nextInt();      
          if (entero >=2) {
            for( int i = 2 ; i <= entero; i++){
                 System.out.println();
                 System.out.println("Tabla del " + i);
                     for( int j = 2 ; j <= 12; j++){
                            System.out.println( i + " x " + j + " = " + (i * j));
                        }
                    }        
             } 
        else {
            System.out.println(" El numero tiene que ser mayor o igual a 2");
          }
        numero.close();
      }
    }

