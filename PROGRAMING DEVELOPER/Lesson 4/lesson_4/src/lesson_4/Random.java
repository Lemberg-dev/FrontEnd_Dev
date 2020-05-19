package lesson_4;
public class Random 
{
	public static void main(String[] args) {
		int[] number = {293, 765, 38, 99, -74, 64, 89};
	    int max = 0;
	    int min = 0;

	    for (int i = 0 ; i < number.length; i++ ) {
	        if (number[i]> max)
	        {
	            max = number[i];
	        }
	        else if (number[i] <= min)
	        {
	            min = number[i];
	        }
	    }
	    System.out.println("Максимальний елемент в даному масиві  " + max);


	    System.out.println("Маскимальний елемент в даному масиві  " + min);

	   }

	}
