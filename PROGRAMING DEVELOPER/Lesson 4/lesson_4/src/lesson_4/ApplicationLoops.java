package lesson_4;

public class ApplicationLoops {

	
	public static void main(String[] args) {
		
		//�������� �� ����� ����� 55 �������� ����������� 1 3 5 7 9 11 13 15 17
		int sum = 1;
		while(sum <=110) {
		//	System.out.println(sum);
			sum +=2;
		}
		
		
		
		//�������� �� ����� �� ����'��� �������� ����������� 90 85 80 75 70 65 60
		for(int a=95;a>0;a-=5){
        //    System.out.print(a+" ");
		}
		
		
		
		//�������� � ��������� �� �����, �� � ���� ����� �������� � ����� n, ������ ��� ��������
	   //int a = 14;
	   //if (a%2 == 0) System.out.println("����� �����");
	   // else System.out.println( "������� �����");
		
		
		
		//�������� �� ����� ��������� �� 10 � ���� �����, ��������� � ���� m � n. ���������, ����� ����� 8,5 � 11,45 ��������� �� ������ 11,45.
		double n=8.5;
        double m=11.45;
        int a=10;
        double b=Math.abs(a-n);
        double c=Math.abs(a-m);  
        if (b==c){
           // System.out.println("����� "+n +" � "+m + " ����������� �� "+a);
        }
        if(b>c){
           // System.out.println("����� "+m+" ��������� �� "+a);
        }
        if (b<c) {
            //System.out.println("����� "+n+" ��������� �� "+a);
        }
        
        
        
        //��������� ����� ��������� ������ � ���������� �������, � ������ �������� �� �������� �������� � ������. 
        
     
	}
}
