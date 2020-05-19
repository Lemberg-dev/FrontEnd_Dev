package lesson_3;

import java.time.DayOfWeek;
import java.time.LocalDate;

public class Application {
	public static void main(String[] args) {
		
		 LocalDate date = LocalDate.now(); 
	     DayOfWeek dayOfWeek = date.getDayOfWeek();
	     System.out.println(dayOfWeek);
			
	        
	    switch (dayOfWeek) {
	    	case MONDAY:{
	    		System.out.println("Today is " +dayOfWeek + " I go to work");
				break ;
			}
	    	case TUESDAY:{
				System.out.println("Today is " +dayOfWeek + " I do morning exercise");
				break ;
			 }
	    	case WEDNESDAY:{
				System.out.println("Today is " +dayOfWeek + " I have meeting with friends");
				break ;
			}
	    	case THURSDAY:{
				System.out.println("Today is " +dayOfWeek + " I go to cinema");
				break ;
			 }
	    	case FRIDAY:{
				System.out.println("Today is " +dayOfWeek + " I walk with my girlfriend");
				break ;
			}
	    	case SATURDAY:{
	    		System.out.println("Today is " +dayOfWeek + " I play football");
				break ;
	    	}
	    	case SUNDAY:{
	    		System.out.println("Today is " +dayOfWeek + " I have a rest");
				break ;
		 }
		}    
	}
}
