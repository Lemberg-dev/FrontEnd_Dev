package ua.lviv.lgs;

public class Application {

	public static void main(String[] args) {
		
		int a,b,c;
		a=2;
		b=6;
		c=4;
		
		int d;
		
		d=b*b-4*a*c;
		System.out.println("�����������="+ d);
		
		if (d>0) {
			System.out.println("x1="+ (-b+Math.sqrt(d))/(2*a));
			System.out.println("x2="+ (-b-Math.sqrt(d))/(2*a));
		}else if (d==0) {
			System.out.println("x1=x2="+ (-b)/(2*a));
		}else if (d<0) {
			System.out.println("������� ������� �� ����");
		
		
		
		}
	}
	
	
	
}
